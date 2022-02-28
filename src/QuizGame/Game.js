import BounceLoader from "react-spinners/BounceLoader";

import { STATUS } from "../Hooks/useFetch";

import useQuiz from "../Hooks/useQuiz";
import Question from "./Question";

function Game({ difficulty, category, numberOfQuestions, sessionToken }) {
	const { status, currentQuestion, answerCallback, error } = useQuiz(
		difficulty,
		category,
		numberOfQuestions,
		sessionToken
	);

	if (status === STATUS.pending) {
		return <BounceLoader />;
	} else if (status === STATUS.rejected) {
		return <h3>{error}</h3>;
	} else if (status === STATUS.resolved) {
		return (
			<Question
				question={currentQuestion}
				answerCallback={answerCallback}
			/>
		);
	} else if (currentQuestion === undefined) {
		return <h3>End of Quiz!</h3>;
	} else {
		return null;
	}
}
export default Game;
