// CSS
import "./QuizApp.css";

// Library imports
import { useRef } from "react";

// Hook imports
import useToken from "../Hooks/useToken";
import useGameSettings from "../Hooks/useGameSettings";

import Quiz from "./Quiz";

function QuizApp() {
	console.log("QuizApp render");
	// Hooks
	const cachedQuestionCategories = useRef();
	const sessionToken = useToken();
	const [settings, setSettings] = useGameSettings();

	const classNames = [
		"bg-3",
		"flex-col",
		"border-rad",
		"justify-center",
		"main-game-container",
	];

	return (
		<div className={classNames.join(" ")}>
			<Quiz
				cachedQuestionCategories={cachedQuestionCategories}
				sessionToken={sessionToken}
				settings={settings}
				setSettings={setSettings}
			/>
		</div>
	);
}

export default QuizApp;
