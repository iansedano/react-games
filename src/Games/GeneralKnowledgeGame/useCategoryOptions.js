import { useState, useEffect } from "react";

function useCategoryOptions(cachedQuestionCategories) {
	const [categoryOptions, setCategoryOptions] = useState([
		"awaiting response from server",
	]);

	useEffect(() => {
		console.log(cachedQuestionCategories);
		if (!cachedQuestionCategories.current) {
			console.log("request");
			const req = async () => {
				const resp = await fetch(
					"https://opentdb.com/api_category.php"
				);
				const json = await resp.json();
				const sortedCategoryOptions = [...json.trivia_categories].sort(
					(a, b) => (a.name < b.name ? -1 : 1)
				);

				sortedCategoryOptions.unshift({ id: "", name: "Any" });

				const output = sortedCategoryOptions.map((option) => {
					return { name: option.name, value: option.id };
				});

				cachedQuestionCategories.current = output;
				setCategoryOptions(output);
			};
			req();
		} else {
			setCategoryOptions(cachedQuestionCategories.current);
		}
	}, [cachedQuestionCategories]);

	return categoryOptions;
}

export default useCategoryOptions;
