import { useContext } from "react";

import { globalState } from "./App";
import Toggle from "./Components/Toggle";

function HeaderBar() {
	const [state, dispatch] = useContext(globalState);
	return (
		<div className="header-bar flex-center full-width">
			<h3>Games</h3>
			<div className="flex-center">
				<p>Toggle Dark Mode</p>
				<Toggle
					onChange={() => {
						dispatch({ type: "siteSettings/toggleDarkMode" });
					}}
					checked={state.siteSettings.darkMode}
				/>
			</div>
		</div>
	);
}

export default HeaderBar;
