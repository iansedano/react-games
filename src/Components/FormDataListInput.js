function FormDataListInput(props) {
	const validator = (e) => {
		if (!props.options.includes(e.target.value)) {
			e.target.style.backgroundColor = "pink";
		} else e.target.style.backgroundColor = "";
	};
	return (
		<>
			<label htmlFor={`${props.name}Choice`}>{props.children}</label>
			<input
				list={props.name}
				name={`${props.name}Choice`}
				defaultValue={props.value === null ? "" : props.value}
				onBlur={validator}
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
