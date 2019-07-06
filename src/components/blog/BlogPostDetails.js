import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { editHeartCommentBlogPost, deleteBlogPost } from '../../store/actions'
import Moment from 'react-moment'
import ProgressiveImage from '../../utils/ProgressiveImage'
import M from 'materialize-css'
import Navbar from '../ui/Navbar'
import FloatingActionButton from '../links/FloatingActionButton'

class BlogPostDetails extends React.Component {
	state = { heart: false }

	componentDidMount = () => {
		M.AutoInit()
	}

	handleDelete = () => {
		const { deleteBlogPost, blogpost, id } = this.props
		deleteBlogPost(blogpost, id)
		this.props.history.push('/')
	}

	showHeart = () => {
		return this.state.heart ? (
			<button
				onClick={this.handleHeart}
				className='btn-floating btn-large red lighten-3'
				style={{ marginTop: '3%' }}
			>
				<i className='material-icons'>favorite</i>
			</button>
		) : (
			<button
				onClick={this.handleHeart}
				className='btn-floating btn-large red lighten-3'
				style={{ marginTop: '3%' }}
			>
				<i className='material-icons'>favorite_border</i>
			</button>
		)
	}

	handleHeart = () => {
		let { hearts, comments } = this.props.blogpost
		if (this.state.heart) {
			this.setState({ heart: false })
			this.props.editHeartCommentBlogPost(this.props.id, --hearts, comments)
		} else {
			this.setState({ heart: true })
			this.props.editHeartCommentBlogPost(this.props.id, ++hearts, comments)
		}
	}

	render() {
		const { blogpost, id } = this.props
		return (
			<>
				<Navbar location={this.props.history.location} />
				<div className='container'>
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
								{this.showHeart()}
							</div>
							<div className='card-action grey lighten-4 grey-text'>
								<div>Posted by {blogpost.auther}</div>
								<div>
									<Moment format='D MMM YYYY'>{blogpost.timestamp}</Moment>
								</div>
							</div>
						</div>
					) : null}
				</div>
				<FloatingActionButton id={id} />
				<div id='deleteModal' className='modal bottom-sheet'>
					<div className='modal-content'>
						<h4>Are you sure you want to delete this blogpost?</h4>
					</div>
					<div className='modal-footer' style={{ marginBottom: '2%' }}>
						<button
							className='modal-close btn-large red modal-trigger'
							onClick={this.handleDelete}
						>
							<i className='large material-icons'>delete</i>
						</button>
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id
	const blogposts = state.firestore.data.blogposts
	const blogpost = blogposts ? blogposts[id] : null
	return { blogpost, id }
}

export default compose(
	connect(
		mapStateToProps,
		{ editHeartCommentBlogPost, deleteBlogPost }
	),
	firestoreConnect([
		{
			collection: 'blogposts'
		}
	])
)(BlogPostDetails)
