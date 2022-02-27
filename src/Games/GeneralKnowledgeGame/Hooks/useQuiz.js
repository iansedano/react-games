import { useState, useEffect, useContext, useCallback } from "react";

import { globalState } from "./../../../App";
import useFetchQuestions from "./useFetchQuestions";
import { STATUS } from "./../../../Hooks/useFetch";

import ACTIONS from "./../../../State/ACTIONS";

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
	let quizFinished = false;
	if (questions) {
		if (questions[questionIndex] === undefined) {
			quizFinished = true;
		}
	}

	// answers as a store of the questions answered, 1 for correct, 0 for wrong.
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		if (quizFinished) {
			dispatch({
				type: ACTIONS.QUIZ_ADD_ANSWERS,
				payload: answers,
			});
			dispatch({
				type: ACTIONS.QUIZ_INCREMENT_TIMES_PLAYED,
			});
		}
	}, [quizFinished, answers, dispatch]);

	const answerCallback = useCallback(
		(answerGiven) => {
			if (answerGiven === questions[questionIndex].correct_answer) {
				setAnswers((arr) => [...arr, 1]);
			} else {
				setAnswers((arr) => [...arr, 0]);
			}
			setQuestionIndex((c) => c + 1);
		},
		[questions, questionIndex]
	);

	return {
		status,
		currentQuestion: questions ? questions[questionIndex] : null,
		answerCallback,
		error,
	};
}

export default useQuiz;
