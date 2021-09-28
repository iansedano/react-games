import { useState, useEffect, useContext } from "react";
import { globalState } from "./../../App";

import useFetchQuestions from "./useFetchQuestions";

function useQuiz(difficulty, category, numberOfQuestions) {
	const { dispatch } = useContext(globalState);
	const questions = useFetchQuestions(
		difficulty,
		category,
		numberOfQuestions
	);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		if (!questions[questionIndex]) {
			dispatch({
				type: "gameInfo/generalKnowledgeGame/addAnswers",
				payload: answers,
			});
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

	return [questions[questionIndex], answerQuestion];
}

export default useQuiz;
