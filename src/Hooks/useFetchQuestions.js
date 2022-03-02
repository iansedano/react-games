import { useState, useEffect } from "react";
import he from "he";

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

	const buildUrl = () => {
		const root = "api.php?";
		const params = [
			difficulty ? `difficulty=${difficulty}` : "",
			category ? `category=${category}` : "",
			numberOfQuestions ? `amount=${numberOfQuestions}` : "",
			sessionToken ? `token=${sessionToken}` : "",
		];
		return root + params.filter((p) => p !== "").join("&");
	};

	const { status, error, response } = useOpenTriviaApi(buildUrl());

	console.log({ status, error, response });

	useEffect(() => {
		if (status === STATUS.resolved) {
			setQuestions(
				response.results.map((question) => {
					return {
						...question,
						question: he.decode(question.question),
						correct_answer: he.decode(question.correct_answer),
						incorrect_answers: question.incorrect_answers.map(
							(answer) => he.decode(answer)
						),
					};
				})
			);
		}
	}, [status, response]);

	return { status, error, questions };
}

export default useFetchQuestions;
