import CategorySelector from "./CategorySelector";
import DifficultySelector from "./DifficultySelector";

import Button from "./../../Components/Button";
import FormTextInput from "./../../Components/FormTextInput";

// https://reactjs.org/docs/forms.html
// https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
// https://reactjs.org/docs/refs-and-the-dom.html

function Settings({
	settings,
	setSettings,
	setIsPlaying,
	cachedQuestionCategories,
}) {
	const submitHandler = (e) => {
		e.preventDefault();
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
