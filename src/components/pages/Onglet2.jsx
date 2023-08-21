import "./Onglet2.css";

// Importation des hooks et des bibliothèques nécessaires de React et de react-toastify
import React, { useState } from "react";

export default function Onglet2() {
	// Déclaration de l'état initial des tâches avec useState [] pour que la liste soit un tableau vide
	const [todos, setTodos] = useState([]);
	// Déclaration de l'état initial de la nouvelle tâche avec useState
	const [newTodo, setNewTodo] = useState("");

	// Fonction pour ajouter une nouvelle tâche à la liste des tâches
	const addTodo = () => {
		setTodos([...todos, { text: newTodo, completed: false }]);
		setNewTodo("");
	};

	// Fonction pour supprimer une tâche de la liste des tâches
	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	// Fonction pour basculer l'état d'achèvement d'une tâche
	const toggleTodoCompletion = (index) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};

	// Le composant rend une liste de tâches avec la possibilité d'ajouter et de supprimer des tâches
	return (
		<div>
			<p>Tâches :</p>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/>
			<button onClick={addTodo}>Ajouter une tâche</button>
			<ul>
				{todos.map((todo, index) => (
					<li
						className={`todo-item ${todo.completed ? "completed" : ""}`}
						onClick={() => toggleTodoCompletion(index)}
					>
						{todo.text}
						<button
							className="remove-button"
							onClick={(e) => {
								e.stopPropagation();
								removeTodo(index);
							}}
						>
							❌
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
