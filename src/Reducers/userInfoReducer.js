function setUserInfo(state, action) {
	return { ...state, user: { ...state.user, ...action.payload } };
}

function userInfoReducer() {}
export default userInfoReducer;
