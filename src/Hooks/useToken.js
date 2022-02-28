import { useRef } from "react";

import { STATUS } from "./useFetch";

import useOpenTriviaApi from "./useOpenTriviaApi";

function useToken() {
	const tokenRef = useRef();

	const haveToken = Boolean(tokenRef.current);

	const { status, response } = useOpenTriviaApi(
		"api_token.php?command=request",
		{ abort: haveToken }
	);

	if (!haveToken && status === STATUS.resolved) {
		tokenRef.current = response.token;
	}

	return tokenRef.current;
}

export default useToken;
