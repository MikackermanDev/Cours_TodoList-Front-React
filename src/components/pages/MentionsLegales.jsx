import "./MentionsLegales.css";

export default function MentionsLegale() {
	return (
		<div className="mentions">
			<h1>MENTIONS LEGALES</h1>

			<h2>Responsabilité éditoriale :</h2>
			<p>Le site {import.meta.env.VITE_APP_SITE_NAME} est édité par :</p>
			<p>
				Mikackerman093 <br />
				Adresse <br />
				Code Postal + Ville <br />
			</p>
			<p>RCS 123 456 789 12345</p>

			<h2>Réalisation et Hébergement : </h2>
			<p>
				Responsable de la publication : "nom et prénom du responsable"
				<br />
				Contact : "adresse e-mail et/ou numéro de téléphone"
				<br />
				Hébergement : "nom de l'hébergeur"
				<br />
				Adresse de l'hébergeur : "adresse postale de l'hébergeur"
				<br />
				Numéro de téléphone de l'hébergeur : 03 20 01 02 03
			</p>

			<h2>Propriété intellectuelle :</h2>
			<p>
				Tous les éléments présents sur ce site (textes, images, graphismes, logo,
				icônes, sons, logiciels...) sont la propriété exclusive de leurs auteurs
				respectifs.
			</p>
			<p>
				Toute reproduction, représentation, modification, publication, adaptation
				de tout ou partie des éléments du site, quel que soit le moyen ou le
				procédé utilisé, est interdite sauf autorisation écrite préalable.
			</p>
			<h2>Données personnelles :</h2>
			<p>
				Les données personnelles collectées sur ce site sont uniquement destinées
				à un usage interne. En aucun cas ces données ne seront cédées ou vendues à
				des tiers. Conformément à la législation française, vous disposez d'un
				droit d'accès, de modification, de rectification et de suppression des
				données qui vous concernent. Vous pouvez exercer ce droit en nous
				contactant à l'adresse e-mail indiquée ci-dessus.
			</p>
		</div>
	);
}
