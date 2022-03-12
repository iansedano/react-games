function FormSelectInput({
	id,
	optionNames,
	optionValues,
	value,
	children,
	onChange,
}) {
	return (
		<div className="form-input-container flex-center">
			<label htmlFor={id} className="form-input-label">
				{children}
			</label>
			<select
				id={id}
				value={value || ""}
				onChange={onChange}
				className="form-input"
			>
				{optionNames.map((optionName, i) => (
					<option
						key={`${id}-${optionName}`}
						value={optionValues ? optionValues[i] : optionName}
						label={optionName}
					/>
				))}
			</select>
		</div>
	);
}

export default FormSelectInput;
