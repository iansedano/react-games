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

	switch (status) {
		case STATUS.idle:
		case STATUS.fetching:
			return <BounceLoader />;
		case STATUS.resolved:
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
		case STATUS.rejected:
			return <Error>{error}</Error>;
		default:
			return <Error>Something went wrong with CategorySelector</Error>;
	}
}

export default CategorySelector;
