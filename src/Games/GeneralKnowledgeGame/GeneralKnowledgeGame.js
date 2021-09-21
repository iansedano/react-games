import { useState, useContext } from "react";

import Settings from "./Settings";
import Stats from "./Stats";
import Game from "./Game";
import Button from "./../../Components/Button";

import { globalState } from "./../../App";

import "./GeneralKnowledgeGame.css";

function GeneralKnowledgeGame() {
	const [state, reducer] = useContext(globalState);
	const [isPlaying, setIsPlaying] = useState(false);
	const GKState = state.games.generalKnowledge;
	return (
		<div className="flex-center">
			{isPlaying ? (
				<>
					<Game />
					<Button onClick={() => setIsPlaying((p) => !p)}>
						Quit Game
					</Button>
				</>
			) : (
				<>
					<Settings data={GKState.settings} reducer={reducer} />
					<Stats data={GKState.answers} />
					<Button onClick={() => setIsPlaying((p) => !p)}>
						Start Game
					</Button>
				</>
			)}
		</div>
	);
}

export default GeneralKnowledgeGame;
