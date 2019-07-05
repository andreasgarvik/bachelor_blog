import React from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom'

class FloatingActionButton extends React.Component {
	componentDidMount = () => {
		M.AutoInit()
	}

	render() {
		return (
			<div className='fixed-action-btn'>
				<Link
					to={`/edit/${this.props.id}`}
					className='btn-floating btn-large red'
				>
					<i className='large material-icons'>mode_edit</i>
				</Link>
				<ul>
					<li>
						<button
							data-target='deleteModal'
							className='btn-floating btn-large red modal-trigger'
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
