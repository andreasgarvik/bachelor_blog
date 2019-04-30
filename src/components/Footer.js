import React from 'react'
import instagram from '../icons/instagram.png'

const Footer = props => {
	return (
		<footer className='page-footer light-blue lighten-1'>
			<div className='container'>
				<div className='row'>
					<div className='col l6 s12'>
						<h5 className='white-text'>Instagram</h5>
						<a
							className='grey-text text-lighten-3'
							href='https://www.instagram.com/siamawanders/'
						>
							<img src={instagram} alt='' />
						</a>
					</div>
					<div className='col l6 s12'>
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
					</div>
				</div>
			</div>
			<div className='footer-copyright'>
				<div className='container'>
					© 2019 Created by Andreas Garvik
					<a
						className='grey-text text-lighten-4 right'
						href='https://github.com/180312'
					>
						Github
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
