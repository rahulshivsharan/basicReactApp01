'use strict';

import React, {useEffect, useState, useReducer} from "react";

export default function GrandChild({ message }){
	return(
		<div className="panel panel-default">
			<div className="panel-heading">Grand child</div>
			<div className="panel-body">
				<p>Message : {message}</p>
			</div>
			
		</div>
	);
}