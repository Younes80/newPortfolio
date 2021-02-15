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
				</li>
				<li className="tech-logo">
					<SiSass />
				</li>
				<li className="tech-logo">
					<SiJavascript />
				</li>
				<li className="tech-logo">
					<SiReact />
				</li>
				<li className="tech-logo">
					<SiPhp />
				</li>
				<li className="tech-logo">
					<SiNodeDotJs />
				</li>
				<li className="tech-logo">
					<SiVisualstudiocode />
				</li>
				<li className="tech-logo">
					<SiNpm />
				</li>
				<li className="tech-logo">
					<SiWordpress />
				</li>
			</ul>
		</div>
	);
};

export default Technologies;
