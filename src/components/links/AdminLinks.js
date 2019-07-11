import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLinks = () => {
	return (
		<ul>
			<li>
				<NavLink to='/create' style={{ marginTop: '4px' }}>
					<i className='material-icons'>add</i>
				</NavLink>
			</li>
		</ul>
	)
}

export default AdminLinks
