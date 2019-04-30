import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions'
import { connect } from 'react-redux'

const SignedInLinks = props => {
	return (
		<li>
			<NavLink to='/' onClick={() => props.signOut()}>
				Log Out
			</NavLink>
		</li>
	)
}

export default connect(
	null,
	{
		signOut
	}
)(SignedInLinks)
