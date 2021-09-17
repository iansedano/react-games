import styles from "./Toggle.module.css";

// https://www.w3schools.com/howto/howto_css_switch.asp
function Toggle() {
	return (
		<>
			<label className={styles.switch}>
				<input type="checkbox" />
				<span className={`${styles.slider} ${styles.round}`}></span>
			</label>
		</>
	);
}

export default Toggle;
