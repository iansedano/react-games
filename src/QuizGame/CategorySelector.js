// Library imports
import BounceLoader from "react-spinners/BounceLoader";

// Component imports
import Error from "./../Components/Error";
import FormSelectInput from "../Components/FormSelectInput";

// Hook imports
import { STATUS } from "../Hooks/useFetch";
import useCategoryOptions from "../Hooks/useCategoryOptions";

function CategorySelector({ selectedCategory, onChange, questionCategoryRef }) {
	const { status, error } = useCategoryOptions(questionCategoryRef);

	switch (status) {
		case STATUS.idle:
		case STATUS.fetching:
			return <BounceLoader />;
		case STATUS.resolved:
			return (
				<FormSelectInput
					id="category"
					value={selectedCategory}
					optionNames={questionCategoryRef.current.map(
						(option) => option.name
					)}
					optionValues={questionCategoryRef.current.map(
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
