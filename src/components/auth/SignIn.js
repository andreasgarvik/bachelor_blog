import React from 'react'
import { signIn } from '../../store/actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navbar from '../ui/Navbar'

class SignIn extends React.Component {
	state = { email: '', password: '' }

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.signIn(this.state)
	}

	render() {
		if (this.props.auth.uid) return <Redirect to='/' />
		return (
			<>
				<Navbar location={this.props.history.location} />
				<div className='container'>
					<form onSubmit={this.handleSubmit} className='white'>
						<h5 className='grey-text text-darken-3'>Sign In</h5>
						<div className='input-field'>
							<label htmlFor='email'>Email</label>
							<input type='text' id='email' onChange={this.handleChange} />
						</div>
						<div className='input-field'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								onChange={this.handleChange}
							/>
						</div>
						<button className='btn grey z-depth-0'>Log In</button>
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
	{
		signIn
	}
)(SignIn)
