import $ from "jquery";
import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {Link, Routes, Route, BrowserRouter} from "react-router";

import Welcome from "./Welcome.jsx";
import SimpleAddCount from "./CountEx01.jsx";
import AddCountOnEvent from "./CountEx02.jsx";
import DemoExample03 from "./Example03.jsx";
import DemoExample04 from "./Example04.jsx";
import ParentApp01 from "./passOnToChildEx01/ParentApp01.jsx";
import ParentComp02 from "./passOneValueToComponentEx02/ParentComponent02.jsx";
import ClickComponent01 from "./reducer01/ClickComponent01.jsx";
import PlayerScore from "./useReducer02/PlayerScore.jsx";
import MovieListOne from "./hoc01/MovieList.jsx";
import MovieSearchTwo from "./customHooks01/MovieSearch.jsx";
import ParentApp02 from "./ctx01/Parent.jsx";
import {UserContext} from "./stores/UserContext.jsx";
import ParentApp03 from "./ctx02/Parent.jsx";

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
									<tr>										
										<td>
											<Link to="/timerone">Click for timer 1</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/timertwo">Click for timer 2</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/parent01">Click Parent App 01</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/parent02">Click Parent App 02</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/reducerapp01">Reducer App 01</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/reducerapp02">Reducer App 02</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/hoc01">Load Movies - HOC 1</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/customhooks01">Search Movies - Custom Hook 1</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/drill01">Prop Drilling 01</Link>
										</td>
									</tr>
									<tr>										
										<td>
											<Link to="/drill02">Context API No Prop Drilling</Link>
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
							<Route path="/timerone" element={<DemoExample03 />} />
							<Route path="/timertwo" element={<DemoExample04 />} />
							<Route path="/parent01" element={<ParentApp01 />} />
							<Route path="/parent02" element={<ParentComp02 />} />
							<Route path="/reducerapp01" element={<ClickComponent01 />} />
							<Route path="/reducerapp02" element={<PlayerScore />} />
							<Route path="/hoc01" element={<MovieListOne />} />
							<Route path="/customhooks01" element={<MovieSearchTwo />} />
							<Route path="/drill01" element={<ParentApp02 />} />
							<Route path="/drill02" element={
								<UserContext.Provider value={"Hello from UserContext"}>									
									<ParentApp03 />	
								</UserContext.Provider>								
							} />
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