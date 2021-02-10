import React from 'react';
import logo from '../components/assets/img/logo1.svg';

const Footer = () => {
	return (
		<div className="footer">
			<div className="logo">
				<img src={logo} alt="Logo" />
			</div>
			<p className="copyright">
				&copy; 2020 - Fait avec <span className="heart">&hearts;</span> par
				<a href="https://younes-haidri.fr" target="_blank" rel="noreferrer">
					{' '}
					Younes Haidri
				</a>
			</p>
		</div>
	);
};

export default Footer;
