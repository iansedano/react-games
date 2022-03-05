// Library imports
import { useContext, useState } from "react";

// State imports
import { globalState } from "./../App";
import ACTIONS from "./../State/ACTIONS";

function useGameSettings() {
	const { state, dispatch } = useContext(globalState);

	const [settings, setSettings] = useState({
		numberOfQuestions: state.quizNumberOfQuestionsSet,
		difficulty: state.quizDifficultySet,
		category: state.quizCategorySet,
	});

	const setSettingsWrapper = (key, value) => {
		const newSettings = { ...settings };
		if (value === "Any") {
			newSettings[key] = "";
		} else newSettings[key] = value;

		setSettings(newSettings);
	};

	const saveSettings = () =>
		dispatch({ type: ACTIONS.QUIZ_UPDATE_SETTINGS, payload: settings });

	return [settings, setSettingsWrapper, saveSettings];
}

export default useGameSettings;
