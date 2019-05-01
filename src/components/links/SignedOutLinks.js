import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
	return (
		<ul id='nav-mobile' className='right hide-on-med-and-down'>
			<li>
				<NavLink
					to='/signIn'
					className='btn btn-floating light-blue lighten-1 '
				>
					<i class='material-icons'>person</i>
				</NavLink>
			</li>
		</ul>
	)
}

export default SignedOutLinks
