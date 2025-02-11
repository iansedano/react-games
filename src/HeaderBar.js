// Library imports
import { useContext } from "react";

// Component imports
import Toggle from "./Components/Toggle";

// State imports
import ACTIONS from "./State/ACTIONS";
import { globalContext } from "./App";

function HeaderBar() {
	const { globalState, globalDispatch } = useContext(globalContext);
	return (
		<div className="bg-2 flex-row border-rad full-width">
			<h3>Games</h3>
			<div className="flex-row">
				<p>Toggle Dark Mode</p>
				<Toggle
					onChange={() => {
						globalDispatch({ type: ACTIONS.TOGGLE_DARK_MODE });
					}}
					checked={globalState.darkMode}
				/>
			</div>
		</div>
	);
}

export default HeaderBar;
