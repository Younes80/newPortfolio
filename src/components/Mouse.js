import React, { useEffect } from 'react';

const Mouse = () => {
	useEffect(() => {
		const cursor = document.querySelector('.cursor');

		const handleCursor = e => {
			cursor.style.top = e.pageY - 31 + 'px';
			cursor.style.left = e.pageX - 31 + 'px';
		};
		document.addEventListener('mousemove', handleCursor);

		// circle smaller
		const handleHover = () => {
			cursor.classList.add('hovered');
		};
		const handleLeave = () => {
			cursor.style.transition = '.5s ease-out';
			cursor.classList.remove('hovered');
		};

		document.querySelectorAll('.hover').forEach(link => {
			link.addEventListener('mouseover', handleHover);
			link.addEventListener('mouseleave', handleLeave);
		});

		window.addEventListener('click', e => {
			cursor.classList.add('expand');

			setTimeout(() => {
				cursor.classList.remove('expand');
			}, 500);
		});
	}, []);

	return <span className="cursor"></span>;
};

export default Mouse;
