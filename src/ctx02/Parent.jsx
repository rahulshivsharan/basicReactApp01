'use strict';

import React, {useEffect, useState} from "react";
import Child from "./Child.jsx";

export default function Parent(){		
	return (
		<div className="panel panel-default">
			<div className="panel-heading">Parent</div>
			<div className="panel-body">				
				<Child />				
			</div>			
		</div>
	);
}