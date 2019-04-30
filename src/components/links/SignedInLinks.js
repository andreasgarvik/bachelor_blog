import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions'
import { connect } from 'react-redux'

const SignedInLinks = props => {
	return (
		<ul id='nav-mobile' className='right hide-on-med-and-down'>
			<li>
				<NavLink to='/' onClick={() => props.signOut()}>
					Log Out
				</NavLink>
			</li>
			<li>
				<NavLink to='/' className='btn btn-floating light-blue lighten-1'>
					{props.profile.initials}
				</NavLink>
			</li>
		</ul>
	)
}

export default connect(
	null,
	{
		signOut
	}
)(SignedInLinks)
