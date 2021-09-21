import Settings from "./Settings";
import Stats from "./Stats";
import Game from "./Game";
import Button from "./../../Components/Button";

import "./GeneralKnowledgeGame.css";

function GeneralKnowledgeGame() {
	return (
		<div className="flex-center">
			<Settings />
			<Stats />
			<Button> Start Game </Button>
			<Game />
		</div>
	);
}

export default GeneralKnowledgeGame;
