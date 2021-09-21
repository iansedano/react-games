import { useState } from "react";
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

	const difficultyOptions = ["Hard", "Medium", "Easy"];
	const categoryOptions = ["Entertainment", "Science", "History"];

	const changeHandler = (e) => {
		const assigner = {};
		assigner[e.target.name] = e.target.value;
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
				options={categoryOptions}
			>
				Category
			</FormDataListInput>
			<Button
				onClick={() => {
					dispatch({
						type: "gameInfo/generalKnowledgeGame/updateSettings",
						payload: {
							numberOfQuestions: "",
							difficulty: "",
							category: null,
						},
					});
				}}
			>
				Save Settings
			</Button>
		</div>
	);
}
export default Settings;
