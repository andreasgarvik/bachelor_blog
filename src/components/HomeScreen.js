import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Loader from './Loader'
import M from 'materialize-css'
import BlogPostsList from './blog/BlogPostsList'
import Navbar from './Navbar'

class HomeScreen extends React.Component {
	componentDidMount = () => {
		M.AutoInit()
	}

	render() {
		return (
			<>
				<Navbar location={this.props.history.location} />
				<div className='parallax-container'>
					<div className='parallax'>
						<img
							className='responsive-img'
							src='https://firebasestorage.googleapis.com/v0/b/siamawandersblog.appspot.com/o/DSC_0004.jpg?alt=media&token=5cbe98c8-76c9-48e7-8866-15529e5413fd'
							alt=''
						/>
					</div>
				</div>
				<div className='section white'>
					<div className='container'>
						<div className='row'>
							<h5>Recent Blog Posts</h5>
							{this.props.blogposts ? (
								<BlogPostsList blogposts={this.props.blogposts} />
							) : (
								<Loader />
							)}
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
