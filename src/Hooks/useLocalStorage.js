import { useState, useEffect } from "react";

function getStoredValue(key, defaultValue = null) {
	const stored = localStorage.getItem(key);
	const value = JSON.parse(stored);
	return value || defaultValue;
}

function useLocalStorage(key, defaultValue) {
	const [state, setState] = useState(getStoredValue(key, defaultValue));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
}

export default useLocalStorage;
