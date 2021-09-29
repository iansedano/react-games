import CategorySelector from "./CategorySelector";
import DifficultySelector from "./DifficultySelector";

import Button from "./../../Components/Button";
import FormTextInput from "./../../Components/FormTextInput";

// https://reactjs.org/docs/forms.html
// https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
// https://reactjs.org/docs/refs-and-the-dom.html

function Settings({
	formState,
	setFormState,
	saveSettings,
	setIsPlaying,
	cachedQuestionCategories,
}) {
	const submitHandler = (e) => {
		e.preventDefault();
		if (saveSettings()) setIsPlaying((p) => !p);
	};

	const changeHandler = (e) => {
		setFormState(e.target.id, e.target.value);
	};

	return (
		<form
			className="settings-form margin-m flex-col"
			onSubmit={submitHandler}
		>
			<FormTextInput
				name="numberOfQuestions"
				value={formState.numberOfQuestions}
				onChange={changeHandler}
			>
				Number of Questions
			</FormTextInput>
			<DifficultySelector
				selectedDifficulty={formState.difficulty}
				onChange={changeHandler}
			/>
			<CategorySelector
				selectedCategory={formState.category}
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
