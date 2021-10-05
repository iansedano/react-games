import styles from "./Toggle.module.css";

// adapted from https://www.w3schools.com/howto/howto_css_switch.asp
function Toggle({ ...props }) {
	return (
		<div>
			<label className={styles.switch}>
				<input type="checkbox" {...props} />
				<span className={`${styles.slider} ${styles.round}`}></span>
			</label>
		</div>
	);
}

export default Toggle;
