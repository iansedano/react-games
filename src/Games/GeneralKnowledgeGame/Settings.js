import useGameSettings from "./useGameSettings";

import CategorySelector from "./CategorySelector";
import DifficultySelector from "./DifficultySelector";

import Button from "./../../Components/Button";
import FormTextInput from "./../../Components/FormTextInput";

// https://reactjs.org/docs/forms.html
// https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
// https://reactjs.org/docs/refs-and-the-dom.html

function Settings({ formState, setFormState, saveSettings }) {
	const submitHandler = (e) => {
		e.preventDefault();
		saveSettings();
	};

	const changeHandler = (e) => {
		setFormState(e.target.id, e.target.value);
	};

	return (
		<form className="stat-form flex-center" onSubmit={submitHandler}>
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
				onChange={changeHandler}
			/>
			<Button onClick={submitHandler}>Save Settings</Button>
		</form>
	);
}
export default Settings;
