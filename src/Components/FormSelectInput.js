function FormSelectInput({
	name,
	optionNames,
	optionValues,
	value,
	defaultValue,
	children,
	onChange,
}) {
	console.log(
		(() => {
			if (value != null) return value;
			if (defaultValue != null) return defaultValue;
			return null;
		})()
	);
	return (
		<>
			<label htmlFor={name}>{children}</label>
			<select
				id={name}
				defaultValue={(() => {
					if (value != null) return value;
					if (defaultValue != null) return defaultValue;
					return null;
				})()}
				onChange={onChange || null}
			>
				{defaultValue ? (
					<option value={defaultValue}>{defaultValue}</option>
				) : null}
				{optionNames.map((optionName, i) => (
					<option
						key={`${name}-${optionName}`}
						value={optionValues ? optionValues[i] : optionName}
						label={optionName}
					/>
				))}
			</select>
		</>
	);
}

export default FormSelectInput;
