import { useContext } from "react";

import Button from "./../../Components/Button";
import { globalState } from "./../../App";

function Stats({ answers }) {
	const { state, dispatch } = useContext(globalState);
	if (state.quizAnswers.length) {
		const countRight = answers.filter((a) => a === 1).length;
		const percentRight = `${((countRight / answers.length) * 100).toFixed(
			2
		)}%`;

		return (
			<div className="flex-col">
				<h3>{`You answer correctly ${percentRight} of the time`}</h3>
				<Button
					onClick={() => {
						dispatch({
							type: "gameInfo/generalKnowledgeGame/resetAnswers",
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
