import { useState, useEffect } from "react";

import useGameSettings from "./useGameSettings";
import CategorySelector from "./CategorySelector";

import Button from "./../../Components/Button";
import FormTextInput from "./../../Components/FormTextInput";
import FormSelectInput from "./../../Components/FormSelectInput";

//https://reactjs.org/docs/forms.html

function useCategoryOptions() {
	const [categoryOptions, setCategoryOptions] = useState([
		"awaiting response from server",
	]);

	useEffect(() => {
		const req = async () => {
			const resp = await fetch("https://opentdb.com/api_category.php");
			const json = await resp.json();
			setCategoryOptions(json.trivia_categories);
		};
		req();
	}, []);

	return categoryOptions;
}

function Settings({ settings, dispatch }) {
	const [formState, setFormState, saveSettings] = useGameSettings(
		settings,
		dispatch
	);

	const categoryOptions = useCategoryOptions();
	const difficultyOptions = ["hard", "medium", "easy"];

	const changeHandler = (e) => {
		setFormState(e.target.id, e.target.value);
	};

	return (
		<div className="stat-form flex-center" onChange={changeHandler}>
			<FormTextInput
				name="numberOfQuestions"
				value={formState.numberOfQuestions}
			>
				Number of Questions
			</FormTextInput>
			<FormSelectInput
				name="difficulty"
				value={formState.difficulty}
				optionNames={difficultyOptions}
				defaultValue="Any"
			>
				Difficulty
			</FormSelectInput>
			<CategorySelector
				selectedCategory={formState.category}
				categoryOptions={categoryOptions}
			/>
			<Button onClick={() => saveSettings(dispatch, formState)}>
				Save Settings
			</Button>
		</div>
	);
}
export default Settings;
