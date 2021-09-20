import styles from "./Button.module.css";

function Button(props) {
	let jsx;

	if (!props.src) {
		jsx = (
			<button className={styles.btn} onClick={props.onClick}>
				<h3>{props.children}</h3>
			</button>
		);
	} else if (props.src) {
		jsx = (
			<div className={styles.tooltip} onClick={props.onClick}>
				<img
					className={`${styles.img}`}
					alt={props.children}
					src={props.src}
				/>
				<span className={`${styles.tooltiptext}`}>
					{props.children}
				</span>
			</div>
		);
	}

	return jsx;
}

export default Button;
