'use strict'

import React, {useState, useEffect, Fragment} from "react";

export default function ChildApp01({getColor}){
	const [activeColor, setActiveColor] = useState("");

	const handleChange = (e)=>{
		const {value} = e.target;
		setActiveColor(value);
		getColor(value);
	}

	return (
		<Fragment>
			<input type="text" className="form-control" onChange={handleChange} value={activeColor} />
		</Fragment>
	);
}