import React from 'react'
import PersonalBioImage from '../../images/PersonalBioImage.jpg'
import ProgressiveImage from '../../utils/ProgressiveImage'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions'

const PersonalBio = props => {
	return (
		<div className='card z-depth-0'>
			<div className='card-content'>
				{props.auth.uid ? (
					<Link to='/' onClick={props.signOut}>
						<ProgressiveImage image={PersonalBioImage} />
					</Link>
				) : (
					<Link to='/signin'>
						<ProgressiveImage image={PersonalBioImage} />
					</Link>
				)}
				<span className='card-title'>My name is Sidsel Amanda</span>
				<p style={{ whiteSpace: 'pre-wrap' }}>
					I love to travel and this is my blog
				</p>
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
