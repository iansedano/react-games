import { useRef } from "react";

import useOpenTriviaApi from "./useOpenTriviaApi";

function useToken() {
	const tokenRef = useRef();

	const haveToken = Boolean(tokenRef.current);

	const { isLoading, error, response } = useOpenTriviaApi(
		"api_token.php?command=request",
		{ abort: haveToken }
	);

	if (!haveToken && !isLoading && !error && response) {
		tokenRef.current = response.token;
	}

	return tokenRef.current;
}

export default useToken;
