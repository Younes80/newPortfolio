import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Particles from 'react-tsparticles';

ReactDOM.render(
	<Router>
		<Particles
			id="tsparticles"
			options={{
				background: {
					color: {
						value: '#fafafa',
					},
				},
				fpsLimit: 60,
				particles: {
					color: {
						value: '#0d47a1',
					},
					links: {
						color: '#e91e63',
						distance: 100,
						enable: true,
						opacity: 0.2,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: 'none',
						enable: true,
						outMode: 'bounce',
						random: false,
						speed: 6,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							value_area: 1000,
						},
						value: 50,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						random: true,
						value: 5,
					},
				},
				detectRetina: true,
			}}
		/>
		<App />
	</Router>,
	document.getElementById('root')
);
