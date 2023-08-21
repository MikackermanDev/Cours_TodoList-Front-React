import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
	return (
		<div className="nav">
			<img src="src/assets/img/imgDefaut-fococlipping.png" alt="imageParDefaut" />
			<div className="monConteneur">
				<div>
					<Link to="/Accueil">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Accueil
					</Link>
				</div>
				<div>
					<Link to="/Onglet2">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Onglet 2
					</Link>
				</div>
			</div>
		</div>
	);
}
