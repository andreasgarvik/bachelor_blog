import React from 'react'
import BlogPost from './BlogPost'
import Loader from '../Loader'

const BlogPostsList = ({ blogposts }) => {
	return blogposts ? (
		blogposts.map(blogpost => {
			return <BlogPost key={blogpost.id} blogpost={blogpost} />
		})
	) : (
		<Loader />
	)
}

export default BlogPostsList
