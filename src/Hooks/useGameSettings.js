/**
 * Hook that provides a wrapper around the game settings for the form component
 * It first pulls the value from the context, and then provides the settings
 * in a simplified object for the form, and also an updater function to control
 * the form. Finally, it provides a saveSettings function, that will dispatch
 * the updates to the globalState, saving the settings for the next time the
 * component is loaded.
 */

// Library imports
import { useContext, useState } from "react";

// State imports
import { globalContext } from "./../App";
import ACTIONS from "./../State/ACTIONS";

function useGameSettings() {
	const { globalState, globalDispatch } = useContext(globalContext);

	const [settings, setSettings] = useState({
		numberOfQuestions: globalState.quizNumberOfQuestionsSet,
		difficulty: globalState.quizDifficultySet,
		category: globalState.quizCategorySet,
	});

	const setSettingsWrapper = (key, value) => {
		const newSettings = { ...settings };
		if (value === "Any") {
			newSettings[key] = "";
		} else newSettings[key] = value;

		setSettings(newSettings);
	};

	const saveSettings = () =>
		globalDispatch({
			type: ACTIONS.QUIZ_UPDATE_SETTINGS,
			payload: settings,
		});

	return [settings, setSettingsWrapper, saveSettings];
}

export default useGameSettings;
