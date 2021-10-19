import { useState, useEffect } from "react";

function useFetch(url) {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	// What is a real use case for isLoading? It seems redundant to me.
	const [isLoading, setIsLoading] = useState(false)
	
	useEffect(() => {
		(async () => {
			setIsLoading(true)
			try {
				const resp = await fetch(url);
				if (resp.ok) {
					setIsLoading(false)
					// TODO - some way to accept different data types?
					const json = await resp.json();
					setResponse(json)
				} else {
					setIsLoading(false)
					setError("Something went with the request.");
				}
			} catch (e) {
				setIsLoading(false)
				if (!window.navigator.onLine) {
					setError("Error message: " + e.message + " (OFFLINE)");
				} else {
					setError("Error message: " + e.message);
				}
			}
		})();
		// https://www.digitalocean.com/community/tutorials/creating-a-custom-usefetch-react-hook
		// Why is "using async in useEffect frowned upon"?
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {"isLoading": isLoading, "error": error, "response": response}
}

export default useFetch;