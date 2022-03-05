// Hook imports
import { STATUS, DEFAULT_FETCH_OPTIONS } from "./useFetch";
import useOpenTriviaApi from "./useOpenTriviaApi";

/**
 * Fetches the category options from the Open Trivia API
 * Stores the result in the ref questionCategoryRef
 * If the ref already has a value, request is aborted.
 */
function useCategoryOptions(questionCategoryRef) {
	let requestOptions = { ...DEFAULT_FETCH_OPTIONS };

	// If there are cached questions abort request
	if (questionCategoryRef.current) {
		requestOptions.abort = true;
		requestOptions.cacheValue = questionCategoryRef.current;
	}

	const { status, error, response } = useOpenTriviaApi(
		"api_category.php",
		requestOptions
	);

	if (status === STATUS.resolved && requestOptions.abort === false) {
		const output = prepareCategoryList(response);
		questionCategoryRef.current = output;
	}

	return { status, error };
}

export default useCategoryOptions;

/**
 * Sorts category list and places an "Any" category first
 * Returns a list of objects for a FormSelectInput component
 */
function prepareCategoryList(response) {
	const sortedCategoryOptions = [...response.trivia_categories].sort((a, b) =>
		a.name < b.name ? -1 : 1
	);
	sortedCategoryOptions.unshift({ id: "", name: "Any" });

	return sortedCategoryOptions.map((option) => {
		return { name: option.name, value: option.id };
	});
}
