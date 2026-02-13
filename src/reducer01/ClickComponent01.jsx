'use strict'

import React, {Fragment ,useReducer} from "react";

export default function ClickComponent01(){

	/**
	 * Initial state object
	 * **/
	const initialCountObj = {
		"count" : 0
	}

	/**
	 * Reducer function, this reducer function
	 * accepts state and action. The reducer function
	 * is responsible to generate new state on the basis of 
	 * action. Whenever action is of type 'ADD_UP' and new
	 * state is generated with increased 'count' value.
	 * Whenenver action type is 'RESET' a new state with
	 * 'count' value as 0 is generated.
	 * */
	const reducerFn = (stateObj, action) =>{
		if(action.type == "ADD_UP"){
			return {
				...stateObj,
				"count" : action["current_val"] + 1
			}
		}

		if(action.type == "RESET"){
			return {
				...stateObj,
				"count" : 0
			}
		}

		return stateObj;
	}

	const [countObj, dispatch] = useReducer(reducerFn, initialCountObj)

	return (
		<Fragment>
			<div className="well" style={{"background-color": "#F0F8FF"}}>
				<button className="btn btn-large btn-primary"
						onClick={()=>{							
							dispatch({
								"type" : "ADD_UP",
								"current_val" : countObj["count"]
							});
						}}>Add Up</button>
				&nbsp;
				<button className="btn btn-large"
						onClick={()=>{
							dispatch({
								"type" : "RESET"								
							});
						}}>Reset</button>
				<br/>
				<h1>{countObj.count}</h1>			
			</div>

		</Fragment>
	);
}