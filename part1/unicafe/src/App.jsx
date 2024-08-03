/* eslint-disable react/prop-types */
import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodClick = () => setGood(good + 1);
	const handleNeutralClick = () => setNeutral(neutral + 1);
	const handleBadClick = () => setBad(bad + 1);

	const statistics = {
		good: good,
		neutral: neutral,
		bad: bad,
	};

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button onClick={handleGoodClick} text="Good" />
			<Button onClick={handleNeutralClick} text="Neutral" />
			<Button onClick={handleBadClick} text="Bad" />
			<Statistics statistics={statistics} />
		</div>
	);
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
	<tr>
		<td>{text}</td>
		<td>{value}</td>
	</tr>
);

const Statistics = ({ statistics }) => {
	const { good, neutral, bad } = statistics;

	const totalClicks = good + neutral + bad;
	const average = (good * 1 + neutral * 0 + bad * -1) / totalClicks;
	const positivePercentage = (good / totalClicks) * 100;

	const displayStatistics = () => {
		if (totalClicks === 0) {
			return <p>No feedback given</p>;
		}
		return (
			<table>
				<tbody>
					<StatisticLine text="Good" value={good} />
					<StatisticLine text="Neutral" value={neutral} />
					<StatisticLine text="Bad" value={bad} />
					<StatisticLine text="All" value={totalClicks} />
					<StatisticLine text="Average" value={average} />
					<StatisticLine text="Positive" value={positivePercentage + " %"} />
				</tbody>
			</table>
		);
	};

	return (
		<div>
			<h2>Statistics</h2>
			{displayStatistics()}
		</div>
	);
};

export default App;
