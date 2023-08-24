import React, { useState } from "react";
import Login from "../container/Login";
import Register from "../container/Register";

export default function Onglet3() {
	const [activeTab, setActiveTab] = useState("login");

	return (
		<div>
			<h1>Connexion / Enregistrement</h1>
			<div>
				<button onClick={() => setActiveTab("login")}>Se connecter</button>
				<button onClick={() => setActiveTab("register")}>S'enregistrer</button>
			</div>
			{activeTab === "login" ? <Login /> : <Register />}
		</div>
	);
}
