/* eslint-disable react/prop-types */

function Header({ course }) {
	return <h1>{course.title}</h1>;
}

function Part({ part }) {
	return (
		<p>
			{part.name} {part.exercises}
		</p>
	);
}

function Content({ parts }) {
	console.log(parts);
	return (
		// <div>
		// 	{parts.map((part, index) => (
		// 		<p key={index}>
		// 			{part.name} {part.exercises}
		// 		</p>
		// 	))}
		// </div>

		<div>
			<Part part={parts[0]} />
			<Part part={parts[1]} />
			<Part part={parts[2]} />
		</div>
	);
}

function Total({ parts }) {
	let totalExerciseCount = parts.reduce((sum, part) => sum + part.exercises, 0);
	return <p>Number of exercises {totalExerciseCount}</p>;
}

const App = () => {
	const course = {
		title: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
