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
	const [currentQuestion, answerQuestion] = useQuiz(
		difficulty,
		category,
		numberOfQuestions,
		setIsPlaying,
		sessionToken
	);

	return (
		<>
			{(() => {
				if (!currentQuestion) {
					return <BounceLoader />;
				} else if (currentQuestion) {
					return (
						<Question
							question={currentQuestion}
							answerQuestion={answerQuestion}
						/>
					);
				}
			})()}
		</>
	);
}
export default Game;
