'use strict'

import React, {useState, useEffect, Fragment} from "react";

export default function DemoExample03(){
	const [count, setCount] = useState(0)
	const [flag, setFlag] = useState(false);

	/**
	 * The below useEffect block is called once 
	 * on the render of DemoExample03 component
	 * 
	 * the interval is set on which in turn 
	 * sets flag true. 
	 * 
	 **/
	useEffect(()=>{
		console.log("Calling useEffect "+new Date());
		const oneSec = 1000;
		
		setInterval(()=>{
			console.log("Hi "+new Date());
			setFlag(true);
		}, oneSec);
		
		
	},[]);

	/**
	 * the below useEffect block is called when
	 * new value of flag is set, in the block
	 * we set the count to new value.
	 **/
	useEffect(()=>{
		console.log("Calling useEffect for flag "+new Date());
		if(flag === true){
			setCount(count + 1);
			setFlag(false);	
		}
		
	},[flag]);

	return (
		<Fragment>
			<div>
				<h3>{count}</h3>
				&nbsp;
				<button type="button" className="btn btn-primary" onClick={()=>{					
					setCount(0);					
				}}>Reset</button>
			</div>
		</Fragment>
	);
}