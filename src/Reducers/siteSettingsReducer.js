function toggleDarkMode(state) {
	return {
		...state,
		siteSettings: {
			...state.siteSettings,
			darkMode: !state.siteSettings.darkMode,
		},
	};
}

function siteSettingsReducer(state, action) {
	switch (action.type) {
		case "toggleDarkMode":
			return toggleDarkMode(state);
		default:
			throw new Error();
	}
}

export default siteSettingsReducer;
