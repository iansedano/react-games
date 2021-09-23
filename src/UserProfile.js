// https://avatars.dicebear.com/docs/http-api
// `https://avatars.dicebear.com/api/bottts/${name}.svg`
import { useContext } from "react";

function UserProfile() {
	return (
		<div className="flex-center user-profile">
			<img alt="user gravatar"></img>
			<h3>User X</h3>
			<ul>
				<li>Times Table - 1</li>
				<li>General Knowledge - 2</li>
				<li>Connect 4 - 5</li>
			</ul>
		</div>
	);
}

export default UserProfile;
