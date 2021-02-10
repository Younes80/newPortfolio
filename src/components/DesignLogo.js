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
					<SiAdobephotoshop size="50px" color="#0d47a1" />
				</li>
				<li className="design-logo">
					<SiAdobeillustrator size="50px" color="#0d47a1" />
				</li>
				<li className="design-logo">
					<SiAdobeindesign size="50px" color="#0d47a1" />
				</li>
				<li className="design-logo">
					<SiFigma size="50px" color="#0d47a1" />
				</li>
				<li className="design-logo">
					<SiAdobeaftereffects size="50px" color="#0d47a1" />
				</li>
			</ul>
		</div>
	);
};

export default DesignLogo;
