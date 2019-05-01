import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './links/SignedInLinks'
import SignedOutLinks from './links/SignedOutLinks'
import AdminLinks from './links/AdminLinks'
import UserLinks from './links/UserLinks'
import SignedInLinksMobile from './linksMobile/SignedInLinks'
import SignedOutLinksMobile from './linksMobile/SignedOutLinks'
import AdminLinksMobile from './linksMobile/AdminLinks'
import UserLinksMobile from './linksMobile/UserLinks'
import { connect } from 'react-redux'
import M from 'materialize-css'

class Navbar extends React.Component {
	componentDidMount = () => {
		M.AutoInit()
	}

	renderLinks = () => {
		if (!this.props.auth.uid) {
			return <SignedOutLinks />
		} else if (this.props.auth.email === 'sidama.sandvik@gmail.com') {
			return (
				<>
					<SignedInLinks profile={this.props.profile} />
					<AdminLinks />
				</>
			)
		}
		return (
			<>
				<SignedInLinks profile={this.props.profile} />
				<UserLinks />
			</>
		)
	}

	renderLinksMobile = () => {
		if (!this.props.auth.uid) {
			return <SignedOutLinksMobile />
		} else if (this.props.auth.email === 'sidama.sandvik@gmail.com') {
			return (
				<>
					<AdminLinksMobile />
					<SignedInLinksMobile />
				</>
			)
		}
		return (
			<>
				<UserLinksMobile />
				<SignedInLinksMobile />
			</>
		)
	}

	render() {
		console.log(this.props)
		const color =
			this.props.location.pathname === '/'
				? 'transparent'
				: 'blue-grey darken-1'
		const position = this.props.location.pathname === '/' ? 'absolute' : ''
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
						<Link to='/' data-target='mobile-nav' className='sidenav-trigger'>
							<i className='material-icons'>menu</i>
						</Link>
						{this.renderLinks()}
					</div>
				</nav>
				<ul className='sidenav light-blue lighten-1' id='mobile-nav'>
					{this.renderLinksMobile()}
				</ul>
			</>
		)
	}
}

const mapStateToProps = state => {
	return { auth: state.firebase.auth, profile: state.firebase.profile }
}

export default connect(mapStateToProps)(Navbar)
