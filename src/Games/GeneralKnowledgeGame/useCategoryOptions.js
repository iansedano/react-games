import { useState, useEffect } from "react";

function useCategoryOptions() {
	const [categoryOptions, setCategoryOptions] = useState([
		"awaiting response from server",
	]);

	useEffect(() => {
		const req = async () => {
			const resp = await fetch("https://opentdb.com/api_category.php");
			const json = await resp.json();
			const sortedCategoryOptions = [...json.trivia_categories].sort(
				(a, b) => (a.name < b.name ? -1 : 1)
			);

			sortedCategoryOptions.unshift({ id: "", name: "Any" });

			setCategoryOptions(
				sortedCategoryOptions.map((option) => {
					return { name: option.name, value: option.id };
				})
			);
		};
		req();
	}, []);

	return categoryOptions;
}

export default useCategoryOptions;
