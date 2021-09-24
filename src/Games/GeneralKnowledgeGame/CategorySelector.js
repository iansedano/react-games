// import FormSelectInput from "./../../Components/FormSelectInput";

function CategorySelector({ selectedCategory, categoryOptions }) {
	const sortedCategoryOptions = [...categoryOptions].sort((a, b) =>
		a.name < b.name ? -1 : 1
	);

	console.log(selectedCategory, sortedCategoryOptions);

	return (
		<label>
			Category
			<select value={parseInt(selectedCategory)}>
				<option value="">Any</option>
				{sortedCategoryOptions.map((option) => {
					return (
						<option value={option.id} key={String(option.id)}>
							{option.name}
						</option>
					);
				})}
			</select>
		</label>
	);
}

export default CategorySelector;
