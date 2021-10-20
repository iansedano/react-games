import { useState, useEffect } from "react";

function useFetch(url, options = {}) {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	// What is a real use case for isLoading? It seems redundant to me.
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (options.abort !== true) {
			(async () => {
				setIsLoading(true);
				try {
					const response = await fetch(url);
					if (response.ok) {
						setIsLoading(false);
						// TODO - some way to accept different data types?
						const json = await response.json();
						setResponse(json);
					} else {
						setIsLoading(false);
						setError("Something went with the request.");
					}
				} catch (e) {
					setIsLoading(false);
					if (!window.navigator.onLine) {
						setError(`Error message: ${e.message} (OFFLINE)`);
					} else {
						// TODO - implement status code
						setError(`Error message: ${e.message}`);
					}
				}
			})();
		}
	}, [url, options.abort]);

	return { isLoading: isLoading, error: error, response: response };
}

export default useFetch;
