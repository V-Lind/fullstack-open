import React, { useState, useEffect } from "react";
import { Persons, PersonForm, Filter } from "./components/components";
import {
	getPhonebookList,
	addNewPerson,
	updatePhonebookList,
	deletePerson,
} from "./services";

const App = () => {
	// State
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [nameFilter, setNameFilter] = useState("");

	// Side effects
	useEffect(() => {
		getPhonebookList().then((response) => {
			setPersons(response.data);
			console.log(response.data);
		});
	}, []);

	// Event handlers
	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	const handleFilterChange = (event) => {
		setNameFilter(event.target.value);
	};

	const addPerson = (event) => {
		event.preventDefault();
		const existingPerson = persons.find((person) => person.name === newName);
		const existingNumber = persons.find(
			(person) => person.number === newNumber
		);

		// Check duplicate number
		if (existingNumber) {
			alert(
				persons.some((person) => person.name === newName)
					? `${newName} is already added to phonebook`
					: `${newNumber} is already added to phonebook`
			);
			return;
		}

		// Check duplicate name, replace option
		if (existingPerson) {
			const confirmUpdate = window.confirm(
				`${newName} is already added to phonebook, replace the old number with a new one?`
			);

			if (confirmUpdate) {
				const updatedPerson = { ...existingPerson, number: newNumber };
				updatePhonebookList(existingPerson.id, updatedPerson).then(
					(response) => {
						console.log(response.data);
						setPersons(
							persons.map((person) =>
								person.id !== existingPerson.id ? person : response.data
							)
						);
					}
				);
			}
		} else {
			// Add new person if no duplicates
			const newPerson = {
				name: newName,
				number: newNumber,
				id: String(Math.max(...persons.map((person) => person.id)) + 1),
			};

			addNewPerson(newPerson).then((response) => {
				setPersons(persons.concat(response.data));
				setNewName("");
				setNewNumber("");
			});
		}
	};

	const handleDeletePerson = (id) => {
		const person = persons.find((person) => person.id === id);
		const confirmDelete = window.confirm(`Delete ${person.name}?`);

		if (confirmDelete) {
			deletePerson(id).then(() => {
				setPersons(persons.filter((person) => person.id !== id));
			});
		}
	};

	const filteredPersons = persons.filter((person) =>
		person.name.toLowerCase().includes(nameFilter.toLowerCase())
	);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter value={nameFilter} onChange={handleFilterChange} />
			<h3>Add a new</h3>
			<PersonForm
				onSubmit={addPerson}
				newName={newName}
				handleNameChange={handleNameChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>
			<h3>Numbers</h3>
			<Persons
				persons={filteredPersons}
				handleDeletePerson={handleDeletePerson}
			/>
		</div>
	);
};

export default App;
