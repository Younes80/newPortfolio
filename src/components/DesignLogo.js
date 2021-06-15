import React from 'react';
import {
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAdobeindesign,
	SiFigma,
	SiAdobeaftereffects,
} from 'react-icons/si';

const DesignLogo = () => {
	return (
		<div className="design-logo">
			<ul className="list-design">
				<li className="design-logo">
					<SiAdobephotoshop />
					<p className="title">Photoshop</p>
				</li>
				<li className="design-logo">
					<SiAdobeillustrator />
					<p className="title">Illustrator</p>
				</li>
				<li className="design-logo">
					<SiAdobeindesign />
					<p className="title">InDesign</p>
				</li>
				<li className="design-logo">
					<SiFigma />
					<p className="title">Figma</p>
				</li>
				<li className="design-logo">
					<SiAdobeaftereffects />
					<p className="title">AfterEffects</p>
				</li>
			</ul>
		</div>
	);
};

export default DesignLogo;
