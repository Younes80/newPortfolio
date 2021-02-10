import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom';

const Advice = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div
				className=" offer"
				type="button"
				value="Open"
				onClick={() => setOpen(true)}>
				<h2>Lorems ipsum</h2>
				<img src="https://via.placeholder.com/170" alt="" />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
					deserunt.
				</p>
			</div>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				center
				classNames={{
					overlay: 'customOverlay',
					modal: 'customModal',
					overlayAnimationIn: 'customEnterOverlayAnimation',
					overlayAnimationOut: 'customLeaveOverlayAnimation',
					modalAnimationIn: 'customEnterModalAnimation',
					modalAnimationOut: 'customLeaveModalAnimation',
				}}
				animationDuration={800}>
				<div className="modal-offer">
					<div className="header-modal">
						<h2 className="modal-title">Lorem ipsum</h2>
						<img src="https://via.placeholder.com/170" alt="" />
					</div>
					<hr />
					<div className="content-modal">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
							perferendis pariatur sapiente quia corporis.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
							perferendis pariatur sapiente quia corporis.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
							perferendis pariatur sapiente quia corporis.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
							perferendis pariatur sapiente quia corporis.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
							perferendis pariatur sapiente quia corporis.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
							perferendis pariatur sapiente quia corporis.
						</p>
						<div className="btn-classic">
							<Link to="/contact" className="button-classic">
								Me contacter
							</Link>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Advice;
