import "./MainContent.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error404 from "../pages/404";
import Onglet1 from "../pages/Onglet1";
import Onglet2 from "../pages/Onglet2";
import Onglet3 from "../pages/Onglet3";

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
