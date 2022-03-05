// Library imports
import BounceLoader from "react-spinners/BounceLoader";

// Component imports
import Error from "./../Components/Error";

// Hook imports
import { STATUS } from "../Hooks/useFetch";
import useQuiz from "../Hooks/useQuiz";

// Local imports
import Question from "./Question";

function Game({ sessionToken }) {
	const { status, quizFinished, currentQuestion, answerCallback, error } =
		useQuiz(sessionToken);

	if (quizFinished) return <h3>End of Quiz!</h3>;

	switch (status) {
		case STATUS.idle:
		case STATUS.fetching:
			return <BounceLoader />;
		case STATUS.resolved:
			return (
				<Question
					question={currentQuestion}
					answerCallback={answerCallback}
				/>
			);
		case STATUS.rejected:
			return <Error>{error}</Error>;
		default:
			return <Error>Something went wrong with Game</Error>;
	}
}
export default Game;
