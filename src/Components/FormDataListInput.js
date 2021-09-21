function FormDataListInput(props) {
	return (
		<>
			<input
				list={props.name}
				defaultValue={props.value === null ? "" : props.value}
			/>
			<datalist id={props.name}>
				{props.options.map((option) => (
					<option key={`${props.name}-${option}`} value={option} />
				))}
			</datalist>
		</>
	);
}

export default FormDataListInput;
