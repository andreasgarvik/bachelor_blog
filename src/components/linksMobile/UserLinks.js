import React from 'react'
import { NavLink } from 'react-router-dom'

const UserLinks = () => {
	return (
		<li>
			<NavLink to='/favorites'>My Favorites</NavLink>
		</li>
	)
}

export default UserLinks
