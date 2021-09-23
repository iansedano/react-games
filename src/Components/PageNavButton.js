import { useContext } from "react";
import Button from "./Button";

import { globalState } from "./../App";

function PageNavButton({ src, page, children }) {
	const { dispatch } = useContext(globalState);

	return (
		<Button
			src={src}
			onClick={() => {
				dispatch({
					type: `siteSettings/changePage/${page}`,
				});
			}}
		>
			{children}
		</Button>
	);
}

export default PageNavButton;
