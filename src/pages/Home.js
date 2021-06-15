import React from 'react';
import logo from '../components/assets/img/logo1.svg';
import { motion } from 'framer-motion';
import { VscChevronRight } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Mouse from '../components/Mouse';
// import DynamicText from '../components/DynamicText';

const Home = () => {
	const variants = {
		initial: {
			opacity: 0.4,
			x: 0,
		},
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0.4,
			x: 0,
		},
	};
	const transition = {
		ease: [0.03, 0.87, 0.73, 0.9],
		duration: 0.6,
	};

	let plusMinus = Math.random() > 0.4 ? 1 : -1;
	let logoX = Math.random() * 350 * plusMinus;
	let logoY = Math.random() * 120 * plusMinus;
	const elemAnim = {
		initial: { opacity: 0, x: logoX, y: logoY },
		visible: { opacity: 1, x: 0, y: 0 },
	};

	return (
		<motion.div
			className="container-fluid-home"
			key="home"
			exit="out"
			animate="in"
			initial="initial"
			variants={variants}
			transition={transition}>
			<Mouse />
			<motion.div
				className="logo-home"
				initial="initial"
				animate="visible"
				transition={{ duration: 1 }}
				variants={elemAnim}>
				<img src={logo} alt="logo" />
				<h1>
					<span className="my-name my-fristname">Younes</span>
					<span className="my-name my-lastname"> HAÏDRI</span>
					<p>Concepteur développeur d'application</p>
				</h1>
			</motion.div>
			<div className="arrow btn-classic">
				<Link className="arrow-right button-classic hover" to="/aboutus">
					<VscChevronRight />
				</Link>
			</div>
		</motion.div>
	);
};

export default Home;
