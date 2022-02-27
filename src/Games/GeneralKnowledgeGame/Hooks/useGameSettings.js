import { useState } from "react";

function useGameSettings() {
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

	// const saveSettings = () => {
	// 	if (formState.numberOfQuestions > 50) {
	// 		alert("Too many questions (max 50)");
	// 		return 0;
	// 	}
	// 	if (formState.numberOfQuestions <= 0) {
	// 		alert("Must use at least 1 question");
	// 		return 0;
	// 	}
	// 	return 1;
	// };

	return [state, setSettings];
}

export default useGameSettings;
