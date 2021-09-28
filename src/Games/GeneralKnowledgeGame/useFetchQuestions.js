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

function useFetchQuestions(difficulty, category, numberOfQuestions) {
	const [questions, setQuestions] = useState(["making request"]);

	useEffect(() => {
		function urlBuilder(difficulty, category, numberOfQuestions) {
			const root = "https://opentdb.com/api.php?";
			const params = [
				difficulty ? `difficulty=${difficulty}` : "",
				category ? `category=${category}` : "",
				numberOfQuestions ? `amount=${numberOfQuestions}` : "",
			];
			return root + params.filter((e) => e !== "").join("&");
		}

		async function req() {
			try {
				const resp = await fetch(
					urlBuilder(difficulty, category, numberOfQuestions)
				);
				const json = await resp.json();
				const questions = json.results.map((q) => {
					return {
						...q,
						question: he.decode(q.question),
						correct_answer: he.decode(q.correct_answer),
						incorrect_answers: q.incorrect_answers.map((a) =>
							he.decode(a)
						),
					};
				});
				setQuestions(questions);
			} catch (e) {
				console.error("something went wrong with fetch");
			}
		}
		req();
	}, [difficulty, category, numberOfQuestions]);

	return questions;
}

export default useFetchQuestions;