import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLinks = () => {
	return (
		<li>
			<NavLink to='/create'>New BlogPost</NavLink>
		</li>
	)
}

export default AdminLinks
