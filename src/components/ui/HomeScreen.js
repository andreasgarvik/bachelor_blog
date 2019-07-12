import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import BlogPostsList from '../blog/BlogPostsList'
import Navbar from './Navbar'
import PersonalBio from './PersonalBio'
import RecentBlogPost from '../blog/RecentBlogpost'
import BackgroundImage1 from '../../images/BackgroundImage1.jpg'
import BackgroundImage2 from '../../images/BackgroundImage2.jpg'

class HomeScreen extends React.Component {
	componentDidMount = () => {
		M.AutoInit()
	}

	render() {
		const { blogposts, personal } = this.props
		return (
			<>
				<Navbar location={this.props.history.location} />
				<div className='parallax-container'>
					<div className='parallax'>
						<img className='responsive-img' src={BackgroundImage1} alt='' />
					</div>
				</div>
				<div className='section white'>
					<div className='container'>
						<div className='row'>
							{blogposts ? <BlogPostsList blogposts={blogposts} /> : null}
						</div>
					</div>
					<Link
						to='/blogposts'
						className='btn grey'
						style={{
							margin: 'auto',
							display: 'block',
							width: '75px'
						}}
					>
						More
					</Link>
				</div>
				<div>
					<div className='blue-grey darken-1 z-depth-0'>
						<div className='row'>
							<div className='col s12 xl6'>
								<PersonalBio personal={personal ? personal[0] : null} />
							</div>
							<div className='col s12 xl6'>
								<PersonalBio personal={personal ? personal[1] : null} />
							</div>
						</div>
					</div>
				</div>
				<div className='section white'>
					<div className='container'>
						{this.props.blogposts ? (
							<RecentBlogPost
								id={blogposts[0] ? blogposts[0].id : null}
								blogpost={blogposts[0]}
							/>
						) : null}
					</div>
				</div>
				<div className='parallax-container'>
					<div className='parallax'>
						<img className='responsive-img' src={BackgroundImage2} alt='' />
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		blogposts: state.firestore.ordered.blogposts,
		personal: state.firestore.ordered.personal
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		'personal',
		{ collection: 'blogposts', orderBy: ['timestamp', 'desc'], limit: 4 }
	])
)(HomeScreen)
