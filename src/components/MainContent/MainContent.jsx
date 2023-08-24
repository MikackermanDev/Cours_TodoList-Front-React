import "./MainContent.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error404 from "../Pages/404";
import Onglet1 from "../Pages/Onglet1";
import Onglet2 from "../Pages/Onglet2";
import Onglet3 from "../Pages/Onglet3";

import MentionsLegales from "../pages/MentionsLegales";

export default function mainContent() {
	return (
		<div className="main">
			<Routes>
				{/* <Route path="/" element={<Navigate to="/Accueil" replace />} /> */}
				<Route path="/Accueil" element={<Onglet1 />} />
				<Route path="/Onglet2" element={<Onglet2 />} />
				<Route path="/Onglet3" element={<Onglet3 />} />
				<Route path="/Mentions-legales" element={<MentionsLegales />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</div>
	);
}
