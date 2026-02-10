'use strict'

import React, {useState, useEffect, Fragment} from "react";

export default function DemoExample04(){
	const [count, setCount] = useState(0)
	

	/**
	 * The below useEffect is with empty [],
	 * which means the useEffect will run only once 
	 * on the render of component 'DemoExample04'.
	 * Once the useEffect run's, it starts 'setInterval',
	 * which returns intervalId, which is used
	 * latter on to clear interval in the exit function.
	 * 
	 * */
	useEffect(()=>{
		console.log("Calling useEffect "+new Date());
		const oneSec = 1000;
		
		/**
		 * The setInterval functional call every time 
		 * after a duration, whenever it executes
		 * internally 'setCount' is called which call's
		 * a callback to increment value by 1.
		 * */
		const intervalId = setInterval(()=>{
				console.log("Hi "+new Date());
				setCount((prevCount)=>{
					return (prevCount + 1);
				});
		}, oneSec);
		
		return ()=>{
			console.log("clearing interval having id "+intervalId);
			clearInterval(intervalId);
		}
		
	},[]);
	

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