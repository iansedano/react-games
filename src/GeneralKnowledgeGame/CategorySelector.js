import BounceLoader from "react-spinners/BounceLoader";

import { STATUS } from "./../Hooks/useFetch";
import FormSelectInput from "./../Components/FormSelectInput";

import useCategoryOptions from "./../Hooks/useCategoryOptions";

function CategorySelector({
	selectedCategory,
	onChange,
	cachedQuestionCategories,
}) {
	const { status, error, categoryOptions } = useCategoryOptions(
		cachedQuestionCategories
	);

	if (status === STATUS.pending) {
		return <BounceLoader />;
	} else if (status === STATUS.resolved && categoryOptions != null) {
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
		return <h3>{error}</h3>;
	} else {
		return null;
	}
}

export default CategorySelector;
