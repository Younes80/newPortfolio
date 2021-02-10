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
					<SiHtml5 size="50px" color="#0d47a1" />
				</li>
				<li className="tech-logo">
					<SiSass size="50px" color="#0d47a1" />
				</li>
				<li className="tech-logo">
					<SiJavascript size="50px" color="#0d47a1" />
				</li>
				<li className="tech-logo">
					<SiReact size="50px" color="#0d47a1" />
				</li>
				<li className="tech-logo">
					<SiPhp size="50px" color="#0d47a1" />
				</li>
				<li className="tech-logo">
					<SiNodeDotJs size="50px" color="#0d47a1" />
				</li>
				<li className="tech-logo">
					<SiVisualstudiocode size="50px" color="#0d47a1" />
				</li>
				<li className="tech-logo">
					<SiNpm size="50px" color="#0d47a1" />
				</li>
				<li className="tech-logo">
					<SiWordpress size="50px" color="#0d47a1" />
				</li>
			</ul>
		</div>
	);
};

export default Technologies;
