import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import Products from '../components/productions/Products';
import Mouse from '../components/Mouse';
// import { slides } from '../data/DataProd';

const Productions = ({ data }) => {
	// const [filter, setFilter] = useState('All');
	// const [projects, setProjects] = useState([]);
	// useEffect(() => {
	// 	setProjects(slides);
	// }, []);

	// useEffect(() => {
	// 	setProjects([]);
	// 	const filtered = slides.map(p => ({
	// 		...p,
	// 		filtered: p.category.includes(filter),
	// 	}));

	// 	setProjects(filtered);
	// 	console.log(filtered[0].id);
	// }, [filter]);

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
			<Mouse />
			<div className="container-offer ">
				<h1 className="bg-title-offer">Mes réalisations</h1>
				{/* <div className="portfolio__labels">
					<a
						href="/productions"
						active={filter === 'All'}
						onClick={() => setFilter('All')}>
						Tout
					</a>
					<a
						href="/productions"
						active={filter === 'React.js'}
						onClick={() => setFilter('React.js')}>
						React.js
					</a>
					<a
						href="/productions"
						active={filter === 'Intégration'}
						onClick={() => setFilter('Intégration')}>
						Intégration
					</a>
					<a
						href="/productions"
						active={filter === 'Webdesign'}
						onClick={() => setFilter('Webdesign')}>
						Webdesign
					</a>
					<a
						href="/productions"
						active={filter === 'Wordpress'}
						onClick={() => setFilter('Wordpress')}>
						Wordpress
					</a>
				</div> */}
				<div className="offers hover">
					<motion.div
						className="offer1"
						initial={{ x: -300, opacity: 0 }}
						animate="in"
						transition={{ duration: 1.5 }}
						variants={variants}>
						{/* {projects.map(item =>
							item.filtered === true ? (
								<Product key={item.id} data={data} />
							) : (
								''
							)
						)} */}
						<Products data={data} />
					</motion.div>
				</div>
			</div>
			<div className="arrow btn-classic">
				<Link className="arrow-left button-classic hover" to="/aboutus">
					<VscChevronLeft />
				</Link>
				<Link className="arrow-right button-classic hover" to="/contact">
					<VscChevronRight />
				</Link>
			</div>
		</motion.div>
	);
};

export default Productions;
