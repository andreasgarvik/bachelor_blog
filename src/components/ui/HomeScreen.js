import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
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
		const { blogposts } = this.props
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
							{this.props.blogposts ? (
								<BlogPostsList blogposts={blogposts} />
							) : null}
						</div>
					</div>
				</div>
				<div className='parallax-container' style={{ maxHeight: '100px' }}>
					<nav className='blue-grey darken-1 z-depth-0' />
				</div>
				<div className='section white'>
					<div className='container'>
						<div className='row'>
							<div className='col s4'>
								<PersonalBio />
							</div>
						</div>
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
	return { blogposts: state.firestore.ordered.blogposts }
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'blogposts', orderBy: ['timestamp', 'desc'], limit: 4 }
	])
)(HomeScreen)
