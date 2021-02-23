import React from 'react';
import Navigation from '../components/navigation/Navigation';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Technologies from '../components/Technologies';
import DesignLogo from '../components/DesignLogo';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import Mouse from '../components/Mouse';

const AboutUs = () => {
	const variants = {
		initial: {
			opacity: 0,
			x: 0,
		},
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
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
		<>
			<Mouse />
			<motion.div
				className="about-us"
				key="aboutus"
				exit="out"
				animate="in"
				initial="initial"
				variants={variants}
				transition={transition}>
				<div className="bg-aboutus">
					<h1 className="title-aboutus">Qui suis-je&nbsp;?</h1>
				</div>
				<div className="container">
					<motion.div
						className="about-us-content"
						initial="initial"
						animate="visible"
						transition={{ duration: 1 }}
						variants={elemAnim}>
						<div className="about-us-text">
							<p>
								Autodidacte et touche à tout, j'ai développé des compétences et
								des qualités complémentaires qui facilitent mon évolution et mon
								adaptabilité dans n'importe quel environnement.
							</p>
							<p>
								Passionné de nouvelles technologies, j'ai décidé de me
								spécialiser dans le webdesign et le développement front-end.
							</p>
							<p>Les langages et outils que j'utilise&nbsp;:</p>
							<Technologies />
							<DesignLogo />
							<div className="btn-classic">
								<Link to="/contact" className="button-classic hover">
									Me contacter
								</Link>
								<Link to="/productions" className="button-classic hover">
									Mes réalisations
								</Link>
							</div>
						</div>
					</motion.div>
					<div className="arrow btn-classic">
						<Link className="arrow-left button-classic hover" to="/">
							<VscChevronLeft />
						</Link>
						<Link
							className="arrow-right button-classic hover"
							to="/productions">
							<VscChevronRight />
						</Link>
					</div>
				</div>
				<Navigation />
				<Footer />
			</motion.div>
		</>
	);
};

export default AboutUs;
