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
				</li>
				<li className="design-logo">
					<SiAdobeillustrator />
				</li>
				<li className="design-logo">
					<SiAdobeindesign />
				</li>
				<li className="design-logo">
					<SiFigma />
				</li>
				<li className="design-logo">
					<SiAdobeaftereffects />
				</li>
			</ul>
		</div>
	);
};

export default DesignLogo;
