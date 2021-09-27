import { useState } from "react";

const saveState = (dispatch, formState) => {
	dispatch({
		type: "gameInfo/generalKnowledgeGame/updateSettings",
		payload: formState,
	});
};

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

	const saveSettings = () => {
		if (formState.numberOfQuestions > 50) {
			alert("too many questions");
			return 0;
		}
		saveState(dispatch, formState);
		return 0;
	};

	return [formState, setState, saveSettings];
}

export default useGameSettings;
