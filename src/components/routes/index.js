import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutUs from '../../pages/AboutUs';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Productions from '../../pages/Productions';
import { AnimatePresence } from 'framer-motion';
import DarkMode from '../DarkMode';
import Navigation from '../navigation/Navigation';
import Footer from '../Footer';

const Routes = () => {
	return (
		<>
			<Navigation />
			<AnimatePresence>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/productions" component={Productions} />
					<Route path="/aboutus" component={AboutUs} />
					<Route path="/contact" component={Contact} />
					<Redirect to="/" />
				</Switch>
			</AnimatePresence>
			<DarkMode />
			<Footer />
		</>
	);
};

export default Routes;
