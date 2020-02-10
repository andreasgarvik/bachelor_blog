import React from 'react';
import instagram from '../../icons/instagram.png';

const Footer = props => {
  return (
    <footer className='page-footer blue-grey lighten-2'>
      <div className='container'>
        <div className='row right'>
          <a className='grey-text text-lighten-3' href='/'>
            <img src={instagram} alt='' />
          </a>
        </div>
        <div className='row'>
          <h5>
            A good programmer is someone who always looks both ways before
            crossing a one-way street.
          </h5>
          <h6>- Doug Linder</h6>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          © 2020 Created by Andreas Garvik
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/andreasgarvik'>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

//Night mode toggel
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

export default Footer;
