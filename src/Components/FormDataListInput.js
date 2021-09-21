function FormDataListInput(props) {
	return (
		<>
			<input list={props.id} id={props.id} value={props.value} />
			<datalist id={props.id}>
				{props.options.map((option) => (
					<option value={option} />
				))}
			</datalist>
		</>
	);
}

export default FormDataListInput;
