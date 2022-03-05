// Library imports
import { useState } from "react";

// Component imports
import Button from "../Components/Button";

// General Knowledge Game imports
import Settings from "./Settings";
import Stats from "./Stats";
import Game from "./Game";

function Quiz({ cachedQuestionCategories, sessionToken }) {
	const [isPlaying, setIsPlaying] = useState(false);

	if (isPlaying) {
		return (
			<>
				<Game sessionToken={sessionToken} />
				<Button onClick={() => setIsPlaying((p) => !p)}>
					Quit Game
				</Button>
			</>
		);
	} else {
		return (
			<>
				<Settings
					setIsPlaying={setIsPlaying}
					cachedQuestionCategories={cachedQuestionCategories}
				/>
				<Stats />
			</>
		);
	}
}

export default Quiz;
