import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const handleRegisterSubmit = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			toast.error("Les mots de passe ne correspondent pas");
			return;
		}
		if (firstName.length > 20 || lastName.length > 20) {
			toast.error("Le prénom et le nom ne doivent pas dépasser 20 caractères");
			return;
		}
		if (password.length > 20 || password.length < 8) {
			toast.error("Le mot de passe doit comporter entre 8 et 20 caractères");
			return;
		}

		// Envoyer les données d'enregistrement au serveur
		fetch("http://localhost:3030/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password, firstName, lastName }),
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
		<form onSubmit={handleRegisterSubmit}>
			<label htmlFor="firstName">Prénom:</label>
			<input
				type="text"
				id="firstName"
				value={firstName}
				onChange={(event) => setFirstName(event.target.value)}
				maxLength={20}
				placeholder="Votre prénom"
				required
			/>
			<br />
			<label htmlFor="lastName">Nom:</label>
			<input
				type="text"
				id="lastName"
				value={lastName}
				onChange={(event) => setLastName(event.target.value)}
				maxLength={20}
				placeholder="Votre NOM"
				required
			/>
			<br />
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
				maxLength={20}
				placeholder="Saisir votre mot de passe"
				required
			/>
			<br />
			<label htmlFor="confirmPassword">Confirmer le mot de passe:</label>
			<input
				type="password"
				id="confirmPassword"
				value={confirmPassword}
				onChange={(event) => setConfirmPassword(event.target.value)}
				maxLength={20}
				placeholder="Saisir à nouveau votre mot de passe"
				required
			/>
			<br />
			<button type="submit">S'enregistrer</button>
		</form>
	);
}
