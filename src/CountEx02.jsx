'use strict'
import React, {Fragment ,useState, useEffect} from "react";

export default function AddCountOnEvent(){
	const [count, setCount] = useState(0);
	const [timeTick, setTimeTick] = useState(undefined);

	useEffect(()=>{
		if(timeTick === undefined){
			setCount(0);
		}else{
			setCount(count + 1);
		}
	},[timeTick])

	return(
		<Fragment>
			<div>
				<button type="button" className="btn btn-large btn-primary" onClick={()=>{
					setTimeTick(new Date());
				}}>Click to Increase</button>
					&nbsp;
				<button type="button" className="btn btn-large" onClick={()=>{
					setTimeTick(undefined);
				}}>Reset</button>
				<br/>
				<h1>{count}</h1>
			</div>
		</Fragment>
	);
}