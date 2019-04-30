import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
	return (
		<li>
			<NavLink to='/signIn'>Log in</NavLink>
		</li>
	)
}

export default SignedOutLinks
