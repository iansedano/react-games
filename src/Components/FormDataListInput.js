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
			// while this work is a very "non-react" way of doing things. 
			// Normally, you want "your state to drive the UI" instead of
			// directly modifying DOM nodes. 
			// suggestion: create a piece of state called "hasValidationError"
			// use that state to toggle a CSS class in the input. className={hasValidationError ? "invalidInput" : "validInput"}
			// this is particularly useful when you have to toggle more than one style for validation errors[like outlines, borders...]
			e.target.style.backgroundColor = "pink";
		} else e.target.style.backgroundColor = "";
	};

	return (
		<>
			{/* create a prop for the label text */}
			<label htmlFor={name}>{children}</label>
			<input
				list={`${name}List`}
				name={name}
				// nested ternaries are a big re-flag in terms of readability; i recommend that you avoid them
				// however, some people do like them(it's rare) 
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
