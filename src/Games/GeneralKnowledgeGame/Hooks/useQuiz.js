import { useState, useEffect, useContext, useCallback } from "react";

import { globalState } from "./../../../App";
import useFetchQuestions from "./useFetchQuestions";

function useQuiz(difficulty, category, numberOfQuestions, sessionToken) {
	const { dispatch } = useContext(globalState);
	const { status, error, questions } = useFetchQuestions(
		difficulty,
		category,
		numberOfQuestions,
		sessionToken
	);
	// questionIndex for the question the player is currenty answering,
	// and a way to know if the quiz has ended.
	const [questionIndex, setQuestionIndex] = useState(0);
	// answers as a store of the questions answered, 1 for correct, 0 for wrong.
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		if (questions) {
			if (!questions[questionIndex]) {
				dispatch({
					type: "gameInfo/generalKnowledgeGame/addAnswers",
					payload: answers,
				});
				dispatch({
					type: "gameInfo/generalKnowledgeGame/incrementTimesPlayed",
				});
			}
		}
	}, [answers, dispatch, questions, questionIndex]);

	const answerCallback = useCallback(
		(answerGiven) => {
			if (answerGiven === questions[questionIndex].correct_answer) {
				setAnswers((arr) => [...arr, 1]);
			} else {
				setAnswers((arr) => [...arr, 0]);
			}
			setQuestionIndex((c) => c + 1);
		},
		[questionIndex]
	);

	return {
		status,
		currentQuestion: questions ? questions[questionIndex] : null,
		answerCallback,
		error,
	};
}

export default useQuiz;
