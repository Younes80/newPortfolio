import React from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';
import Navigation from './navigation/Navigation';

const LegalNotice = () => {
	const variants = {
		initial: {
			opacity: 0,
			x: 300,
		},
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: -800,
		},
	};
	const transition = {
		ease: [0.03, 0.87, 0.73, 0.9],
		duration: 0.6,
	};
	return (
		<motion.div
			className="bg-legal-notice"
			key="legal-notice"
			exit="out"
			animate="in"
			initial="initial"
			variants={variants}
			transition={transition}>
			<div className="container-legal-notice">
				<div className="header-modal">
					<h2 className="modal-title">Conditions générales d'utilisation</h2>
					<span>En vigueur au 22/12/2020</span>
					<p>
						Les présentes conditions générales d'utilisation (dites « CGU ») ont
						pour objet l'encadrement juridique des modalités de mise à
						disposition du site et des services par E-Project-IT et de définir
						les conditions d’accès et d’utilisation des services par «
						l'Utilisateur ».
						<br />
						Les présentes CGU sont accessibles sur le site à la rubrique «CGU».
					</p>
				</div>
				<hr />
				<div className="content-modal">
					<h3>Article 1 : Les mentions légales</h3>
					<p>
						L'édition du site e-project-IT.fr est assurée par la Société SASU
						E-Project-IT au capital de 1000 euros, immatriculée au RCS de
						Mérignac sous le numéro 891 895 906, dont le siège social est situé
						au 28 avenue des fauvettes 33700 MERIGNAC - France
						<br />
						Adresse e-mail : contact@e-project-it.fr.
						<br />
						Le Directeur de la publication est : THIERRY ERISSET
					</p>
					<p>Numéro de TVA intracommunautaire : FR57891895906</p>
					<p>
						L'hébergeur du site e-project-IT.fr est la société IONOS By 1&1,
						dont le siège social est situé au 7, place de la Gare BP 70109 57201
						Sarreguemines Cedex.
					</p>
					<h3>ARTICLE 2 : Accès au site</h3>
					<p>
						Le site e-project-IT.fr permet à l'Utilisateur un accès gratuit aux
						services suivants :<br />
						Le site internet propose les services suivants :
					</p>
					<ul>
						<li>Information sur la société e-project-it</li>
						<li>Demande de contact</li>
					</ul>
					<p>
						Le site est accessible gratuitement en tout lieu à tout Utilisateur
						ayant un accès à Internet. Tous les frais supportés par
						l'Utilisateur pour accéder au service (matériel informatique,
						logiciels, connexion Internet, etc.) sont à sa charge.
					</p>
					<h3>ARTICLE 3 : Collecte des données</h3>
					<p>
						Les utilisateurs sont informés que les données suivantes peuvent
						être concervées pour une durée de 6 mois, conformément aux règles
						RGPD :
					</p>
					<ul>
						<li>Nom et prénom</li>
						<li>Numéro de téléphone</li>
						<li>Adresse Email</li>
					</ul>
					<h3>ARTICLE 4 : Propriété intellectuelle</h3>
					<p>
						Les marques, logos, signes ainsi que tous les contenus du site
						(textes, images, son…) font l'objet d'une protection par le Code de
						la propriété intellectuelle et plus particulièrement par le droit
						d'auteur.
					</p>
					<p>
						La marque e-project-IT est une marque déposée par SASU
						E-PROJECT-IT.Toute représentation et/ou reproduction et/ou
						exploitation partielle ou totale de cette marque, de quelque nature
						que ce soit, est totalement prohibée.
					</p>
					<p>
						L'Utilisateur doit solliciter l'autorisation préalable du site pour
						toute reproduction, publication, copie des différents contenus. Il
						s'engage à une utilisation des contenus du site dans un cadre
						strictement privé, toute utilisation à des fins commerciales et
						publicitaires est strictement interdite.
						<br />
						Toute représentation totale ou partielle de ce site par quelque
						procédé que ce soit, sans l’autorisation expresse de l’exploitant du
						site Internet constituerait une contrefaçon sanctionnée par
						l’article L 335-2 et suivants du Code de la propriété
						intellectuelle.
						<br />
						Il est rappelé conformément à l’article L122-5 du Code de propriété
						intellectuelle que l’Utilisateur qui reproduit, copie ou publie le
						contenu protégé doit citer l’auteur et sa source.
					</p>
					<h3>ARTICLE 5 : Responsabilité</h3>
					<p>
						Les sources des informations diffusées sur le site e-project-IT.fr
						sont réputées fiables mais le site ne garantit pas qu’il soit exempt
						de défauts, d’erreurs ou d’omissions.
						<br />
						Les informations communiquées sont présentées à titre indicatif et
						général sans valeur contractuelle. Malgré des mises à jour
						régulières, le site e-project-IT.fr ne peut être tenu responsable de
						la modification des dispositions administratives et juridiques
						survenant après la publication. De même, le site ne peut être tenue
						responsable de l’utilisation et de l’interprétation de l’information
						contenue dans ce site.
					</p>
					<p>
						Le site e-project-IT.fr ne peut être tenu pour responsable
						d’éventuels virus qui pourraient infecter l’ordinateur ou tout
						matériel informatique de l’Internaute, suite à une utilisation, à
						l’accès, ou au téléchargement provenant de ce site.
						<br />
						La responsabilité du site ne peut être engagée en cas de force
						majeure ou du fait imprévisible et insurmontable d'un tiers.
					</p>
					<h3>ARTICLE 6 : Liens hypertextes</h3>
					<p>
						Des liens hypertextes peuvent être présents sur le site.
						L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira
						du site e-project-IT.fr. Ce dernier n’a pas de contrôle sur les
						pages web sur lesquelles aboutissent ces liens et ne saurait, en
						aucun cas, être responsable de leur contenu.
					</p>
					<h3>ARTICLE 7 : Cookies</h3>
					<p>
						L’Utilisateur est informé que lors de ses visites sur le site, un
						cookie peut s’installer automatiquement sur son logiciel de
						navigation.
						<br />
						Les cookies sont de petits fichiers stockés temporairement sur le
						disque dur de l’ordinateur de l’Utilisateur par votre navigateur et
						qui sont nécessaires à l’utilisation du site e-project-IT.fr. Les
						cookies ne contiennent pas d’information personnelle et ne peuvent
						pas être utilisés pour identifier quelqu’un. Un cookie contient un
						identifiant unique, généré aléatoirement et donc anonyme. Certains
						cookies expirent à la fin de la visite de l’Utilisateur, d’autres
						restent.
						<br />
						L’information contenue dans les cookies est utilisée pour améliorer
						le site e-project-IT.fr.
						<br />
						En naviguant sur le site, L’Utilisateur les accepte.
					</p>
					<p>
						L’Utilisateur doit toutefois donner son consentement quant à
						l’utilisation de certains cookies.
						<br />A défaut d’acceptation, l’Utilisateur est informé que
						certaines fonctionnalités ou pages risquent de lui être refusées.
					</p>
					<p>
						L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des
						paramètres figurant au sein de son logiciel de navigation.
					</p>
					<h3>ARTICLE 8 : Droit applicable et juridiction compétente</h3>
					<p>
						La législation française s'applique au présent contrat. En cas
						d'absence de résolution amiable d'un litige né entre les parties,
						les tribunaux français seront seuls compétents pour en connaître.
						<br />
						Pour toute question relative à l’application des présentes CGU, vous
						pouvez joindre l’éditeur aux coordonnées inscrites à l’ARTICLE 1.
					</p>
				</div>
			</div>
			<Navigation />
			<Footer />
		</motion.div>
	);
};

export default LegalNotice;
