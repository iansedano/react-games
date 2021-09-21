function FormTextInput(props) {
	return (
		<>
			<label for={props.name}>{props.children}</label>
			<input type="text" name={props.name} value={props.value} />
		</>
	);
}

export default FormTextInput;
