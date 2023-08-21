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
		if (!newTodo.trim()) {
			// La zone de saisie est vide, afficher un toast et ne pas ajouter la tâche
			showToastTodo("Veuillez entrer une tâche");
			return;
		}

		setTodos([...todos, { text: newTodo, completed: false }]);
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

	return (
		<div>
			<p>Tâches :</p>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
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
