import { useState, useEffect, useContext } from "react";
import { globalState } from "./../../App";

import useFetchQuestions from "./useFetchQuestions";

function useQuiz(
	difficulty,
	category,
	numberOfQuestions,
	setIsPlaying,
	sessionToken
) {
	const { dispatch } = useContext(globalState);
	const [questions, error] = useFetchQuestions(
		difficulty,
		category,
		numberOfQuestions,
		sessionToken
	);
	const [questionIndex, setQuestionIndex] = useState(0);
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

	const answerQuestion = (answerGiven) => {
		if (answerGiven === questions[questionIndex].correct_answer) {
			setAnswers((arr) => [...arr, 1]);
		} else {
			setAnswers((arr) => [...arr, 0]);
		}

		setQuestionIndex((c) => c + 1);
	};

	return [questions ? questions[questionIndex] : null, answerQuestion, error];
}

export default useQuiz;
