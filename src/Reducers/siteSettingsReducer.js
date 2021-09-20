function toggleDarkMode(state) {
	return {
		...state,
		siteSettings: {
			...state.siteSettings,
			darkMode: !state.siteSettings.darkMode,
		},
	};
}

function changePage(state, action) {
	const validPages = [
		"home",
		"timesTableGame",
		"connectFour",
		"generalKnowledgeGame",
	];

	if (!validPages.includes(action.type)) return new Error();

	return {
		...state,
		siteSettings: { ...state.siteSettings, page: action.type },
	};
}

function siteSettingsReducer(state, action) {
	const splitAction = action.type.split("/");
	console.log({ splitAction });
	const actionWithShortenedType = {
		...action,
		type: splitAction.slice(1).join("/"),
	};
	switch (splitAction[0]) {
		case "toggleDarkMode":
			return toggleDarkMode(state);
		case "changePage":
			return changePage(state, actionWithShortenedType);
		default:
			throw new Error("invalid site settings action type");
	}
}

export default siteSettingsReducer;
