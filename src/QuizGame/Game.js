import useQuiz from "../Hooks/useQuiz";

function Game({ sessionToken }) {
	const component = useQuiz(sessionToken);

	return component;
}
export default Game;
