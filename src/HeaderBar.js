import { useContext } from "react";

import { darkModeContext } from "./App";
import Toggle from "./Components/Toggle";

function HeaderBar() {
	const setDarkMode = useContext(darkModeContext);
	return (
		<div className="header-bar flex-center full-width">
			<h3>Games</h3>
			<div className="flex-center">
				<p>Toggle Dark Mode</p>
				<Toggle
					onChange={() => {
						console.log("click");
						setDarkMode((d) => !d);
					}}
				/>
			</div>
		</div>
	);
}

export default HeaderBar;
