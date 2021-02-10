import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import imgNewsArticle1 from '../components/assets/img/img-news-home.jpg';

const News = props => {
	// const [dataNews, setDataNews] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:5500/news')
	// 		.then(response => {
	// 			setDataNews(response.data);
	// 			console.log(response.data[0].title);
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// }, []);

	const variants = {
		initial: {
			opacity: 0.4,
			x: 300,
		},
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0.4,
			x: -800,
		},
	};
	const transition = {
		ease: [0.03, 0.87, 0.73, 0.9],
		duration: 0.6,
	};
	return (
		<motion.div
			className="news"
			key="news"
			exit="out"
			animate="in"
			initial="initial"
			variants={variants}
			transition={transition}>
			<div className="bg-news">
				<h1 className="title-news">Les news</h1>
			</div>
			<div className="container">
				<div className="news-content">
					<div className="title-article">
						<h2>Nouveau logo, nouveau site web&nbsp;!</h2>
					</div>
					<div className="content-article">
						<p>
							e-<span className="bold-text">project</span>-
							<span className="color-it">IT</span> est heureux de vous présenter
							cette nouvelle version de notre site Web.
						</p>
						<p>Nous vous souhaitons une bonne découverte.</p>
						<p>
							Nous remercions tout particulièrement{' '}
							<a
								href="https://younes-haidri.fr"
								target="_blank"
								rel="noreferrer">
								Y. Haïdri
							</a>{' '}
							pour ce nouveau design et pour son investissement dans cette
							nouvelle création.
						</p>
						<p>Le PDG</p>
					</div>
					<div className="footer-article">Le 09/12/2020</div>
					<div className="img-article">
						<img src={imgNewsArticle1} alt="article" />
					</div>
				</div>
			</div>
			<Navigation />
			<Footer />
		</motion.div>
	);
};

export default News;
