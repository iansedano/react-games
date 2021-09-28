import styles from "./Button.module.css";

function Button(props) {
	let jsx;

	if (!props.src) {
		jsx = (
			<button
				{...props}
				className={`${styles.btn} ${props.className}`}
				onClick={props.onClick}
			>
				<h3>{props.children}</h3>
			</button>
		);
	} else if (props.src) {
		jsx = (
			<button
				{...props}
				className={`${styles.tooltip} ${styles.btn} ${props.className}`}
				onClick={props.onClick}
			>
				<img
					className={`${styles.img}`}
					alt={props.children}
					src={props.src}
				/>
				<span className={`${styles.tooltiptext}`}>
					{props.children}
				</span>
			</button>
		);
	}

	return jsx;
}

export default Button;
