'use strict';

import React, {useEffect, useState, useReducer} from "react";
import Child from "./Child.jsx";

export default function Parent(){
	const message = "Hello from Parent";

	return (
		<div className="panel panel-default">
			<div className="panel-heading">Parent</div>
			<div className="panel-body">
				<Child message={message} />	
			</div>			
		</div>
	);
}