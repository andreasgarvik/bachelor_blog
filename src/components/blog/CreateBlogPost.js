import React from 'react'
import { connect } from 'react-redux'
import { createNewBlogPost } from '../../store/actions'
import { Redirect } from 'react-router-dom'
import Navbar from '../ui/Navbar'

class CreateBlogPost extends React.Component {
	state = { title: '', content: '', images: [] }

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	uploadImages = e => {
		this.setState({ images: e.target.files })
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.createNewBlogPost(this.state)
		this.props.history.push('/')
	}

	render() {
		if (!this.props.auth.uid) return <Redirect to='/' />
		return (
			<>
				<Navbar location={this.props.history.location} />
				<div className='container'>
					<form onSubmit={this.handleSubmit} className='white'>
						<h5
							className='grey-text text-darken-3'
							style={{ marginBottom: '5%' }}
						>
							New Blog Post
						</h5>
						<div className='input-field'>
							<label htmlFor='title'>Title</label>
							<input type='text' id='title' onChange={this.handleChange} />
						</div>
						<div className='input-field'>
							<label htmlFor='content'>Content</label>
							<textarea
								id='content'
								className='materialize-textarea'
								onChange={this.handleChange}
							/>
						</div>
						<div className='file-field input-field'>
							<div className='btn grey z-depth-0'>
								<span>Images</span>
								<input type='file' multiple onChange={this.uploadImages} />
							</div>
							<div className='file-path-wrapper'>
								<input
									className='file-path validate'
									type='text'
									placeholder='Upload images'
								/>
							</div>
						</div>
						<button
							className='btn grey z-depth-0 right'
							style={{ marginBottom: '5%' }}
						>
							Post
						</button>
					</form>
				</div>
			</>
		)
	}
}

const mapStateToProps = state => {
	return { auth: state.firebase.auth }
}

export default connect(
	mapStateToProps,
	{ createNewBlogPost }
)(CreateBlogPost)
