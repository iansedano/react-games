function Settings() {
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
		</div>
	);
}
export default Settings;
