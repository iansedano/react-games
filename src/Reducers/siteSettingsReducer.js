function toggleDarkMode(state) {
	return {
		...state,
		siteSettings: { ...state.siteSettings, darkMode: !state.darkMode },
	};
}

function siteSettingsReducer(state, action) {
	case action.type
}
export default siteSettingsReducer;


function siteSettingsReducer(state, action) {
	const splitAction = action.type.split("/");
	const actionWithShortenedType = {
		...action,
		type: splitAction.slice(1).join("/"),
	};
	switch (splitAction[0]) {
		case "toggleDarkMode":
			return siteSettingsReducer(state, actionWithShortenedType);
		case "userInfo":
			return userInfoReducer(state, actionWithShortenedType);
		case "gameInfo":
			return gameInfoReducer(state, actionWithShortenedType);
		default:
			throw new Error();
	}
}