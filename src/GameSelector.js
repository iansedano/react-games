import TimesTableGame from "./Games/TimesTableGame/TimesTableGame"
import ConnectFour from "./Games/ConnectFour/ConnectFour"
import GeneralKnowledgeGame from "./Games/GeneralKnowledgeGame/GeneralKnowledgeGame"

function GameSelector() {
	return (
		<div>
			GAME SELECTION:
			<TimesTableGame />
			<ConnectFour />
			<GeneralKnowledgeGame />
		</div>
	);
}

export default GameSelector