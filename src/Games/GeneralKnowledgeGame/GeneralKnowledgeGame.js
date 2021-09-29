import { useState, useContext, useRef } from "react";

import Settings from "./Settings";
import Stats from "./Stats";
import Game from "./Game";
import Button from "./../../Components/Button";

import useGameSettings from "./useGameSettings";

import { globalState } from "./../../App";

import "./GeneralKnowledgeGame.css";

function GeneralKnowledgeGame() {
	const { state, dispatch } = useContext(globalState);
	const [isPlaying, setIsPlaying] = useState(false);
	const GKState = state.games.generalKnowledge;
	const cachedQuestionCategories = useRef();

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
