import React, { useRef } from 'react';
import Routes from './components/routes';

function App() {
	let cursorRef = useRef();
	const mousePosition = e => {
		// console.log(cursorRef.current);
		cursorRef.current.setAttribute(
			'style',
			`top: ${e.pageY - 15}px; left:${e.pageX - 15}px;`
		);
	};

	// useEffect(() => {
	// 	document.addEventListener('click', () => {
	// 		cursorRef.classList.add('expand');

	// 		setTimeout(() => {
	// 			cursorRef.classList.remove('expand');
	// 		}, 500);
	// 	});
	// }, []);

	return (
		<div onMouseMove={mousePosition} className="App">
			<div ref={cursorRef} className="cursor-perso"></div>
			<Routes />
		</div>
	);
}

export default App;
