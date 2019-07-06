import React from 'react'
import { Link } from 'react-router-dom'

class BlogPost extends React.Component {
	state = { imageLoaded: false }
	render() {
		const { id, title, imageNames, imageRefs, key } = this.props.blogpost
		return (
			<Link to={`/blogposts/${id}`} key={key}>
				<div className='col s12 m6 l6 xl3'>
					<div className='card'>
						<div className='card-image'>
							<img
								onLoad={() => this.setState({ imageLoaded: true })}
								src={imageRefs[0]}
								alt={imageNames[0]}
							/>
							<span
								style={{
									fontSize: '1.3em'
								}}
								className='card-title'
							>
								{this.state.imageLoaded ? title : null}
							</span>
						</div>
					</div>
				</div>
			</Link>
		)
	}
}

export default BlogPost
