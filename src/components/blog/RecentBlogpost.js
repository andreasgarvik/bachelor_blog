import React from 'react'
import ProgressiveImage from '../../utils/ProgressiveImage'

const RecentBlogPost = ({ blogpost }) => {
	return (
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
			</div>
		</div>
	)
}

export default RecentBlogPost
