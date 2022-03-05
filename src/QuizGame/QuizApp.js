/**
 * Parent component of the Quiz game, providing some state that should stay
 * live throughout it's lifetime, categories and the session token.
 */

// CSS
import "./QuizApp.css";

// Library imports
import { useRef } from "react";

// Hook imports
import useToken from "../Hooks/useToken";

import Quiz from "./Quiz";

function QuizApp() {
	console.log("QuizApp render");
	// Hooks
	const questionCategoryRef = useRef(); // To cache the value
	const sessionToken = useToken();

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
				questionCategoryRef={questionCategoryRef}
				sessionToken={sessionToken}
			/>
		</div>
	);
}

export default QuizApp;
