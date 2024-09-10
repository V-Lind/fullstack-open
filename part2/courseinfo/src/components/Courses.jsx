/* eslint-disable react/prop-types */
const Header = ({ course }) => {
	return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
	return (
		<p>
			{part.name} {part.exercises}
		</p>
	);
};

const Content = ({ parts }) => {
	const partsList = parts.map((part) => <Part key={part.id} part={part} />);
	return <div>{partsList}</div>;
};

const Total = ({ parts }) => {
	let totalExerciseCount = parts.reduce((sum, part) => sum + part.exercises, 0);
	return (
		<p style={{ fontWeight: "bold" }}>
			Total of {totalExerciseCount} exercises
		</p>
	);
};

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export const CourseList = ({ courses }) => {
	const courseList = courses.map((course) => (
		<Course key={course.id} course={course} />
	));
	return <div>{courseList}</div>;
};
