// Library imports
import { useState, useContext } from "react";

// State imports
import { globalState } from "./../App";

function useGameSettings() {
	const { state } = useContext(globalState);

	const [settings, setSettings] = useState({
		numberOfQuestions: state.quizNumberOfQuestionsSet,
		difficulty: state.quizDifficultySet,
		category: state.quizCategorySet,
	});

	const setSettingsWrapper = (key, value) => {
		const newState = { ...state };
		if (value === "Any") {
			newState[key] = "";
		} else newState[key] = value;

		setSettings(newState);
	};

	return [settings, setSettingsWrapper];
}

export default useGameSettings;
