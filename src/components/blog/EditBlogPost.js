import React from 'react'
import { connect } from 'react-redux'
import { editBlogPost } from '../../store/actions'
import { Redirect } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import M from 'materialize-css'

class EditBlogPost extends React.Component {
	constructor(props) {
		super(props)
		this.textAreaRef = React.createRef()
		this.state = { title: '', content: '', imageNames: [], images: [] }
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	componentDidMount = () => {
		if (this.props.blogpost) {
			const { title, content, imageNames, imageRefs } = this.props.blogpost
			this.setState({ title, content, imageNames, images: imageRefs })
		}
	}

	componentDidUpdate = () => {
		M.textareaAutoResize(this.textAreaRef.current)
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.editBlogPost(this.state, this.props.id)
		this.props.history.push('/')
	}

	uploadImages = e => {
		this.setState({ images: e.target.files })
	}

	render() {
		if (!this.props.auth.uid) return <Redirect to='/' />
		if (!this.props.blogpost)
			return <Redirect to={`/blogposts/${this.props.id}`} />
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
							<label className='active' htmlFor='title'>
								Title
							</label>
							<input
								type='text'
								value={this.state.title}
								id='title'
								onChange={this.handleChange}
							/>
						</div>
						<div className='input-field'>
							<label className='active' htmlFor='content'>
								Content
							</label>
							<textarea
								id='content'
								ref={this.textAreaRef}
								value={this.state.content}
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
						<button className='btn grey z-depth-0 right'>Post</button>
					</form>
					<div className='container'>
						<img className='responsive-img' src={this.state.images[0]} alt='' />
						<img className='responsive-img' src={this.state.images[1]} alt='' />
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id
	const blogposts = state.firestore.data.blogposts
	const blogpost = blogposts ? blogposts[id] : null
	return { auth: state.firebase.auth, blogpost, id }
}

export default connect(
	mapStateToProps,
	{ editBlogPost }
)(EditBlogPost)
