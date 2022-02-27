import siteSettingsReducer from "./siteSettingsReducer";
import userInfoReducer from "./userInfoReducer";
import gameInfoReducer from "./gameInfoReducer";

function reducer(state, action) {
	const splitAction = action.type.split("/");
	const actionWithShortenedType = {
		...action,
		type: splitAction.slice(1).join("/"),
	};
	switch (splitAction[0]) {
		case "siteSettings":
			return siteSettingsReducer(state, actionWithShortenedType);
		case "userInfo":
			return userInfoReducer(state, actionWithShortenedType);
		case "gameInfo":
			return gameInfoReducer(state, actionWithShortenedType);
		default:
			throw new Error("invalid root action type");
	}

	switch (splitAction[0]) {
		case "TOGGLE_DARK_MODE":
			return siteSettingsReducer(state, actionWithShortenedType);
		case "CHANGE_PAGE":
			return userInfoReducer(state, actionWithShortenedType);
		case "GK_UPDATE_SETTINGS":
			return gameInfoReducer(state, actionWithShortenedType);
		default:
			throw new Error("invalid root action type");
	}
}

export default reducer;
