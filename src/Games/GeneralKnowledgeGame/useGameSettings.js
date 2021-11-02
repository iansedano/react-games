import { useState } from "react";

function useGameSettings(settings, dispatch) {
	const [formState, setFormState] = useState({
		numberOfQuestions: settings.numberOfQuestions,
		difficulty: settings.difficulty,
		category: settings.category,
	});

	const setState = (key, value) => {
		const newState = { ...formState };
		if (value === "Any") {
			newState[key] = "";
		} else newState[key] = value;

		setFormState(newState);
	};

	// I would stay away from returning 1 and 0 since they don't communicate what's happening. 
	// Booleans in a descriptive variables should be the way to go here? 
	// for example: const didSaveSettings = false 
	const saveSettings = () => {
		if (formState.numberOfQuestions > 50) {
			alert("Too many questions (max 50)");
			return 0;
		}
		if (formState.numberOfQuestions <= 0) {
			alert("Must use at least 1 question");
			return 0;
		}

		dispatch({
			type: "gameInfo/generalKnowledgeGame/updateSettings",
			payload: formState,
		});
		return 1;
	};

	return [formState, setState, saveSettings];
}

export default useGameSettings;
