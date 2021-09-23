function FormDataListInput({
	options,
	name,
	children,
	value,
	defaultValue,
	onChange,
	realValues,
}) {
	const validator = (e) => {
		if (!options.includes(e.target.value)) {
			e.target.style.backgroundColor = "pink";
		} else e.target.style.backgroundColor = "";
	};

	return (
		<>
			<label htmlFor={name}>{children}</label>
			<input
				list={`${name}List`}
				name={name}
				defaultValue={
					value != null
						? value
						: defaultValue != null
						? defaultValue
						: ""
				}
				onBlur={validator}
				onChange={onChange || null}
			/>
			<datalist id={`${name}List`}>
				{options.map((option, i) => (
					<option
						key={`${name}-${option}`}
						value={option}
						data-value={realValues ? realValues[i] : option}
					/>
				))}
			</datalist>
		</>
	);
}

export default FormDataListInput;
