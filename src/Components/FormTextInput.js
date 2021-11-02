
// they way we are using children here might be a bit confusing.
// We should have a more specific prop like: "labelText"
// Otherwise, we might get random components as the children of the label
function FormTextInput({ name, children, value, onChange }) {
	return (
		<div className="form-input-container flex-center">
			<label htmlFor={name} className="form-input-label">
				{children}
			</label>
			<input
				type="text"
				id={name}
				value={value}
				onChange={onChange}
				className="form-input"
			/>
		</div>
	);
}

export default FormTextInput;
