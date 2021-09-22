import Question from "./Question";
import useQuiz from "./useQuiz";

function Game({ difficulty, category, numberOfQuestions }) {
	const [currentQuestion, answers, answerQuestion] = useQuiz(
		difficulty,
		category,
		numberOfQuestions
	);

	return (
		<Question question={currentQuestion} answerQuestion={answerQuestion} />
	);
}
export default Game;
