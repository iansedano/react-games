import BounceLoader from "react-spinners/BounceLoader";

import useCategoryOptions from "./useCategoryOptions";

import FormSelectInput from "./../../Components/FormSelectInput";

function CategorySelector({
	selectedCategory,
	onChange,
	cachedQuestionCategories,
}) {
	const { isLoading, error, categoryOptions } = useCategoryOptions(
		cachedQuestionCategories
	);

	if (isLoading) {
		return <BounceLoader />;
	} else if (!isLoading && categoryOptions != null) {
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
	} else if (error != null) {
		return <h3>error</h3>;
	}
}

export default CategorySelector;
