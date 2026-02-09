'use strict'
import React, {useState, useEffect} from "react";

export default function SimpleAddCount(){

	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<button type="button" className="btn btn-primary" onClick={()=>{
					setCount(count + 1);
				}}>Click to Increase</button>
				<h1>{count}</h1>
			</div>
		</>
	);
}