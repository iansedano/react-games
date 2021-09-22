import Question from "./Question";
import useQuiz from "./useQuiz";

function Game({ difficulty, category, numberOfQuestions, setIsPlaying }) {
	const [currentQuestion, answerQuestion] = useQuiz(
		difficulty,
		category,
		numberOfQuestions,
		setIsPlaying
	);

	return (
		<Question question={currentQuestion} answerQuestion={answerQuestion} />
	);
}
export default Game;
