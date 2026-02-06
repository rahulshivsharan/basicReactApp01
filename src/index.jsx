import $ from "jquery";
import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {Link, Routes, Route, BrowserRouter} from "react-router";

import Welcome from "./Welcome.jsx";

export default function App(){
	console.log("App rendering");
	return(
		<BrowserRouter>
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<div className="row">
							<div className="col-md-12">
								<table className="table table-bordered">
									<tr>
										<td>
											<Link to="/tutorialone">Tutorial One</Link>
										</td>
									</tr>
								</table>								
							</div>
						</div>						
					</div>
					<div className="col-md-10">
						<Routes>
							<Route path="/" element={<Welcome />} />							
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

$(document).ready(function(){
	console.log("Document loaded..");
	const container = $("#root")[0];
	const root = createRoot(container);
	root.render(<App />);
});