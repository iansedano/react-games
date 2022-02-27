import { useState, useContext, useRef } from "react";

import Button from "./../../Components/Button";

import useGameSettings from "./Hooks/useGameSettings";
import useToken from "./Hooks/useToken";
import Settings from "./Settings";
import Stats from "./Stats";
import Game from "./Game";

import "./GeneralKnowledgeGame.css";

function GeneralKnowledgeGame() {
	const [isPlaying, setIsPlaying] = useState(false);
	const cachedQuestionCategories = useRef();
	const sessionToken = useToken();

	const [settings, setSettings] = useGameSettings();

	return (
		<div className="bg-3 flex-col border-rad justify-center main-game-container">
			{(() => {
				/* IIFE */
				if (isPlaying) {
					return (
						<>
							<Game
								difficulty={settings.difficulty}
								category={settings.category}
								numberOfQuestions={settings.numberOfQuestions}
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
							{
								<Settings
									formState={settings}
									setFormState={setSettings}
									setIsPlaying={setIsPlaying}
									cachedQuestionCategories={
										cachedQuestionCategories
									}
								/>
							}
							<Stats />
						</>
					);
				}
			})()}
		</div>
	);
}

export default GeneralKnowledgeGame;
