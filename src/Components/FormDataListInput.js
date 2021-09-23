function FormDataListInput({
	options,
	name,
	children,
	value,
	defaultValue,
	onChange,
}) {
	const validator = (e) => {
		if (![...options, defaultValue, ""].includes(e.target.value)) {
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
				{defaultValue ? <option value={defaultValue} /> : null}
				{options.map((option, i) => (
					<option key={`${name}-${option}`} value={option} />
				))}
			</datalist>
		</>
	);
}

export default FormDataListInput;
