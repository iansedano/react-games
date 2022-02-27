import { useState } from "react";

function useGameSettings() {
	const [formState, setFormState] = useState({
		numberOfQuestions: 10,
		difficulty: "",
		category: "",
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
			alert("Too many questions (max 50)");
			return 0;
		}
		if (formState.numberOfQuestions <= 0) {
			alert("Must use at least 1 question");
			return 0;
		}
		return 1;
	};

	return [formState, setState, saveSettings];
}

export default useGameSettings;
