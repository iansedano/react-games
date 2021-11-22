import { useState, useContext, useRef } from "react";

import Button from "./../../Components/Button";
import { globalState } from "./../../App";

import useGameSettings from "./Hooks/useGameSettings";
import useToken from "./Hooks/useToken";
import Settings from "./Settings";
import Stats from "./Stats";
import Game from "./Game";

import "./GeneralKnowledgeGame.css";

function GeneralKnowledgeGame() {
	const { state, dispatch } = useContext(globalState);
	const [isPlaying, setIsPlaying] = useState(false);
	const GKState = state.games.generalKnowledge;
	const cachedQuestionCategories = useRef();
	const sessionToken = useToken();

	const [formState, setFormState, saveSettings] = useGameSettings(
		GKState.settings,
		dispatch
	);

	return (
		<div className="bg-3 flex-col border-rad justify-center main-game-container">
			{(() => {
				/* IIFE */
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
								sessionToken={sessionToken}
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
								formState={formState}
								setFormState={setFormState}
								saveSettings={saveSettings}
								setIsPlaying={setIsPlaying}
								cachedQuestionCategories={
									cachedQuestionCategories
								}
							/>
							<Stats
								answers={GKState.answers}
								dispatch={dispatch}
							/>
						</>
					);
				}
			})()}
		</div>
	);
}

export default GeneralKnowledgeGame;
