import Button from "./../../Components/Button";

//https://reactjs.org/docs/forms.html

function Settings({ settings, dispatch }) {
	return (
		<div className="stat-form flex-center">
			<label for="numberOfQuestionsInput">Number of Questions</label>
			<input
				type="text"
				id="numberOfQuestionsInput"
				name="numberOfQuestionsInput"
			/>
			<label for="categoryChoiceInput">Category</label>
			<input list="categories" id="categoryChoiceInput" />
			<datalist id="categories">
				<option value="entertainment" />
			</datalist>
			<label for="difficultyInput">Difficulty</label>
			<input type="text" id="difficultyInput" name="difficultyInput" />
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
