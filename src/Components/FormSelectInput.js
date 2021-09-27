function FormSelectInput({
	name,
	optionNames,
	optionValues,
	value,
	children,
	onChange,
}) {
	return (
		<div className="form-input-container flex-center">
			<label htmlFor={name} className="form-input-label">
				{children}
			</label>
			<select
				id={name}
				value={value != null ? value : null}
				onChange={onChange}
				className="form-input"
			>
				{optionNames.map((optionName, i) => (
					<option
						key={`${name}-${optionName}`}
						value={optionValues ? optionValues[i] : optionName}
						label={optionName}
					/>
				))}
			</select>
		</div>
	);
}

export default FormSelectInput;
