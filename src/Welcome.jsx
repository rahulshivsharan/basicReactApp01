'use strict'
import React, {useState, useEffect} from "react";

export default function Welcome(){
	const [welcomeMsg, setWelcomeMsg] = useState("Welcome to my react application");
	console.log("Rendering welcome");
	return(
		<div>
			<header>
				<h1>Welcome to react</h1>
			</header>
			<h2>{welcomeMsg}</h2>
		</div>
	);
}