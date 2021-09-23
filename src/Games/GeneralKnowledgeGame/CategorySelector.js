import FormSelectInput from "./../../Components/FormSelectInput";

function CategorySelector({ selectedCategory, categoryOptions }) {
	categoryOptions.sort((a, b) => (a.name < b.name ? -1 : 1));

	const categoryNames = categoryOptions.map((option) => option.name);
	const categoryIds = categoryOptions.map((option) => option.id);

	return (
		<FormSelectInput
			name="category"
			value={selectedCategory}
			optionNames={categoryNames}
			optionValues={categoryIds}
			defaultValue="Any"
		>
			Category
		</FormSelectInput>
	);
}

export default CategorySelector;
