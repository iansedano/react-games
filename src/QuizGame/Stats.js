/**
 * WIP displays some statistics based on the information in globalState
 * Also provides functionality to reset the log of answers.
 */

// Library imports
import { useContext } from "react";

// Component imports
import Button from "../Components/Button";

// State imports
import { globalState } from "../App";
import ACTIONS from "../State/ACTIONS";

function Stats() {
	const { state, dispatch } = useContext(globalState);
	if (state.quizAnswers.length) {
		const countRight = state.quizAnswers.filter((a) => a === 1).length;
		const percentRight = `${(
			(countRight / state.quizAnswers.length) *
			100
		).toFixed(2)}%`;

		return (
			<div className="flex-col">
				<h3>{`You answer correctly ${percentRight} of the time`}</h3>
				<Button
					onClick={() => {
						dispatch({
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
