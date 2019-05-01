import React from 'react'
import BlogPost from './BlogPost'

const BlogPostsList = ({ blogposts }) => {
	return blogposts.map(blogpost => {
		return <BlogPost key={blogpost.id} blogpost={blogpost} />
	})
}

export default BlogPostsList
