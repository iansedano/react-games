import styles from "./Button.module.css";


// I see what are we trying to do but this is a very confusing API. 
// Passing src as a prop results in a vastly different markup but there's no
// clear indication that src is such a game changer. 

// Suggestions: a) just create two different components with names that convey how different they are. Button vs ButtonWithImage
// b) create a "variant" prop. variant = 'regular' | 'image'. Is it redundant? Yes but it makes intention clear and scales better than src
// For example we could have a third variant called "buttonLink"
// c) compose your components. something like: 


// function Button({ className, children, ...props }) {
// 	return(
// 		<button
// 			{...props}
// 			className={`${styles.btn} ${className}`}
// 			onClick={props.onClick}
// 			>
// 				{children}
// 			</button>
// 		)
// } 

// <Button><h3>Hellooo</h3></Button>
// <Button>
// 	<img className={`${styles.img}`} alt={children} src={src} />
// 	<span className={`${styles.tooltiptext}`}>
// 		{props.children}
// 	</span>
// </Button>


function Button({ className, children, src, ...props }) {
	let jsx;

	// props.src will always be false since we ar destructuring it in ==> { className, children, src, ...props }
	// let's replace it with just src
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
