import styles from "./Button.module.css";

function Button({ className, children, src, ...props }) {
	let jsx;

	if (!props.src) {
		jsx = (
			<button
				{...props}
				className={`${styles.btn} ${className}`}
				onClick={props.onClick}
			>
				<h3>{children}</h3>
			</button>
		);
	} else if (props.src) {
		jsx = (
			<button
				{...props}
				className={`${styles.tooltip} ${styles.btn} ${className}`}
			>
				<img className={`${styles.img}`} alt={children} src={src} />
				<span className={`${styles.tooltiptext}`}>
					{props.children}
				</span>
			</button>
		);
	}

	return jsx;
}

export default Button;
