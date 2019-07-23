import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteComment } from '../../store/actions'

const Comment = props => {
	return (
		<li className='collection-item avatar' style={{ border: 'none' }}>
			<i className='material-icons circle'>format_align_left</i>
			<span className='title'>{props.comment.name}</span>
			<p>{props.comment.text}</p>
			{props.auth.uid ? (
				<button
					className='btn-flat transparent right'
					onClick={() => props.deleteComment(props.comment.id)}
				>
					<i
						className='material-icons'
						style={{
							color: '#ef9a9a',
							position: 'absolute',
							top: '28px',
							right: '13px'
						}}
					>
						delete
					</i>
				</button>
			) : null}
			<p style={{ color: '#ef9a9a' }} className='secondary-content text'>
				<Moment format='D MMM YYYY'>{props.comment.timestamp}</Moment>
			</p>
		</li>
	)
}

const mapStateToProps = state => {
	return { auth: state.firebase.auth }
}

export default connect(
	mapStateToProps,
	{ deleteComment }
)(Comment)
