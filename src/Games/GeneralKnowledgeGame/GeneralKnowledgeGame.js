import { useContext } from "react";

import Settings from "./Settings";
import Stats from "./Stats";
import Game from "./Game";
import Button from "./../../Components/Button";

import { globalState } from "./../../App";

import "./GeneralKnowledgeGame.css";

function GeneralKnowledgeGame() {
	const [state, reducer] = useContext(globalState);
	const GKState = state.games.generalKnowledge;
	return (
		<div className="flex-center">
			<Settings data={GKState.settings} reducer={reducer} />
			<Stats data={GKState.answers} />
			<Button> Start Game </Button>
			<Game />
		</div>
	);
}

export default GeneralKnowledgeGame;
