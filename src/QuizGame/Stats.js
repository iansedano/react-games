/**
 * Displays some statistics based on the information in globalState
 * Also provides functionality to reset the log of answers.
 */

// Library imports
import { useContext } from "react";

// Component imports
import Button from "../Components/Button";

// State imports
import { globalContext } from "../App";
import ACTIONS from "../State/ACTIONS";

function Stats() {
	const { globalState, globalDispatch } = useContext(globalContext);
	const flattenedAnswers = globalState.quizAnswers.flat();
	const numberOfQuestionsAnswered = flattenedAnswers.length;

	if (numberOfQuestionsAnswered > 0) {
		const countRight = flattenedAnswers.filter((a) => a === 1).length;
		const percentRight = `${(
			(countRight / numberOfQuestionsAnswered) *
			100
		).toFixed(0)}%`;

		return (
			<div className="flex-col">
				<h3>{`You answer correctly ${percentRight} of the time`}</h3>
				<p>{`You have answered ${numberOfQuestionsAnswered} questions.`}</p>
				<p>{`Games played: ${globalState.quizTimesPlayed}`}</p>
				<Button
					onClick={() => {
						globalDispatch({
							type: ACTIONS.QUIZ_RESET_ANSWERS,
						});
					}}
				>
					Reset answer stats.
				</Button>
			</div>
		);
	}

	return null;
}
export default Stats;
