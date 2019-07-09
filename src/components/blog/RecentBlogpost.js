import React from 'react'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate'

const RecentBlogPost = ({ id, blogpost }) => {
	return blogpost ? (
		<div className='card z-depth-0' style={{ marginTop: '0%' }}>
			<div className='card-content'>
				<img
					className='responsive-img'
					src={blogpost.imageRefs[0]}
					alt={blogpost.imageNames[0]}
				/>
				<span className='card-title'>{blogpost.title}</span>
				<Truncate
					lines={3}
					ellipsis={
						<span>
							...
							<Link
								className='btn grey'
								style={{ marginTop: '2%' }}
								to={`/blogposts/${id}`}
							>
								Read more
							</Link>
						</span>
					}
				>
					{blogpost.content.split('\n').map((line, i, arr) => {
						const newLine = <span key={i}>{line}</span>

						if (i === arr.length - 1) {
							return newLine
						} else {
							return [newLine, <br key={i + 'br'} />]
						}
					})}
				</Truncate>
			</div>
		</div>
	) : null
}

export default RecentBlogPost
