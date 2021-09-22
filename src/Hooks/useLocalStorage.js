import { useState } from "react";

function useLocalStorage(name, defaultValue) {
	let stored = window.localStorage.getItem(name);
	if (!stored) {
		window.localStorage.setItem(name, defaultValue);
		stored = defaultValue;
	}
	const [state, setValue] = useState(stored);

	function setState(newValue) {
		window.localStorage.setItem(name, newValue);
		setValue(newValue);
	}

	return [state, setState];
}
export default useLocalStorage;
