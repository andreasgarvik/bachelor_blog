import React from 'react'
import Comment from './Comment'

const CommentArea = ({ comments }) => {
	return (
		<ul className='collection'>
			{comments.map(comment => {
				return <Comment key={comment.id} comment={comment} />
			})}
		</ul>
	)
}

export default CommentArea
