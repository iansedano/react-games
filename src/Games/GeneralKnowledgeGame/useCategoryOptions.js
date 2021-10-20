import { useState } from "react";
import useOpenTriviaApi from "./useOpenTriviaApi";

function useCategoryOptions(cachedQuestionCategories) {
	const [categoryOptions, setCategoryOptions] = useState([
		"awaiting response from server",
	]);

	const { isLoading, error, response } = useOpenTriviaApi(
		"api_category.php",
		{ abort: !cachedQuestionCategories.current }
	);
	console.log(1);
	// if (!cachedQuestionCategories.current) {

	// 	const sortedCategoryOptions = [...response.trivia_categories].sort(
	// 		(a, b) => (a.name < b.name ? -1 : 1)
	// 	);

	// 	sortedCategoryOptions.unshift({ id: "", name: "Any" });

	// 	const output = sortedCategoryOptions.map((option) => {
	// 		return { name: option.name, value: option.id };
	// 	});

	// 	cachedQuestionCategories.current = output;
	// 	setCategoryOptions(output);
	// } else {
	// 	setCategoryOptions(cachedQuestionCategories.current);
	// }

	return categoryOptions;
}

export default useCategoryOptions;
