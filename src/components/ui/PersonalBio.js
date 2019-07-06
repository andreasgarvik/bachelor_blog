import React from 'react'
import PersonalBioImage from '../../images/PersonalBioImage.jpg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions'

const PersonalBio = props => {
	return (
		<div className='container'>
			<div className='col s4' style={{ marginTop: '4%', marginBottom: '4%' }}>
				{props.auth.uid ? (
					<Link to='/' onClick={props.signOut}>
						<img className='responsive-img' src={PersonalBioImage} alt='' />
					</Link>
				) : (
					<Link to='/signin'>
						<img className='responsive-img' src={PersonalBioImage} alt='' />
					</Link>
				)}
			</div>
			<div
				className='col s8'
				style={{ marginTop: '4%', marginBottom: '4%', color: 'white' }}
			>
				<h4>My name is Sidsel Amanda</h4>
				<p>I love to travel and this is my blog</p>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return { auth: state.firebase.auth }
}

export default connect(
	mapStateToProps,
	{ signOut }
)(PersonalBio)
