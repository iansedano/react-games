import { useState, useContext } from "react";

import Settings from "./Settings";
import Stats from "./Stats";
import Game from "./Game";
import Button from "./../../Components/Button";

import { globalState } from "./../../App";

import "./GeneralKnowledgeGame.css";

function GeneralKnowledgeGame() {
	const { state, dispatch } = useContext(globalState);
	const [isPlaying, setIsPlaying] = useState(false);
	const GKState = state.games.generalKnowledge;
	return (
		<div className="flex-center">
			{(() => {
				if (isPlaying) {
					return (
						<>
							<Game
								difficulty={GKState.settings.difficulty}
								category={GKState.settings.category}
								numberOfQuestions={
									GKState.settings.numberOfQuestions
								}
								setIsPlaying={setIsPlaying}
							/>
							<Button onClick={() => setIsPlaying((p) => !p)}>
								Quit Game
							</Button>
						</>
					);
				} else {
					return (
						<>
							<Settings
								settings={GKState.settings}
								dispatch={dispatch}
							/>
							<Stats answers={GKState.answers} />
							<Button onClick={() => setIsPlaying((p) => !p)}>
								Start Game
							</Button>
						</>
					);
				}
			})()}
		</div>
	);
}

export default GeneralKnowledgeGame;
