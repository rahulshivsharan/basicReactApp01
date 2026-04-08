'use strict';

import React, {useEffect, useState, createContext} from "react";
import Child from "./Child.jsx";

export default function Parent(){
	const message = "Hello from Parent";
	const UserContext = createContext();
	return (
		<div className="panel panel-default">
			<div className="panel-heading">Parent</div>
			<div className="panel-body">
				<UserContext.Provider value={message}>
					<Child />
				</UserContext.Provider>				
			</div>			
		</div>
	);
}