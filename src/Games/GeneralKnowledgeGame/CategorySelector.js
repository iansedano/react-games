import FormSelectInput from "./../../Components/FormSelectInput";

import useCategoryOptions from "./useCategoryOptions";

function CategorySelector({ selectedCategory, onChange }) {
	const categoryOptions = useCategoryOptions();

	return (
		<FormSelectInput
			name="category"
			value={selectedCategory}
			optionNames={categoryOptions.map((option) => option.name)}
			optionValues={categoryOptions.map((option) => option.value)}
			onChange={onChange}
		>
			Category
		</FormSelectInput>
	);
}

export default CategorySelector;
