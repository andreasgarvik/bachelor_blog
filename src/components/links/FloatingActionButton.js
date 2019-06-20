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
						<Link to='/' className='btn-floating btn-large red'>
							<i className='large material-icons'>delete</i>
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default FloatingActionButton
