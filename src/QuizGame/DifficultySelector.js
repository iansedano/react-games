import FormSelectInput from "../Components/FormSelectInput";

function DifficultySelector({ selectedDifficulty, onChange }) {
	const difficultyOptions = [
		{ name: "Any", value: "" },
		{ name: "Easy", value: "easy" },
		{ name: "Medium", value: "medium" },
		{ name: "Hard", value: "hard" },
	];

	return (
		<FormSelectInput
			id="difficulty"
			value={selectedDifficulty}
			optionNames={difficultyOptions.map((option) => option.name)}
			optionValues={difficultyOptions.map((option) => option.value)}
			onChange={onChange}
		>
			Difficulty
		</FormSelectInput>
	);
}

export default DifficultySelector;
