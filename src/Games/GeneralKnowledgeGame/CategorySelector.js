<FormSelectInput
	name="category"
	value={formState.category}
	options={categoryOptions.map((option) => option.name)}
	optionValues={categoryOptions.map((option) => option.id)}
	defaultValue="Any"
></FormSelectInput>;

function CategorySelector({ categoryOptions }) {
	return (
		<label htmlFor="categorySelector"></label>
		<select name="" id="">
			<option value=""></option>
		</select>
	)
}

export default CategorySelector;
