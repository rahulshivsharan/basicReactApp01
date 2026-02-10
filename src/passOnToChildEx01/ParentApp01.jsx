'use strict'

import React, {useState, useEffect, Fragment} from "react";
import ChildApp01 from "./ChildApp01.jsx";

export default function ParentApp01(){

	const [UIColor, setUIColor] = useState(undefined);

	const getColor = (color)=>{
		setUIColor(color);
	}

	return (
		<Fragment>
			<div className="jumbotron">
				<div className="well" style={{background : `${UIColor}`}}>
					<h1>Hi Parent</h1>
				</div>
				<ChildApp01 getColor={getColor} />
			</div>			
		</Fragment>
	);
}