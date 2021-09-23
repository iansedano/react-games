function FormSelectInput({
	name,
	optionNames,
	optionValues,
	value,
	defaultValue,
	children,
	onChange,
}) {
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
					>
						{optionName}
					</option>
				))}
			</select>
		</>
	);
}

export default FormSelectInput;
