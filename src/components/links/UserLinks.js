import React from 'react'
import { NavLink } from 'react-router-dom'

const UserLinks = () => {
	return (
		<ul id='nav-mobile' className='left hide-on-med-and-down'>
			<li>
				<NavLink to='/favorites'>My Favorites</NavLink>
			</li>
		</ul>
	)
}

export default UserLinks
