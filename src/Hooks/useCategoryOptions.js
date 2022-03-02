// Hook imports
import { STATUS, DEFAULT_FETCH_OPTIONS } from "./useFetch";
import useOpenTriviaApi from "./useOpenTriviaApi";

function useCategoryOptions(cachedQuestionCategories) {
	let requestOptions = { ...DEFAULT_FETCH_OPTIONS };

	// If there are cached questions abort request
	if (cachedQuestionCategories.current) {
		requestOptions.abort = true;
		requestOptions.cacheValue = cachedQuestionCategories.current;
	}

	const { status, error, response } = useOpenTriviaApi(
		"api_category.php",
		requestOptions
	);

	if (status === STATUS.resolved && requestOptions.abort === false) {
		const output = prepareCategoryList(response);
		cachedQuestionCategories.current = output;
	}

	return { status, error };
}

export default useCategoryOptions;

function prepareCategoryList(response) {
	const sortedCategoryOptions = [...response.trivia_categories].sort((a, b) =>
		a.name < b.name ? -1 : 1
	);

	// "Any" category should go first because
	// the default option should be at the top,
	// while the rest should be alphabetical order.
	sortedCategoryOptions.unshift({ id: "", name: "Any" });

	return sortedCategoryOptions.map((option) => {
		return { name: option.name, value: option.id };
	});
}
