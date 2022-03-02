import { useContext } from "react";

import Button from "../Components/Button";
import FormTextInput from "../Components/FormTextInput";

import { globalState } from "./../App";
import ACTIONS from "./../State/ACTIONS";

import CategorySelector from "./CategorySelector";
import DifficultySelector from "./DifficultySelector";

// https://reactjs.org/docs/forms.html
// https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
// https://reactjs.org/docs/refs-and-the-dom.html

function Settings({
	settings,
	setSettings,
	setIsPlaying,
	cachedQuestionCategories,
}) {
	const { dispatch } = useContext(globalState);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch({ type: ACTIONS.QUIZ_UPDATE_SETTINGS, payload: settings });
		setIsPlaying((p) => !p);
	};

	const changeHandler = (e) => {
		setSettings(e.target.id, e.target.value);
	};

	return (
		<form
			className="settings-form margin-m flex-col"
			onSubmit={submitHandler}
		>
			<FormTextInput
				name="numberOfQuestions"
				value={settings.numberOfQuestions}
				onChange={changeHandler}
			>
				Number of Questions
			</FormTextInput>
			<DifficultySelector
				selectedDifficulty={settings.difficulty}
				onChange={changeHandler}
			/>
			<CategorySelector
				selectedCategory={settings.category}
				cachedQuestionCategories={cachedQuestionCategories}
				onChange={changeHandler}
			/>
			<Button type="submit" className="margin-m">
				Start Game
			</Button>
		</form>
	);
}
export default Settings;
