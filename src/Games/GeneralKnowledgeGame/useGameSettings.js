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

	return [formState, setState, () => saveState(dispatch, formState)];
}

export default useGameSettings;
