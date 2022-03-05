import useQuiz from "../Hooks/useQuiz";

// import QuizEndStats from "./QuizEndStats";

function Game({ sessionToken }) {
	const component = useQuiz(sessionToken);

	return component;

	// if (!quizFinished) {
	// 	return component;
	// } else {
	// 	return <QuizEndStats />;
	// }
}
export default Game;
