/* eslint-disable react/prop-types */
const Persons = ({ persons, handleDeletePerson }) => (
	<ul>
		{persons.map((person) => (
			<li key={person.id}>
				{person.name} {person.number}
				<button onClick={() => handleDeletePerson(person.id)}>delete</button>
			</li>
		))}
	</ul>
);

const PersonForm = ({
	onSubmit,
	newName,
	handleNameChange,
	newNumber,
	handleNumberChange,
}) => (
	<form onSubmit={onSubmit}>
		<div>
			name: <input value={newName} onChange={handleNameChange} />
		</div>
		<div>
			number: <input value={newNumber} onChange={handleNumberChange} />
		</div>
		<div>
			<button type="submit">add</button>
		</div>
	</form>
);

const Filter = ({ value, onChange }) => (
	<div>
		filter shown with <input value={value} onChange={onChange} />
	</div>
);

export { Persons, PersonForm, Filter };
