function FormSelectInput({
	options,
	optionValues,
	name,
	children,
	value,
	defaultValue,
	onChange,
}) {
	return (
		<>
			<label htmlFor={name}>{children}</label>
			<select
				id={`${name}`}
				defaultValue={
					value != null
						? value
						: defaultValue != null
						? defaultValue
						: null
				}
				onChange={onChange || null}
			>
				{defaultValue ? (
					<option value={defaultValue}>{defaultValue}</option>
				) : null}
				{options.map((option, i) => (
					<option
						key={`${name}-${option}`}
						value={optionValues ? optionValues[i] : option}
					>
						{option}
					</option>
				))}
			</select>
		</>
	);
}

export default FormSelectInput;
