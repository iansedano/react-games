import { useState, useEffect } from "react";
import he from "he";

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

function urlBuilder(difficulty, category, numberOfQuestions) {
	const root = "https://opentdb.com/api.php?";
	const params = [
		difficulty ? `difficulty=${difficulty}` : "",
		category ? `category=${category}` : "",
		numberOfQuestions ? `amount=${numberOfQuestions}` : "",
	];
	return root + params.join("");
}

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
				return { ...q, question: he.decode(q.question) };
			});
			setQuestions(questions);
		}
		req();
	}, [difficulty, category, numberOfQuestions]);

	const answerQuestion = (answerGiven) => {
		if (answerGiven === questions[currentQuestion].correct_answer) {
			setAnswers((arr) => [...arr, 1]);
		} else {
			setAnswers((arr) => [...arr, 0]);
		}
		setCurrentQuestion((c) => c + 1);
	};

	return [questions[currentQuestion], answers, answerQuestion];
}

export default useQuiz;
