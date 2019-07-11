import React from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom'

class FloatingActionButton extends React.Component {
	componentDidMount = () => {
		M.AutoInit()
	}

	render() {
		return (
			<div className='fixed-action-btn click-to-toggle'>
				<button className='btn-floating btn-large grey'>
					<i className='large material-icons'>settings</i>
				</button>
				<ul>
					<li>
						<Link
							to={`/edit/${this.props.id}`}
							className='btn-floating btn-large grey'
						>
							<i className='large material-icons'>mode_edit</i>
						</Link>
					</li>
					<li>
						<button
							data-target='deleteModal'
							className='btn-floating btn-large grey modal-trigger'
						>
							<i className='large material-icons'>delete</i>
						</button>
					</li>
				</ul>
			</div>
		)
	}
}

export default FloatingActionButton
