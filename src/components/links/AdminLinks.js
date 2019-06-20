import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLinks = () => {
	return (
		<ul>
			<li>
				<NavLink to='/create'>New BlogPost</NavLink>
			</li>
		</ul>
	)
}

export default AdminLinks
