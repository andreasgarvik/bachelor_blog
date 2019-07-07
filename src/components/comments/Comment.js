import React from 'react'
import Moment from 'react-moment'

const Comment = ({ comment }) => {
	return (
		<li className='collection-item avatar' style={{ border: 'none' }}>
			<i className='material-icons circle'>format_align_left</i>
			<span className='title'>{comment.name}</span>
			<p>{comment.text}</p>
			<p style={{ color: '#ef9a9a' }} className='secondary-content text'>
				<Moment format='D MMM YYYY'>{comment.timestamp}</Moment>
			</p>
		</li>
	)
}

export default Comment
