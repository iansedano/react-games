// function setUserInfo(state, action) {
// 	return { ...state, user: { ...state.user, ...action.payload } };
// }

// function userInfoReducer() {}
// export default userInfoReducer;

// function reducer(state, action) {
// 	const splitAction = action.type.split("/");
// 	const actionWithShortenedType = {
// 		...action,
// 		type: splitAction.slice(1).join("/"),
// 	};
// 	switch (splitAction[0]) {
// 		case "siteSettings":
// 			return siteSettingsReducer(state, actionWithShortenedType);
// 		case "userInfo":
// 			return userInfoReducer(state, actionWithShortenedType);
// 		case "gameInfo":
// 			return gameInfoReducer(state, actionWithShortenedType);
// 		default:
// 			throw new Error();
// 	}
// }
