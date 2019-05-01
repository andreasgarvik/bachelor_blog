import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLinks = () => {
	return (
		<ul id='nav-mobile' className='left hide-on-med-and-down'>
			<li>
				<NavLink to='/create'>New BlogPost</NavLink>
			</li>
		</ul>
	)
}

export default AdminLinks
