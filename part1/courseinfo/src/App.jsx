/* eslint-disable react/prop-types */

const Header = (props) => {
	return <h1>{props.course.title}</h1>;
};

const Part = (props) => {
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	);
};

const Content = (props) => {
	return (
		<div>
			<Part part={props.parts[0]} />
			<Part part={props.parts[1]} />
			<Part part={props.parts[2]} />
		</div>
	);
};

const Total = (props) => {
	let totalExerciseCount = props.parts.reduce(
		(sum, part) => sum + part.exercises,
		0
	);
	return <p>Number of exercises {totalExerciseCount}</p>;
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	const parts = [part1, part2, part3];

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
};

export default App;
