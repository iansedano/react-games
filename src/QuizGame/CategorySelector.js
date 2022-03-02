// Library imports
import BounceLoader from "react-spinners/BounceLoader";

// Component imports
import Error from "./../Components/Error";
import FormSelectInput from "../Components/FormSelectInput";

// Hook imports
import { STATUS } from "../Hooks/useFetch";
import useCategoryOptions from "../Hooks/useCategoryOptions";

function CategorySelector({
	selectedCategory,
	onChange,
	cachedQuestionCategories,
}) {
	const { status, error } = useCategoryOptions(cachedQuestionCategories);

	if (status === STATUS.fetching || status === STATUS.idle) {
		return <BounceLoader />;
	} else if (status === STATUS.resolved) {
		return (
			<FormSelectInput
				name="category"
				value={selectedCategory}
				optionNames={cachedQuestionCategories.current.map(
					(option) => option.name
				)}
				optionValues={cachedQuestionCategories.current.map(
					(option) => option.value
				)}
				onChange={onChange}
			>
				Category
			</FormSelectInput>
		);
	} else if (status === STATUS.rejected) {
		return <Error>{error}</Error>;
	} else {
		return null;
	}
}

export default CategorySelector;
