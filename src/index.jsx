import $ from "jquery";
import React, {useState} from "react";
import {createRoot} from "react-dom/client";

export default function App(){
	return(
		<div>
			<header>
				<h1>Welcome to react</h1>
			</header>
			<p>Hello World !!!</p>
		</div>
	);
}

$(document).ready(function(){
	console.log("Document loaded..");
	const container = $("#root")[0];
	const root = createRoot(container);
	root.render(<App />);
});