import React from 'react'

const RecentBlogPost = ({ blogpost }) => {
	return (
		<div className='card z-depth-0' style={{ marginTop: '0%' }}>
			<div className='card-content'>
				<img
					className='responsive-img'
					src={blogpost.imageRefs[0]}
					alt={blogpost.imageNames[0]}
				/>
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
