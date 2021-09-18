import Toggle from "./Components/Toggle";

function HeaderBar() {
	return (
		<div className="header-bar flex-center full-width">
			<h3>Games</h3>
			<div className="flex-center">
				<p>Toggle Dark Mode</p> <Toggle />
			</div>
		</div>
	);
}

export default HeaderBar;
