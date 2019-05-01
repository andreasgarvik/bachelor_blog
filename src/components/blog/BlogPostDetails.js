import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Moment from 'react-moment'
import Loader from '../Loader'
import ProgressiveImage from './ProgressiveImage'
import M from 'materialize-css'
import Navbar from '../Navbar'

class BlogPostDetails extends React.Component {
	componentDidMount = () => {
		M.AutoInit()
	}

	render() {
		const { blogpost } = this.props
		return (
			<>
				<Navbar location={this.props.history.location} />
				<div className='container section'>
					{blogpost ? (
						<div className='card z-depth-0'>
							<div className='card-content'>
								<ProgressiveImage image={blogpost.imageRefs[0]} />
								<span className='card-title'>{blogpost.title}</span>
								<p style={{ whiteSpace: 'pre-wrap' }}>{blogpost.content}</p>
								{blogpost.imageRefs[1] ? (
									<img
										className='responsive-img materialboxed'
										src={blogpost.imageRefs[1]}
										alt=''
									/>
								) : null}
							</div>
							<div className='card-action grey lighten-4 grey-text'>
								<div>Posted by {blogpost.auther}</div>
								<div>
									<Moment format='D MMM YYYY'>{blogpost.timestamp}</Moment>
								</div>
							</div>
						</div>
					) : (
						<Loader />
					)}
				</div>
			</>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id
	const blogposts = state.firestore.data.blogposts
	const blogpost = blogposts ? blogposts[id] : null
	return { blogpost }
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{
			collection: 'blogposts'
		}
	])
)(BlogPostDetails)
