import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Navigation = () => {
	return (
		<Menu className="navbar-container">
			<ul className="navbar-list">
				<li className="menu-item">
					<Link to="/">Accueil</Link>
				</li>
				<li className="menu-item">
					<Link to="/aboutus">Qui suis-je&nbsp;?</Link>
				</li>
				<li className="menu-item">
					<Link to="/productions">Réalisations</Link>
				</li>
				<li className="menu-item">
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</Menu>
	);
};

export default Navigation;
