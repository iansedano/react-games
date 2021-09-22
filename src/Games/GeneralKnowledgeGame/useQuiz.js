import { useState, useEffect } from "react";

function useQuiz(difficulty, category, numberOfQuestions) {
	const [questions, setQuestions] = useState(["making request"]);
	const [answers, setAnswers] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);

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

	const answerQuestion = (answerGiven) => {
		const currentQuestion = questions[questions.length - 1];
		if (answerGiven === currentQuestion[0] * currentQuestion[1]) {
			setAnswer([...answers, [1, timeTaken]]);
			refreshQuestion();
		} else {
			setAnswer([...answers, [0, timeTaken]]);
		}
	};

	return [questions, answers, answerQuestion];
}

export default useQuiz();
