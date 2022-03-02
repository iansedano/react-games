// Library imports
import { useContext } from "react";

// Component imports
import Button from "./Button";

// State imports
import { globalState } from "./../App";
import ACTIONS from "./../State/ACTIONS";
import PAGES from "./../State/PAGES";

function PageNavButton({ page, children }) {
	const { dispatch } = useContext(globalState);

	return (
		<Button
			onClick={() => {
				dispatch({
					type: ACTIONS.CHANGE_PAGE,
					payload: PAGES[page],
				});
			}}
		>
			{children}
		</Button>
	);
}

export default PageNavButton;
