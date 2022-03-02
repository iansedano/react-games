import BounceLoader from "react-spinners/BounceLoader";

import Error from "./../Components/Error";

import { STATUS } from "../Hooks/useFetch";

import useQuiz from "../Hooks/useQuiz";
import Question from "./Question";

function Game({ difficulty, category, numberOfQuestions, sessionToken }) {
	const { status, quizFinished, currentQuestion, answerCallback, error } =
		useQuiz(difficulty, category, numberOfQuestions, sessionToken);

	if (status === STATUS.idle || status === STATUS.fetching) {
		return <BounceLoader />;
	} else if (status === STATUS.rejected) {
		return <Error>{error}</Error>;
	} else if (status === STATUS.resolved) {
		return (
			<Question
				question={currentQuestion}
				answerCallback={answerCallback}
			/>
		);
	} else if (quizFinished) {
		return <h3>End of Quiz!</h3>;
	} else {
		return null;
	}
}
export default Game;
