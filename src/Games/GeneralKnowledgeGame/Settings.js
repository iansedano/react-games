import { useState } from "react";
import Button from "./../../Components/Button";

//https://reactjs.org/docs/forms.html

function Settings({ settings, dispatch }) {
	const [formState, setFormState] = useState({
		numberOfQuestions: settings.numberOfQuestions,
		difficulty: settings.difficulty,
		category: settings.category,
	});

	return (
		<div className="stat-form flex-center">
			<label for="numberOfQuestionsInput">Number of Questions</label>
			<input
				type="text"
				id="numberOfQuestionsInput"
				name="numberOfQuestionsInput"
				value={formState.numberOfQuestions}
			/>
			<label for="categoryChoiceInput">Category</label>
			<input
				list="categories"
				id="categoryChoiceInput"
				value={formState.category}
			/>
			<datalist id="categories">
				<option value="entertainment" />
			</datalist>
			<label for="difficultyInput">Difficulty</label>
			<input
				type="text"
				id="difficultyInput"
				name="difficultyInput"
				value={formState.difficulty}
			/>
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
