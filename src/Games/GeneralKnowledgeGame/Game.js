import { useState, useEffect } from "react";

import Question from "./Question";

function urlBuilder(difficulty, category, numberOfQuestions) {
	const root = "https://opentdb.com/api.php?";
	const params = [
		difficulty ? `difficulty=${difficulty}` : "",
		category ? `category=${category}` : "",
		numberOfQuestions ? `amount=${numberOfQuestions}` : "",
	];
	return root + params.join("");
}

function Game({ difficulty, category, numberOfQuestions }) {
	const [questions, setQuestions] = useState(["making request"]);

	useEffect(() => {
		async function req() {
			const resp = await fetch(
				urlBuilder(difficulty, category, numberOfQuestions)
			);
			const json = await resp.json();
			setQuestions(json.results);
		}
		req();
	}, [difficulty, category, numberOfQuestions]);

	return (
		<>
			{questions.map((q, i) => {
				return <Question key={i}>{q.question}</Question>;
			})}
		</>
	);
}
export default Game;
