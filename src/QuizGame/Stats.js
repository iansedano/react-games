/**
 * WIP displays some statistics based on the information in globalState
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
	if (globalState.quizAnswers.length) {
		const countRight = globalState.quizAnswers.filter(
			(a) => a === 1
		).length;
		const percentRight = `${(
			(countRight / globalState.quizAnswers.length) *
			100
		).toFixed(2)}%`;

		return (
			<div className="flex-col">
				<h3>{`You answer correctly ${percentRight} of the time`}</h3>
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
