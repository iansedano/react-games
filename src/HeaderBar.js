// Library imports
import { useContext } from "react";

// Component imports
import Toggle from "./Components/Toggle";

// State imports
import ACTIONS from "./State/ACTIONS";
import { globalState } from "./App";

function HeaderBar() {
	const { state, dispatch } = useContext(globalState);
	return (
		<div className="bg-2 flex-row border-rad full-width">
			<h3>Games</h3>
			<div className="flex-row">
				<p>Toggle Dark Mode</p>
				<Toggle
					onChange={() => {
						dispatch({ type: ACTIONS.TOGGLE_DARK_MODE });
					}}
					checked={state.darkMode}
				/>
			</div>
		</div>
	);
}

export default HeaderBar;
