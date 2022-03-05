/**
 * Top-level hook to manage:
 * 	- fetching questions, via useFetchQuestions
 * 	- serving questions in order
 * 	- signalling when quiz has ended
 * 	- dispatching actions on quiz ending
 */

// Library imports
import { useEffect, useContext, useReducer } from "react";
import BounceLoader from "react-spinners/BounceLoader";

// Component imports
import Error from "../Components/Error";

// Hook imports
import { STATUS } from "../Hooks/useFetch";
import useFetchQuestions from "./useFetchQuestions";

// State imports
import { globalContext } from "../App";
import ACTIONS from "../State/ACTIONS";

// Project imports
import Question from "../QuizGame/Question";
import QuestionResult from "../QuizGame/QuestionResult";

const QUIZ_STATUS = {
	IDLE: "IDLE",
	FETCHING: "FETCHING",
	AWAITING_ANSWER: "AWAITING ANSWER",
	GIVING_FEEDBACK: "GIVING_FEEDBACK",
	FINISHED: "FINISHED",
	FINISHED_AND_DISPATCHED: "FINISHED_AND_DISPATCHED",
	FETCH_FAIL: "FETCH_FAIL",
};

const QUIZ_ACTIONS = {
	CHANGE_STATUS: "CHANGE_STATUS",
	POPULATE_QUESTIONS: "POPULATE_QUESTIONS",
	GIVE_ANSWER: "GIVE_ANSWER",
	GO_TO_NEXT_QUESTION: "GO_TO_NEXT_QUESTION",
};

const defaultQuizState = {
	status: QUIZ_STATUS.IDLE,
	questions: null,
	answers: [],
	questionIndex: 0,
};

function quizReducer(state, action) {
	console.log("ACTION!!", action);
	switch (action.type) {
		case QUIZ_ACTIONS.GIVE_ANSWER:
			const questionRight =
				state.questions[state.questionIndex].correct_answer ===
				action.payload;

			const answer = questionRight ? 1 : 0;

			return {
				...state,
				status: QUIZ_STATUS.GIVING_FEEDBACK,
				answers: [...state.answers, answer],
			};
		case QUIZ_ACTIONS.GO_TO_NEXT_QUESTION:
			if (state.questionIndex + 1 >= state.questions.length) {
				return {
					...state,
					status: QUIZ_STATUS.FINISHED,
					questionIndex: null,
				};
			} else {
				return {
					...state,
					status: QUIZ_STATUS.AWAITING_ANSWER,
					questionIndex: state.questionIndex + 1,
				};
			}

		case QUIZ_ACTIONS.CHANGE_STATUS:
			return { ...state, status: action.payload };
		case QUIZ_ACTIONS.POPULATE_QUESTIONS:
			return {
				...state,
				status: QUIZ_STATUS.AWAITING_ANSWER,
				questions: action.payload,
			};
		default:
			return state;
	}
}

function useQuiz(sessionToken) {
	const { globalDispatch } = useContext(globalContext);
	const { status, error, questions } = useFetchQuestions(sessionToken);
	const [quizState, quizDispatch] = useReducer(quizReducer, defaultQuizState);

	useEffect(() => {
		if (quizState.status === QUIZ_STATUS.FINISHED) {
			console.log("dispatching");
			globalDispatch({
				type: ACTIONS.QUIZ_ADD_ANSWERS,
				payload: quizState.answers,
			});
			globalDispatch({
				type: ACTIONS.QUIZ_INCREMENT_TIMES_PLAYED,
			});
			quizDispatch({
				type: QUIZ_ACTIONS.CHANGE_STATUS,
				payload: QUIZ_STATUS.FINISHED_AND_DISPATCHED,
			});
		}
	}, [globalDispatch, quizState]);

	console.log("============useQuiz================");
	console.log({ status, questions });
	console.log(quizState);

	let renderComponent;

	if (quizState.questions === null) {
		switch (status) {
			case STATUS.idle:
				break;
			case STATUS.fetching:
				if (quizState.status !== QUIZ_STATUS.FETCHING) {
					quizDispatch({
						type: QUIZ_ACTIONS.CHANGE_STATUS,
						payload: QUIZ_STATUS.FETCHING,
					});
				}
				break;
			case STATUS.resolved:
				quizDispatch({
					type: QUIZ_ACTIONS.POPULATE_QUESTIONS,
					payload: questions,
				});
				break;
			case STATUS.rejected:
				quizDispatch({
					type: QUIZ_ACTIONS.CHANGE_STATUS,
					payload: QUIZ_STATUS.FETCH_FAIL,
				});
				renderComponent = <Error>{error}</Error>;
				break;
			default:
		}
	}

	switch (quizState.status) {
		case QUIZ_STATUS.IDLE:
		case QUIZ_STATUS.FETCHING:
			renderComponent = <BounceLoader />;
			break;
		case QUIZ_STATUS.AWAITING_ANSWER:
			renderComponent = (
				<Question
					question={quizState.questions[quizState.questionIndex]}
					answerCallback={(answer) => {
						quizDispatch({
							type: QUIZ_ACTIONS.GIVE_ANSWER,
							payload: answer,
						});
					}}
				/>
			);
			break;
		case QUIZ_STATUS.GIVING_FEEDBACK:
			renderComponent = (
				<>
					<Question
						question={quizState.questions[quizState.questionIndex]}
						answerCallback={() => {}} // disabling button presses
						disabled={true}
					/>
					<QuestionResult
						question={quizState.questions[quizState.questionIndex]}
						answer={quizState.answers[quizState.answers.length - 1]}
						nextQuestionCallback={() => {
							quizDispatch({
								type: QUIZ_ACTIONS.GO_TO_NEXT_QUESTION,
							});
						}}
					/>
				</>
			);
			break;
		case QUIZ_STATUS.FINISHED:
			// The useEffect callback defined above comes into play here
			renderComponent = <BounceLoader />;
			break;
		case QUIZ_STATUS.FINISHED_AND_DISPATCHED:
			renderComponent = <h3>End of quiz!</h3>;
			break;
		default:
			renderComponent = <Error>Something went wrong with Game</Error>;
	}

	return renderComponent;
}

export default useQuiz;
