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

	return [state, setSettings];
}

export default useGameSettings;
