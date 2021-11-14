import BounceLoader from "react-spinners/BounceLoader";

import { STATUS } from "./../../Hooks/useFetch"

import Question from "./Question";
import useQuiz from "./useQuiz";

function Game({
	difficulty,
	category,
	numberOfQuestions,
	setIsPlaying,
	sessionToken,
}) {
	const { status, currentQuestion, answerCallback, error } = useQuiz(
		difficulty,
		category,
		numberOfQuestions,
		setIsPlaying,
		sessionToken
	);

	if (status === STATUS.pending ) {
		return <BounceLoader />;
	} else if (status === STATUS.rejected) {
		return <h3>error</h3>;
	} else if (currentQuestion) {
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
