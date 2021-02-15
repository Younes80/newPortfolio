import React, { useState } from 'react';
import Navigation from '../components/navigation/Navigation';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Address from '../components/Address';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from 'react-icons/vsc';

const Contact = () => {
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const isEmail = () => {
		let mail = document.getElementById('not-mail');
		let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		if (email.match(regex)) {
			mail.style.display = 'none';
			return true;
		} else {
			mail.style.display = 'block';
			mail.style.animation = 'dongle 1s';
			setTimeout(() => {
				mail.style.animation = 'none';
			}, 1000);
			return false;
		}
	};

	const failMessage = message => {
		let formMess = document.querySelector('.form-message');
		formMess.innerHTML = message;
		formMess.style.opacity = '1';
		formMess.style.background = '#e53935';
		document.getElementById('name').classList.add('error');
		document.getElementById('email').classList.add('error');
		document.getElementById('message').classList.add('error');

		setTimeout(() => {
			formMess.style.opacity = '0';
		}, 3000);
	};

	const successMessage = () => {
		let formMess = document.querySelector('.form-message');
		formMess.innerHTML =
			'Message envoyé ! Nous vous recontacterons dès que possible.';
		formMess.style.opacity = '1';
		formMess.style.background = '#00ACC1';

		document.getElementById('name').classList.remove('error');
		document.getElementById('email').classList.remove('error');
		document.getElementById('message').classList.remove('error');

		setTimeout(() => {
			formMess.style.opacity = '0';
		}, 5000);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (name && isEmail() && message) {
			sendFeedback('template_dpg3ecd', {
				name,
				company,
				phone,
				email,
				message,
			});
		} else {
			failMessage('Merci de remplir correctement les champs requis *');
		}
	};

	const sendFeedback = (templateId, variables) => {
		window.emailjs
			.send('service_rdhi80r', templateId, variables)
			.then(res => {
				successMessage();
				setName('');
				setCompany('');
				setPhone('');
				setEmail('');
				setMessage('');
			})
			.catch(err => {
				failMessage("Une erreur s'est produite, veuillez réessayer.");
			});
	};

	const variants = {
		in: {
			opacity: 1,
			x: 0,
			y: 0,
		},
		out: {
			opacity: 0,
			x: 0,
			y: 0,
		},
	};
	const transition = {
		ease: [0.03, 0.87, 0.73, 0.9],
		duration: 0.8,
	};

	return (
		<motion.div
			className="contact-page"
			key="contact"
			exit="out"
			animate="in"
			initial="out"
			variants={variants}
			transition={transition}>
			<div className="bg-contact">
				<h1>Pour me contacter&nbsp;!</h1>
			</div>
			<motion.div
				className="info-contact"
				initial={{ x: 300, opacity: 0 }}
				animate="in"
				transition={{ duration: 1.5 }}
				variants={variants}>
				<Address />
				<div className="formulaire">
					<form action="#" className="contact">
						<div className="form-message"></div>
						<div className="name contact-form">
							<input
								type="text"
								name="name"
								placeholder=" "
								onChange={e => setName(e.target.value)}
								value={name}
							/>
							<label id="name" htmlFor="name">
								Nom *
							</label>
						</div>
						<div className="company contact-form">
							<input
								type="text"
								name="company"
								placeholder=" "
								onChange={e => setCompany(e.target.value)}
								value={company}
							/>
							<label id="company" htmlFor="company">
								Société
							</label>
						</div>
						<div className="email contact-form">
							<input
								type="email"
								name="email"
								placeholder=" "
								onChange={e => setEmail(e.target.value)}
								value={email}
							/>
							<label id="email" htmlFor="email">
								Email *
							</label>
							<span id="not-mail">Email non valide</span>
						</div>
						<div className="tel contact-form">
							<input
								type="text"
								name="phone"
								placeholder=" "
								onChange={e => setPhone(e.target.value)}
								value={phone}
							/>
							<label id="phone" htmlFor="phone">
								Téléphone
							</label>
						</div>
						<div className="message contact-form">
							<textarea
								name="message"
								placeholder=" "
								onChange={e => setMessage(e.target.value)}
								value={message}></textarea>
							<label id="message" htmlFor="message">
								Message *
							</label>
						</div>
						<div className="btn-form contact-form">
							<input
								className="button-form"
								type="button"
								value="Envoyer"
								onClick={handleSubmit}
							/>
						</div>
					</form>
				</div>
			</motion.div>
			<div className="arrow btn-classic">
				<Link className="arrow-left button-classic" to="/productions">
					<VscChevronLeft />
				</Link>
			</div>
			<Navigation />
			<Footer />
		</motion.div>
	);
};

export default Contact;
