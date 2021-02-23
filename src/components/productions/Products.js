import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import * as slides from '../../data/DataProd';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { motion } from 'framer-motion';

function Arrow(props) {
	const { direction, clickFunction } = props;
	const icon = direction === 'left' ? <VscChevronLeft /> : <VscChevronRight />;

	return (
		<div className="svg" onClick={clickFunction}>
			{icon}
		</div>
	);
}

const Products = () => {
	const [index, setIndex] = useState(0);
	const data = slides.slides[index];
	// console.log(data.imgProducts);

	// console.log(slides.slides.length);
	const onArrowClick = direction => {
		const increment = direction === 'left' ? -1 : 1;
		const newIndex =
			(index + increment + slides.slides.length) % slides.slides.length;
		setIndex(newIndex);
	};

	const [open, setOpen] = useState(false);

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
		duration: 1.5,
	};

	return (
		<>
			<motion.div
				key={data.id}
				exit="out"
				animate="in"
				initial="out"
				variants={variants}
				transition={transition}>
				<div className="slide-arrow-left">
					<Arrow direction="left" clickFunction={() => onArrowClick('left')} />
				</div>

				<div
					className=" offer"
					type="button"
					value="Open"
					onClick={() => setOpen(true)}>
					<h2>{data.title}</h2>
					<div className="techno">
						{/* <span>Catégorie : {data.category}</span> */}
						<span>Techno : {data.text}</span>
					</div>
					<img src={`../img/${data.mockup}`} alt={data.imgProducts} />
					<div className="description_projet">{data.detail}</div>
				</div>
				<Modal
					key={data.id}
					open={open}
					onClose={() => setOpen(false)}
					center
					classNames={{
						overlay: 'customOverlay hover',
						modal: 'customModal',
						overlayAnimationIn: 'customEnterOverlayAnimation',
						overlayAnimationOut: 'customLeaveOverlayAnimation',
						modalAnimationIn: 'customEnterModalAnimation',
						modalAnimationOut: 'customLeaveModalAnimation',
						closeIcon: 'hover',
						closeButton: 'hover',
					}}
					animationDuration={800}>
					<div className="modal-offer">
						<div className="header-modal">
							<h2 className="modal-title">{data.title}</h2>
							{/* <span>Catégorie : {data.category}</span> */}
							<span>Techno : {data.text}</span>
						</div>
						<hr />
						<div className="content-modal">
							<img src={'../img/' + data.imgProducts} alt={data.imgProducts} />
							<p>{data.objectif}</p>
							<div className="description_projet">{data.detail}</div>
							{data.addressWeb !== '' ? (
								<div className="show-website btn-classic">
									<a
										className="button-classic"
										href={data.addressWeb}
										target="_blank"
										rel="noreferrer">
										Voir le site
									</a>
								</div>
							) : null}
						</div>
					</div>
				</Modal>
				<div className="slide-arrow-right">
					<Arrow
						direction="right"
						clickFunction={() => onArrowClick('right')}
					/>
				</div>
			</motion.div>
		</>
	);
};

export default Products;
