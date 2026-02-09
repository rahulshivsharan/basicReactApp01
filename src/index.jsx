import $ from "jquery";
import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {Link, Routes, Route, BrowserRouter} from "react-router";

import Welcome from "./Welcome.jsx";
import SimpleAddCount from "./CountEx01.jsx";
import AddCountOnEvent from "./CountEx02.jsx";

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
											<Link to="/">Welcome Page</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/add1">Add on click 1</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/add2">Add on click 2</Link>
										</td>
									</tr>
								</table>							
							</div>
						</div>						
					</div>
					<div className="col-md-10">
						<Routes>
							<Route path="/" element={<Welcome />} />
							<Route path="/add1" element={<SimpleAddCount />} />
							<Route path="/add2" element={<AddCountOnEvent />} />							
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