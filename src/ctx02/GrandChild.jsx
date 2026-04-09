'use strict';

import React, {useEffect, useState, useContext} from "react";
import {UserContext} from "../stores/UserContext.jsx";

export default function GrandChild(){
	const message = useContext(UserContext);
	return(
		<div className="panel panel-default">
			<div className="panel-heading">Grand child</div>
			<div className="panel-body">
				<p>Message : {message}</p>
			</div>			
		</div>
	);
}