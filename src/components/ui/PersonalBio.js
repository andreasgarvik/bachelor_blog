import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { editPersonalBio, signOut } from '../../store/actions'

class PersonalBio extends React.Component {
	state = { edit: false, title: '', text: '', image: null }

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	uploadImage = e => {
		this.setState({ image: e.target.files[0] })
	}

	editClick = () => {
		this.state.edit
			? this.setState({ edit: false, title: '', text: '', image: null })
			: this.setState({ edit: true })
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.editPersonalBio(
			this.props.personal.id,
			this.state.title,
			this.state.text,
			this.props.personal.imageName,
			this.state.image
		)
		this.setState({ edit: false })
	}

	render() {
		const { personal } = this.props
		return (
			<div className='container'>
				<div
					className='col s12 m4 '
					style={{ marginTop: '4%', marginBottom: '4%' }}
				>
					{this.props.auth.uid ? (
						<Link to='/' onClick={this.props.signOut}>
							<img
								className='responsive-img'
								src={personal ? personal.image : null}
								alt=''
							/>
						</Link>
					) : (
						<Link to='/signin'>
							<img
								className='responsive-img'
								src={personal ? personal.image : null}
								alt=''
							/>
						</Link>
					)}
				</div>
				<div
					className='col s12 m8'
					style={{ marginTop: '4%', marginBottom: '4%', color: 'white' }}
				>
					{this.state.edit ? (
						<form onSubmit={this.handleSubmit}>
							<div className='input-field'>
								<label htmlFor='title' style={{ color: 'white' }}>
									Title
								</label>
								<input
									type='text'
									style={{ color: 'white' }}
									id='title'
									onChange={this.handleChange}
								/>
							</div>
							<div className='input-field'>
								<label htmlFor='text' style={{ color: 'white' }}>
									Text
								</label>
								<textarea
									id='text'
									style={{ color: 'white' }}
									className='materialize-textarea'
									onChange={this.handleChange}
								/>
							</div>
							<div className='file-field input-field'>
								<div className='btn grey z-depth-0'>
									<span>Image</span>
									<input type='file' onChange={this.uploadImage} />
								</div>
								<div className='file-path-wrapper'>
									<input
										className='file-path validate'
										type='text'
										placeholder='Upload image'
									/>
								</div>
							</div>
							<button
								className='btn grey z-depth-0 left'
								onClick={this.editClick}
							>
								Back
							</button>
							<button
								className={`btn grey z-depth-0 right ${
									!this.state.title || !this.state.text || !this.state.image
										? 'disabled'
										: ''
								}`}
							>
								Post
							</button>
						</form>
					) : (
						<>
							{this.props.auth.uid ? (
								<button
									className='btn-flat btn-large transparent right'
									onClick={this.editClick}
								>
									<i className='material-icons' style={{ color: 'white' }}>
										create
									</i>
								</button>
							) : null}
							<h4>{personal ? personal.title : null}</h4>
							<p>{personal ? personal.text : null}</p>
						</>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { auth: state.firebase.auth }
}

export default connect(
	mapStateToProps,
	{ editPersonalBio, signOut }
)(PersonalBio)
