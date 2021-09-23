function FormTextInput({ name, children, value }) {
	return (
		<>
			<label htmlFor={name}>{children}</label>
			<input type="text" id={name} defaultValue={value} />
		</>
	);
}

export default FormTextInput;
