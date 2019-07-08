import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import Truncate from 'react-truncate'

class BlogPost extends React.Component {
	state = { imageLoaded: false }
	render() {
		const {
			id,
			title,
			imageNames,
			imageRefs,
			key,
			timestamp
		} = this.props.blogpost
		return (
			<Link to={`/blogposts/${id}`} key={key}>
				<div className='col s12 m6 l6 xl3'>
					<div className='card hoverable' style={{ width: '285px' }}>
						<div className='card-image'>
							<img
								onLoad={() => this.setState({ imageLoaded: true })}
								src={imageRefs[0]}
								alt={imageNames[0]}
							/>
						</div>
						<div className='card-content'>
							<span
								style={{ color: 'black', fontSize: '1.4em' }}
								className='card-title'
							>
								{this.state.imageLoaded ? (
									<Truncate lines={1} ellipsis={<span>...</span>}>
										{title}
									</Truncate>
								) : null}
							</span>
						</div>
						<div className='card-action'>
							<Moment style={{ color: 'black' }} format='D MMM YYYY'>
								{timestamp}
							</Moment>
						</div>
					</div>
				</div>
			</Link>
		)
	}
}

export default BlogPost
