import React from 'react';

const DarkMode = () => {
	// const autoDarkMode = () => {
	// 	let d = new Date();
	// 	let h = d.getHours();

	// 	if (h > 18 || h < 7) {
	// 		var element = document.body;
	// 		element.classList.toggle('dark-mode');
	// 	}
	// };

	const handleClick = () => {
		var element = document.body;
		element.classList.toggle('dark-mode');
	};

	return (
		<div className="switch-mode">
			<input type="checkbox" onClick={handleClick} id="customCheckbox"></input>
			<label className="mode hover" htmlFor="customCheckbox"></label>
		</div>
	);
};

export default DarkMode;
