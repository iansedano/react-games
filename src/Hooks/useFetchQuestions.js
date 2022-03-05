// Library imports
import { useContext, useState } from "react";
import he from "he";

// Hook imports
import { STATUS } from "./useFetch";
import useOpenTriviaApi from "./useOpenTriviaApi";

// State imports
import { globalState } from "./../App";

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

function useFetchQuestions(sessionToken) {
	const { state } = useContext(globalState);
	const [questions, setQuestions] = useState(null);

	// Build query string based on parameters
	const buildQueryString = () => {
		const root = "api.php?";

		const params = {
			amount: state.quizNumberOfQuestionsSet,
			difficulty: state.quizDifficultySet,
			category: state.quizCategorySet,
			token: sessionToken,
		};

		const queryString = Object.entries(params)
			.filter(([key, value]) => Boolean(value))
			.reduce((arr, [key, value]) => {
				arr.push(`${key}=${value}`);
				return arr;
			}, [])
			.join("&");

		return root + queryString;
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
