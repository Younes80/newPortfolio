import React from 'react';
import Navigation from '../components/navigation/Navigation';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import * as slides from '../data/DataProd';
import Products from '../components/productions/Products';

const Productions = ({ data }) => {
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

	return (
		<motion.div
			className="bg-offers"
			key="offers"
			exit="out"
			animate="in"
			initial="initial"
			variants={variants}
			transition={transition}>
			<div className="container-offer ">
				<h1 className="bg-title-offer">Mes réalisations</h1>
				<div className="offers">
					<motion.div
						className="offer1"
						initial={{ x: -300, opacity: 0 }}
						animate="in"
						transition={{ duration: 1.5 }}
						variants={variants}>
						<Products data={data} />
					</motion.div>

					<div className="arrow">
						<Link className="arrow-left" to="/aboutus">
							<VscChevronLeft />
						</Link>
						<span>SCROLL</span>
						<Link className="arrow-right" to="/contact">
							<VscChevronRight />
						</Link>
					</div>
				</div>
				<Navigation />
			</div>
			<Footer />
		</motion.div>
	);
};

export default Productions;
