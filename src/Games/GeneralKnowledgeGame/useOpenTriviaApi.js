import useFetch from "../../Hooks/useFetch";

const openTriviaResponseCodes = {
	0: "Success",
	1: "No Results",
	2: "Invalid Parameter",
	3: "Token not found",
	4: "Token Empty",
};

function useOpenTriviaApi(endpoint) {
	const url = "https://opentdb.com/api_token.php?" + endpoint;
	const { isLoading, error, response } = useFetch(url);

	if (response.response_code !== 0) {
		return {
			isLoading: isLoading,
			error: openTriviaResponseCodes[response.response_code],
			response: response,
		};
	}

	return { isLoading: isLoading, error: error, response: response };
}

export default useOpenTriviaApi;
