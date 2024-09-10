import React, { useState } from "react";
import { Persons, PersonForm, Filter } from "./components/components";

const App = () => {
	// State
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [nameFilter, setNameFilter] = useState("");

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
		const nameExists = persons.some((person) => person.name === newName);
		const numberExists = persons.some((person) => person.number === newNumber);

		if (nameExists) {
			alert(`${newName} is already added to phonebook`);
		} else if (numberExists) {
			alert(`${newNumber} is already added to phonebook`);
		} else {
			const newPerson = {
				name: newName,
				number: newNumber,
				id: Math.max(...persons.map((person) => person.id)) + 1,
			};
			setPersons(persons.concat(newPerson));
			setNewName("");
			setNewNumber("");
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
			<Persons persons={filteredPersons} />
		</div>
	);
};

export default App;
