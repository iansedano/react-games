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
	const [currentQuestion, answerQuestion, error] = useQuiz(
		difficulty,
		category,
		numberOfQuestions,
		setIsPlaying,
		sessionToken
	);

	return (
		<>
			{(() => {
				if (error) {
					console.log(error);
					return (
						<>
							<h3>Request failed!</h3>
							<p>{error}</p>
						</>
					);
				} else if (currentQuestion === null) {
					return <BounceLoader />;
				} else if (currentQuestion) {
					return (
						<Question
							question={currentQuestion}
							answerQuestion={answerQuestion}
						/>
					);
				} else if (currentQuestion === undefined) {
					return <h3>End of Quiz!</h3>;
				}
			})()}
		</>
	);
}
export default Game;
