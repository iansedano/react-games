import { useState, useEffect } from "react";

// {
// 	category: "Entertainment: Film",
// 	type: "multiple",
// 	difficulty: "medium",
// 	question: "What was Marilyn Monroe`s character&#039;s first name in the film &quot;Some Like It Hot&quot;?",
// 	correct_answer: "Sugar",
// 	incorrect_answers: [
// 		"Honey",
// 		"Caramel",
// 		"Candy"
// 	]
// }

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
			const questions = json.results.map((q) => {
				return { ...q, question: q.question };
			});
			setQuestions(json.results);
		}
		req();
	}, [difficulty, category, numberOfQuestions]);

	const answerQuestion = (answerGiven) => {
		const currentQuestion = questions[questions.length - 1];
		if (answerGiven === currentQuestion[0] * currentQuestion[1]) {
			setAnswers([...answers, [1]]);
			refreshQuestion();
		} else {
			setAnswer([...answers, [0]]);
		}
	};

	return [questions, answers, answerQuestion];
}

export default useQuiz();
