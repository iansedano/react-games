function FormTextInput(props) {
	return (
		<>
			<label for={props.identifier}>{props.children}</label>
			<input type="text" name={props.identifier} value={props.value} />
		</>
	);
}

export default FormTextInput;
