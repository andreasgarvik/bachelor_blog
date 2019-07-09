import React from 'react'
import PersonalBioImage from '../../images/PersonalBioImage.jpg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { editPersonalBio, signOut } from '../../store/actions'

class PersonalBio extends React.Component {
	state = { edit: false, title: '', text: '' }

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	editClick = () => {
		this.state.edit
			? this.setState({ edit: false })
			: this.setState({ edit: true })
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.editPersonalBio(
			this.props.personal.id,
			this.state.title,
			this.state.text
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
							<img className='responsive-img' src={PersonalBioImage} alt='' />
						</Link>
					) : (
						<Link to='/signin'>
							<img className='responsive-img' src={PersonalBioImage} alt='' />
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
							<button
								className='btn teal lighten-3 z-depth-0 left'
								onClick={this.editClick}
							>
								Back
							</button>
							<button
								className='btn teal lighten-3 z-depth-0 right'
								style={{ marginBottom: '5%' }}
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
