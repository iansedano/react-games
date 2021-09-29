import { useEffect, useRef } from "react";

function useToken() {
	const token = useRef();

	useEffect(() => {
		if (!token.current) {
			(async () => {
				const resp = await fetch(
					"https://opentdb.com/api_token.php?command=request"
				);
				if (resp.ok) {
					const json = await resp.json();
					switch (json.response_code) {
						case 0:
							token.current = json.token;
							break;
						case 1:
							throw new Error("No Results");
						case 2:
							throw new Error("Invalid Parameter");
						case 3:
							throw new Error("Token not found");
						case 4:
							throw new Error("Token Empty");
						default:
							throw new Error(
								"something went wrong with the request for a token"
							);
					}
				} else {
					throw new Error(
						"something went wrong with the request for a token"
					);
				}
			})();
		}
	});

	return token.current;
}

export default useToken;
