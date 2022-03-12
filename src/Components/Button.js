import styles from "./Button.module.css";

function Button({ children, onClick, ...props }) {
	return (
		<button className={`${styles.btn}`} onClick={onClick} {...props}>
			{children}
		</button>
	);
}

export default Button;
