/**
 * Top-level hook to manage
 * 	- fetching questions, via useFetchQuestions
 * 	- serving questions in order
 * 	- signalling when quiz has ended
 * 	- dispatching actions on quiz ending
 */

// Library imports
import { useCallback, useContext, useEffect, useState } from "react";

// Hook imports
import useFetchQuestions from "./useFetchQuestions";

// State imports
import { globalState } from "../App";
import ACTIONS from "../State/ACTIONS";

function useQuiz(difficulty, category, numberOfQuestions, sessionToken) {
	const { dispatch } = useContext(globalState);
	const { status, error, questions } = useFetchQuestions(
		difficulty,
		category,
		numberOfQuestions,
		sessionToken
	);

	const [questionIndex, setQuestionIndex] = useState(0);
	let quizFinished = false;
	if (questions) {
		if (questions[questionIndex] === undefined) {
			quizFinished = true;
		}
	}

	// Answers as an array of the questions answered, 1 for correct, 0 for wrong
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
		quizFinished,
		currentQuestion: questions ? questions[questionIndex] : null,
		answerCallback,
		error,
	};
}

export default useQuiz;
