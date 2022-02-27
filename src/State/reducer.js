import siteSettingsReducer from "./siteSettingsReducer";
import userInfoReducer from "./userInfoReducer";
import gameInfoReducer from "./gameInfoReducer";

import ACTIONS from "./ACTIONS";
import PAGES from "./PAGES";

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

	switch (action.type) {
		case ACTIONS.TOGGLE_DARK_MODE:
			return { ...state, darkMode: !state.darkMode };
		case ACTIONS.CHANGE_PAGE:
			return { ...state, page: PAGES[action.payload] };
		case ACTIONS.QUIZ_UPDATE_SETTINGS:
			return {};
		case ACTIONS.QUIZ_ADD_ANSWERS:
		case ACTIONS.QUIZ_RESET_ANSWERS:
		case ACTIONS.QUIZ_INCREMENT_TIMES_PLAYED:

		default:
			throw new Error("invalid root action type");
	}
}

export default reducer;
