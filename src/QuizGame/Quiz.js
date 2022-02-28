// Library imports
import { useState, useRef } from "react";

// Component imports
import Button from "../Components/Button";

// General Knowledge Game imports
import Settings from "./Settings";
import Stats from "./Stats";
import Game from "./Game";

function Quiz({
	cachedQuestionCategories,
	sessionToken,
	settings,
	setSettings,
}) {
	// Hooks
	const [isPlaying, setIsPlaying] = useState(false);

	let render;

	if (isPlaying) {
		render = (
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
		render = (
			<>
				<Settings
					settings={settings}
					setSettings={setSettings}
					setIsPlaying={setIsPlaying}
					cachedQuestionCategories={cachedQuestionCategories}
				/>
				<Stats />
			</>
		);
	}

	return render;
}

export default Quiz;
