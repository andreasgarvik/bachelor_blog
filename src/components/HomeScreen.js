import React from 'react'
import BlogPostsLink from './blog/BlogPostsList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import M from 'materialize-css'

class HomeScreen extends React.Component {
	componentDidMount = () => {
		M.AutoInit()
	}

	render() {
		return (
			<>
				<div className='parallax-container'>
					<div className='parallax'>
						<img
							className='responsive-img'
							src='https://firebasestorage.googleapis.com/v0/b/siamawandersblog.appspot.com/o/DSC_0004.JPG?alt=media&token=7eba60cc-7db7-4f07-922b-3ed7c1460c14'
							alt=''
						/>
					</div>
				</div>
				<div className='section white'>
					<div className='container'>
						<div className='row'>
							<h5>Recent Blog Posts</h5>
							<BlogPostsLink blogposts={this.props.blogposts} />
						</div>
					</div>
				</div>
				<div className='parallax-container'>
					<div className='parallax'>
						<img
							className='responsive-img'
							src='https://firebasestorage.googleapis.com/v0/b/siamawandersblog.appspot.com/o/DSC_0079.JPG?alt=media&token=7bebd5e4-f41f-4c6c-ab00-4e66c9a10337'
							alt=''
						/>
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = state => {
	return { blogposts: state.firestore.ordered.blogposts }
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'blogposts', orderBy: ['timestamp', 'desc'] }
	])
)(HomeScreen)
