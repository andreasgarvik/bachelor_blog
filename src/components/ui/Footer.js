import React from 'react'
import instagram from '../../icons/instagram.png'

const Footer = props => {
	return (
		<footer className='page-footer blue-grey darken-1'>
			<div className='container'>
				<div className='row right'>
					<a
						className='grey-text text-lighten-3'
						href='https://www.instagram.com/siamawanders/'
					>
						<img src={instagram} alt='' />
					</a>
				</div>
				<div className='row'>
					<h5>Not all who wanders are lost...</h5>
					<h6>- J.R.R Tolkien</h6>
				</div>
			</div>
			<div className='footer-copyright'>
				<div className='container'>
					© 2019 Created by Andreas Garvik
					<a
						className='grey-text text-lighten-4 right'
						href='https://github.com/andreasgarvik'
					>
						Github
					</a>
				</div>
			</div>
		</footer>
	)
}

//Night mode togge
/* <div className='col l6 s12'>
<div className='switch right'>
	<label className='white-text'>
		Day
		<input
			type='checkbox'
			onChange={() => props.toggleNightMode()}
		/>
		<span className='lever' />
		Night
	</label>
</div>
</div> */

export default Footer
