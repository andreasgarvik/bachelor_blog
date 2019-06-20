import React from 'react'
import { Link } from 'react-router-dom'
import AdminLinks from '../links/AdminLinks'
import { connect } from 'react-redux'
//import Logo from '../icons/SiamaWanders-logo.png'

const Navbar = props => {
	const renderLinks = () => {
		return props.auth.uid ? <AdminLinks /> : null
	}

	const color =
		props.location.pathname === '/' ? 'transparent' : 'blue-grey darken-1'
	const position = props.location.pathname === '/' ? 'absolute' : ''
	return (
		<>
			<nav
				style={{ position: position }}
				className={`nav-wrapper ${color} z-depth-0`}
			>
				<div style={{ width: '80%' }} className='container'>
					<Link to='/' className='brand-logo center'>
						SiamaWanders
					</Link>
					{renderLinks()}
				</div>
			</nav>
		</>
	)
}

const mapStateToProps = state => {
	return { auth: state.firebase.auth, profile: state.firebase.profile }
}

export default connect(mapStateToProps)(Navbar)
