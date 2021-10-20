import { useState } from "react";
import useOpenTriviaApi from "./useOpenTriviaApi";

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

function useCategoryOptions(cachedQuestionCategories) {
	const [categoryOptions, setCategoryOptions] = useState([
		{ name: "awaiting response from server" },
	]);

	const { isLoading, error, response } = useOpenTriviaApi(
		"api_category.php",
		{ abort: cachedQuestionCategories.current !== undefined }
	);

	if (response && cachedQuestionCategories.current === undefined) {
		const output = prepareCategoryList(response);
		cachedQuestionCategories.current = output;
		setCategoryOptions(output);
	} else if (
		cachedQuestionCategories.current !== undefined &&
		cachedQuestionCategories.current !== categoryOptions
	) {
		setCategoryOptions(cachedQuestionCategories.current);
	}

	return {
		isLoading: isLoading,
		error: error,
		categoryOptions: categoryOptions,
	};
}

export default useCategoryOptions;
