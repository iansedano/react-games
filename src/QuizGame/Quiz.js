/**
 * Main page and main child of the Quiz app
 *
 * Manages the isPlaying state which determines whether the game is being played
 * or configured.
 */

// Library imports
import { useState } from "react";

// Component imports
import Button from "../Components/Button";

// General Knowledge Game imports
import Settings from "./Settings";
import Stats from "./Stats";
import Game from "./Game";

function Quiz({ questionCategoryRef, sessionToken }) {
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
					questionCategoryRef={questionCategoryRef}
				/>
				<Stats />
			</>
		);
	}
}

export default Quiz;
