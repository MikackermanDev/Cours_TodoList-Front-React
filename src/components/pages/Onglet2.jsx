import "./Onglet2.css";
import { toast } from "react-toastify";

import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TodoList() {
	const [lists, setLists] = useState([]);
	const [selectedListIndex, setSelectedListIndex] = useState(0);
	const [newTask, setNewTask] = useState("");
	const [newListName, setNewListName] = useState("");

	const showToastTodo = (message) => {
		toast.error(message, { autoClose: 3000, pauseOnFocusLoss: false });
	};

	const addList = () => {
		if (newListName.trim()) {
			setLists([...lists, { name: newListName.trim(), todos: [] }]);
			setNewListName("");
			setSelectedListIndex(lists.length);
			console.log("liste crée : " + selectedListIndex);
		}
	};
	const SelectList = ({ lists, selectedListIndex, setSelectedListIndex }) => {
		return (
			<select
				value={selectedListIndex}
				onChange={(e) => setSelectedListIndex(e.target.value)}
			>
				{lists.map((list, index) => (
					<option key={index} value={index}>
						{list.name}
					</option>
				))}
			</select>
		);
	};

	useEffect(() => {
		// Ce code sera exécuté chaque fois que la valeur de selectedListIndex change
		console.log("La valeur de selectedListIndex a changé :", selectedListIndex);
	}, [selectedListIndex]); // Ajoutez selectedListIndex comme dépendance de l'effet

	const removeList = (index) => {
		setLists((prevLists) => prevLists.filter((_, i) => i !== index));
		setSelectedListIndex(0);
	};

	const addTask = () => {
		const trimmedTodo = newTask.trimEnd();

		if (!trimmedTodo) {
			// La zone de saisie est vide, afficher un toast et ne pas ajouter la tâche
			showToastTodo("Veuillez entrer une tâche");
			return;
		}

		const newLists = [...lists];
		newLists[selectedListIndex].todos.push({
			text: trimmedTodo,
			completed: false,
		});
		setLists(newLists);
		setNewTask("");
	};

	const removeTask = (index) => {
		const newLists = [...lists];
		newLists[selectedListIndex].todos.splice(index, 1);
		setLists(newLists);
	};

	const toggleTaskCompletion = (index) => {
		const newLists = [...lists];
		const todo = newLists[selectedListIndex].todos[index];
		todo.completed = !todo.completed;
		setLists(newLists);
	};

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const newLists = [...lists];
		const items = Array.from(newLists[selectedListIndex].todos);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		newLists[selectedListIndex].todos = items;
		setLists(newLists);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault(); // Pour éviter le comportement par défaut de la touche "Entrée"
			if (event.shiftKey) {
				// Si la touche "Shift" est également enfoncée, ajoutez une nouvelle ligne à l'entrée
				setNewTask((currentValue) => currentValue + "\n");
			} else {
				// Sinon, ajoutez la tâche
				addTask();
			}
		}
	};

	return (
		<div>
			{/* Ajoutez un gestionnaire d'événements onKeyDown à l'élément input pour la nouvelle liste */}
			<input
				type="text"
				value={newListName}
				onChange={(e) => setNewListName(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						addList();
					}
				}}
				placeholder="Nouvelle liste"
			/>
			<button onClick={addList}>Ajouter une liste</button>
			{lists.length > 0 && (
				<>
					{/* Utilisez le composant SelectList pour afficher et gérer l'élément select */}
					<SelectList
						lists={lists}
						selectedListIndex={selectedListIndex}
						setSelectedListIndex={setSelectedListIndex}
					/>
					<button onClick={() => removeList(selectedListIndex)}>
						Supprimer la liste sélectionnée
					</button>
					<p>Tâches :</p>
					<textarea
						value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder="Entrez une nouvelle tâche ici"
					/>
					<button onClick={addTask}>Ajouter une tâche</button>
					<DragDropContext onDragEnd={handleOnDragEnd}>
						<Droppable droppableId="todos">
							{(provided) => (
								<ul {...provided.droppableProps} ref={provided.innerRef}>
									{lists[selectedListIndex].todos.map((todo, index) => (
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
													onClick={() =>
														toggleTaskCompletion(index)
													}
												>
													{/* Remplacez les sauts de ligne par des éléments <br /> */}
													{todo.text
														.split("\n")
														.map((line, i) => (
															<React.Fragment key={i}>
																{line}
																{i <
																	todo.text.split("\n")
																		.length -
																		1 && <br />}
															</React.Fragment>
														))}
													<button
														className="remove-button"
														onClick={(e) => {
															e.stopPropagation();
															removeTask(index);
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
				</>
			)}
		</div>
	);
}
