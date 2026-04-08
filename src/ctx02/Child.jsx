
'use strict';

import React, {useEffect, useState, useReducer} from "react";
import GrandChild from "./GrandChild.jsx";

export default function Child(){
	return (
		<div className="panel panel-default">
			<div className="panel-heading">Child</div>
			<div className="panel-body">
				<GrandChild /> 	
			</div>			
		</div>
	);
}