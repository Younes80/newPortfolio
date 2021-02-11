import React from 'react';
import logo from '../components/assets/img/logo1.svg';

const Logo = () => {
	return (
		<div className="logo-contact">
			<a href="mailto:younes.haidri@gmail.com">
				<img src={logo} alt="logo" />
			</a>
		</div>
	);
};

export default Logo;
