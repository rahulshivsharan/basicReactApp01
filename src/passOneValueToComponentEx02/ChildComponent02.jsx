'use strict'

import React, {useState, useEffect, Fragment} from "react";

export default function ChildComp02({getUIText}){
	
	const [textVal, setTextVal] = useState("");

	const handleChange = (e)=>{

		/**
		 * the below line is same as 
		 * const value = e.target.value.
		 * The below is known as destructuring in javascript
		 * **/
		const {value} = e.target;

		setTextVal(value);
		if(value !== ""){
			getUIText(value);	
		}else{
			getUIText("Hi Parent");
		}
		
	}

	return (
		<Fragment>
			<div className="well">
				<h4>Child</h4>
				<input type="text" className="form-control" value={textVal} onChange={handleChange} />	
			</div>			
		</Fragment>
	);	
}