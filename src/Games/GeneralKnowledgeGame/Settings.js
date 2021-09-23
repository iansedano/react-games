import { useState, useEffect } from "react";
import Button from "./../../Components/Button";
import FormTextInput from "./../../Components/FormTextInput";
import FormDataListInput from "./../../Components/FormDataListInput";

//https://reactjs.org/docs/forms.html

function Settings({ settings, dispatch }) {
	const [formState, setFormState] = useState({
		numberOfQuestions: settings.numberOfQuestions,
		difficulty: settings.difficulty,
		category: settings.category,
	});

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

	const difficultyOptions = ["hard", "medium", "easy"];

	const changeHandler = (e) => {
		console.log(e);
		const assigner = {};
		assigner[e.target.name] = e.target["data-value"];
		const newState = Object.assign({ ...formState }, assigner);
		setFormState(() => newState);
	};

	return (
		<div className="stat-form flex-center" onChange={changeHandler}>
			<FormTextInput
				name="numberOfQuestions"
				value={formState.numberOfQuestions}
			>
				Number of Questions
			</FormTextInput>
			<FormDataListInput
				name="difficulty"
				value={formState.difficulty}
				options={difficultyOptions}
			>
				Difficulty
			</FormDataListInput>
			<FormDataListInput
				name="category"
				value={formState.category}
				options={categoryOptions.map((option) => option.name)}
				realValues={categoryOptions.map((option) => option.id)}
			>
				Category
			</FormDataListInput>
			<Button
				onClick={() => {
					dispatch({
						type: "gameInfo/generalKnowledgeGame/updateSettings",
						payload: formState,
					});
				}}
			>
				Save Settings
			</Button>
		</div>
	);
}
export default Settings;
