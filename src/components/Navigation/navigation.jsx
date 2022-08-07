import React from "react";

function Navigation({ onRouteChange, isSignedIn }) {
	return isSignedIn ? (
		<nav className="NavBar">
			<p
				onClick={() => onRouteChange("signOut")}
				className="f3 link dim black underline pa3 pointer"
			>
				Sign Out
			</p>
		</nav>
	) : (
		<nav className="NavBar">
			<p
				onClick={() => onRouteChange("signIn")}
				className="f3 link dim black underline pa3 pointer"
			>
				Sign In
			</p>
			<p
				onClick={() => onRouteChange("register")}
				className="f3 link dim black underline pa3 pointer"
			>
				Register
			</p>
		</nav>
	);
}

export default Navigation;
