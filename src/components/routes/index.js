import React from 'react';
import {
	Redirect,
	Route,
	Switch,
	// useHistory,
	// useLocation,
} from 'react-router-dom';
import AboutUs from '../../pages/AboutUs';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Productions from '../../pages/Productions';
import { AnimatePresence } from 'framer-motion';

const Routes = () => {
	// const location = useLocation();
	// const history = useHistory();

	// useEffect(() => {
	// 	const hendleScrollToElement = e => {
	// 		const url = window.location.origin + '/';

	// 		const wheelRouter = (after, before) => {
	// 			if (e.wheelDeltaY < 0) {
	// 				setTimeout(() => {
	// 					history.push(after);
	// 				}, 800);
	// 			} else if (e.wheelDeltaY > 0) {
	// 				setTimeout(() => {
	// 					history.push(before);
	// 				}, 800);
	// 			}
	// 		};

	// 		switch (window.location.href.toString()) {
	// 			case url:
	// 				if (e.wheelDeltaY < 0) {
	// 					setTimeout(() => {
	// 						history.push('aboutus');
	// 					}, 800);
	// 				}
	// 				break;
	// 			case url + 'aboutus':
	// 				wheelRouter('productions', '/');
	// 				break;
	// 			case url + 'productions':
	// 				wheelRouter('contact', 'aboutus');
	// 				break;
	// 			case url + 'contact':
	// 				if (e.wheelDeltaY > 0) {
	// 					setTimeout(() => {
	// 						history.push('productions');
	// 					}, 800);
	// 				}
	// 				break;
	// 			default:
	// 				console.log('nothing');
	// 		}
	// 	};

	// 	window.addEventListener('wheel', hendleScrollToElement);
	// }, [history]);

	return (
		<AnimatePresence>
			<Switch
			// location={location} key={location.pathname}
			>
				<Route path="/" exact component={Home} />
				<Route path="/productions" component={Productions} />
				<Route path="/aboutus" component={AboutUs} />
				<Route path="/contact" component={Contact} />
				<Redirect to="/" />
			</Switch>
		</AnimatePresence>
	);
};

export default Routes;
