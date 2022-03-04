// Library imports
import { useState } from "react";
import he from "he";

// Hook imports
import { STATUS } from "./useFetch";
import useOpenTriviaApi from "./useOpenTriviaApi";

/*

Sample question structure returned from server, note HTML escaped chars
Hence need for 'he'

{
	category: "Entertainment: Film",
	type: "multiple",
	difficulty: "medium",
	question: "What was Marilyn Monroe`s character&#039;s first name in the film &quot;Some Like It Hot&quot;?",
	correct_answer: "Sugar",
	incorrect_answers: [
		"Honey",
		"Caramel",
		"Candy"
	]
}

*/

function useFetchQuestions(
	difficulty,
	category,
	numberOfQuestions,
	sessionToken
) {
	const [questions, setQuestions] = useState(null);

	// Build query string based on parameters
	const buildQueryString = () => {
		const root = "api.php?";
		const params = [
			difficulty ? `difficulty=${difficulty}` : "",
			category ? `category=${category}` : "",
			numberOfQuestions ? `amount=${numberOfQuestions}` : "",
			sessionToken ? `token=${sessionToken}` : "",
		];
		return root + params.filter((p) => p !== "").join("&");
	};

	const { status, error, response } = useOpenTriviaApi(buildQueryString());

	if (status === STATUS.resolved && questions === null) {
		const questions = response.results.map((question) => {
			return {
				...question,
				question: he.decode(question.question),
				correct_answer: he.decode(question.correct_answer),
				incorrect_answers: question.incorrect_answers.map((answer) =>
					he.decode(answer)
				),
			};
		});
		setQuestions(questions);
		return { status, error, questions };
	}

	return { status, error, questions };
}

export default useFetchQuestions;
