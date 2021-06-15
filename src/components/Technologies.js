import React from 'react';
import {
	SiJavascript,
	SiReact,
	SiHtml5,
	SiSass,
	SiPhp,
	SiNodeDotJs,
	SiVisualstudiocode,
	SiNpm,
	SiWordpress,
} from 'react-icons/si';

const Technologies = () => {
	return (
		<div className="technologies">
			<ul className="list-tech">
				<li className="tech-logo">
					<SiHtml5 />
					<p className="title">HTML</p>
				</li>
				<li className="tech-logo">
					<SiSass />
					<p className="title">Sass</p>
				</li>
				<li className="tech-logo">
					<SiJavascript />
					<p className="title">Javascript</p>
				</li>
				<li className="tech-logo">
					<SiReact />
					<p className="title">Reactjs</p>
				</li>
				<li className="tech-logo">
					<SiPhp />
					<p className="title">PHP</p>
				</li>
				<li className="tech-logo">
					<SiNodeDotJs />
					<p className="title">Nodejs</p>
				</li>
				<li className="tech-logo">
					<SiVisualstudiocode />
					<p className="title">VS code</p>
				</li>
				<li className="tech-logo">
					<SiNpm />
					<p className="title">NPM</p>
				</li>
				<li className="tech-logo">
					<SiWordpress />
					<p className="title">Wordpress</p>
				</li>
			</ul>
		</div>
	);
};

export default Technologies;
