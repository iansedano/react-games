function FormTextInput(props) {
	return (
		<>
			<label htmlFor={props.name}>{props.children}</label>
			<input type="text" name={props.name} defaultValue={props.value} />
		</>
	);
}

export default FormTextInput;
