function Stats() {
	return (
		<div className="stat-form flex-center">
			<label for="numQuestions">Number of Questions</label>
			<input type="text" id="numQuestions" name="numQuestions" />
			<label for="categoryChoice">Category</label>
			<input list="categories" id="categoryChoice" />
			<datalist id="categories">
				<option value="entertainment" />
			</datalist>
			<label for="difficulty">Difficulty</label>
			<input type="text" id="difficulty" name="difficulty" />
		</div>
	);
}
export default Stats;
