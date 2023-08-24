import React, { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLoginSubmit = (event) => {
		event.preventDefault();
		// Envoyer les données de connexion au serveur
		fetch("http://localhost:3030/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		})
			.then((response) => response.json())
			.then((data) => {
				// Traiter la réponse de l'API
				// ...
			})
			.catch((error) => {
				// Gérer les erreurs
				// ...
			});
	};

	return (
		<form onSubmit={handleLoginSubmit}>
			<label htmlFor="email">Adresse e-mail:</label>
			<input
				type="email"
				id="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
				required
			/>
			<br />
			<label htmlFor="password">Mot de passe:</label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={(event) => setPassword(event.target.value)}
				required
			/>
			<br />
			<button type="submit">Se connecter</button>
		</form>
	);
}
