import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="foot">
			<small>@2023 MikackermanDev</small>
			<Link to="/Mentions-legales" className="legal">
				Mentions légales
			</Link>
		</div>
	);
}
