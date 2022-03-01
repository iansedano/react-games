import { useState, useContext } from "react";

import ACTIONS from "./../State/ACTIONS";
import { globalState } from "./../App";

/**
 * Container for game settings returning function that will save them
 * to the global state
 */
function useGameSettings() {
	const { dispatch } = useContext(globalState);
	const [state, setState] = useState({
		numberOfQuestions: 10,
		difficulty: "",
		category: "",
	});

	const setSettings = (key, value) => {
		const newState = { ...state };
		if (value === "Any") {
			newState[key] = "";
		} else newState[key] = value;

		setState(newState);
	};

	const saveSettings = () => {
		dispatch({ type: ACTIONS.QUIZ_UPDATE_SETTINGS, payload: { state } });
	};

	return [state, setSettings, saveSettings];
}

export default useGameSettings;
