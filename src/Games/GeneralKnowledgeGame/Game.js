import BounceLoader from "react-spinners/BounceLoader";

import Question from "./Question";
import useQuiz from "./useQuiz";

function Game({
	difficulty,
	category,
	numberOfQuestions,
	setIsPlaying,
	sessionToken,
}) {
	const { isLoading, currentQuestion, answerCallback, error } = useQuiz(
		difficulty,
		category,
		numberOfQuestions,
		setIsPlaying,
		sessionToken
	);

	if (isLoading) {
		return <BounceLoader />;
	} else if (!isLoading && error != null) {
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
