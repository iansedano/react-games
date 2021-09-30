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

function useFetchQuestions(
	difficulty,
	category,
	numberOfQuestions,
	sessionToken
) {
	const [questions, setQuestions] = useState();
	const [error, setError] = useState();
	useEffect(() => {
		const url = (() => {
			const root = "https://opentdb.com/api.php?";
			const params = [
				difficulty ? `difficulty=${difficulty}` : "",
				category ? `category=${category}` : "",
				numberOfQuestions ? `amount=${numberOfQuestions}` : "",
				sessionToken ? `token=${sessionToken}` : "",
			];
			return root + params.filter((p) => p !== "").join("&");
		})();

		(async () => {
			try {
				const resp = await fetch(url);
				if (resp.ok) {
					const json = await resp.json();
					switch (json.response_code) {
						case 0:
							const questions = json.results.map((q) => {
								return {
									...q,
									question: he.decode(q.question),
									correct_answer: he.decode(q.correct_answer),
									incorrect_answers: q.incorrect_answers.map(
										(a) => he.decode(a)
									),
								};
							});
							setQuestions(questions);
							break;
						case 1:
							setError("No more questions in this category");
							break;
						case 2:
							setError("Invalid Parameter");
							break;
						case 3:
							setError("Token not found");
							break;
						case 4:
							setError("Token empty");
							break;
						default:
							setError(
								"something went wrong while fetching questions"
							);
							break;
					}
				} else {
					setError("something went wrong while fetching questions");
				}
			} catch (e) {
				if (!window.navigator.onLine) {
					setError("Error message: " + e.message + " (OFFLINE)");
				} else {
					setError("Error message: " + e.message);
				}
			}
		})();
	}, [difficulty, category, numberOfQuestions, sessionToken]);

	return [questions, error];
}

export default useFetchQuestions;
