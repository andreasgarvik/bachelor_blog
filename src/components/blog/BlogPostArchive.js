import React from 'react'
import BlogPostsList from '../blog/BlogPostsList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Navbar from '../ui/Navbar'

class BlogPostArchive extends React.Component {
	render() {
		const { blogposts } = this.props
		return (
			<>
				<Navbar location={this.props.history.location} />
				<div className='container' style={{ marginTop: '2.5%' }}>
					<div className='row'>
						{blogposts ? <BlogPostsList blogposts={blogposts} /> : null}
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		blogposts: state.firestore.ordered.blogposts
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'blogposts', orderBy: ['timestamp', 'desc'] }
	])
)(BlogPostArchive)
