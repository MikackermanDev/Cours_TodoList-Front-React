import "./Onglet2.css";
import { toast } from "react-toastify";

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Onglet2() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	const showToastTodo = (message) => {
		toast.error(message, { autoClose: 3000, pauseOnFocusLoss: false });
	};
	const addTodo = () => {
		const trimmedTodo = newTodo.trimEnd();

		if (!trimmedTodo) {
			// La zone de saisie est vide, afficher un toast et ne pas ajouter la tâche
			showToastTodo("Veuillez entrer une tâche");
			return;
		}

		setTodos([...todos, { text: trimmedTodo, completed: false }]);
		setNewTodo("");
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const toggleTodoCompletion = (index) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const items = Array.from(todos);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		setTodos(items);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault(); // Pour éviter le comportement par défaut de la touche "Entrée"
			if (event.shiftKey) {
				// Si la touche "Shift" est également enfoncée, ajoutez une nouvelle ligne à l'entrée
				setNewTodo((currentValue) => currentValue + "\n");
			} else {
				// Sinon, ajoutez la tâche
				addTodo();
			}
		}
	};

	return (
		<div>
			<p>Tâches :</p>
			<textarea
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder="Entrez une nouvelle tâche ici"
			/>
			<button onClick={addTodo}>Ajouter une tâche</button>
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId="todos">
					{(provided) => (
						<ul {...provided.droppableProps} ref={provided.innerRef}>
							{todos.map((todo, index) => (
								<Draggable
									key={index}
									draggableId={`task-${index}`}
									index={index}
								>
									{(provided) => (
										<li
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											className={`todo-item ${
												todo.completed ? "completed" : ""
											}`}
											onClick={() => toggleTodoCompletion(index)}
										>
											{/* Remplacez les sauts de ligne par des éléments <br /> */}
											{todo.text.split("\n").map((line, i) => (
												<React.Fragment key={i}>
													{line}
													{i <
														todo.text.split("\n").length -
															1 && <br />}
												</React.Fragment>
											))}
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
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}
