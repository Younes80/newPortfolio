import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import Profil from '../components/assets/img/Profil.jpg';

const Address = () => {
	return (
		<div className="address">
			<div className="img-profil">
				<img src={Profil} alt="profil" />
			</div>
			<h2>
				<span className="my-fristname">Younes</span>
				<span className="my-lastname"> HAïDRI</span>
			</h2>
			<p>Basé à Bordeaux</p>
			<a className="hover" href="mailto:younes.haidri@gmail.com">
				younes.haidri@gmail.com
			</a>
			<br />
			<a className="hover" href="tel:0615041415">
				06.15.04.14.15
			</a>
			<br />
			<a
				href="https://www.linkedin.com/in/younes-h-28b86050/"
				target="_blank"
				rel="noreferrer">
				<SiLinkedin className="icon-social-media hover" size="50px" />
			</a>
			<a href="https://github.com/Younes80" target="_blank" rel="noreferrer">
				<SiGithub className="icon-social-media hover" size="50px" />
			</a>
		</div>
	);
};

export default Address;
