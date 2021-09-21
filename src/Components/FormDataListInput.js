function FormDataListInput(props) {
	return (
		<>
			<input list={props.name} value={props.value} />
			<datalist id={props.name}>
				{props.options.map((option) => (
					<option value={option} />
				))}
			</datalist>
		</>
	);
}

export default FormDataListInput;
