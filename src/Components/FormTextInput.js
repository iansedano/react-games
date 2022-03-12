function FormTextInput({ id, children, value, onChange }) {
	return (
		<div className="form-input-container flex-center">
			<label htmlFor={id} className="form-input-label">
				{children}
			</label>
			<input
				type="text"
				id={id}
				value={value}
				onChange={onChange}
				className="form-input"
			/>
		</div>
	);
}

export default FormTextInput;
