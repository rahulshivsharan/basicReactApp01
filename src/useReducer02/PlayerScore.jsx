'use strict'

import React, {Fragment, useReducer} from "react";

export default function PlayerScore(){

	/**
	 * Initial state value containing 
	 * list of player objects
	 * **/
	const playerList = [
		{ "id": 123, 	"name" : "Rud Van Nistelroy", 	"score" : 12 },
		{ "id": 231, 	"name" : "Sam McMalen", 		"score" : 31 },
		{ "id": 13, 	"name" : "Igor Kings", 			"score" : 15 },
		{ "id": 24, 	"name" : "Timothy Jabs", 		"score" : 9  }
	];

	/**
	 * Reducer function accepting state and
	 * action, here state is list of players 
	 * **/
	const reducerFn = (players, action)=>{
		
		/**
		 * If the 'type' in the action object
		 * contains value 'INCREASE' then search
		 * for the specific player using 'playerId'
		 * present in the action object and increase the 
		 * count of the 'score' by 1.
		 * */
		if(action.type === "INCREASE"){
		
			const updatedScores = players.map((playerObj)=>{
				if(playerObj.id === action.playerId){
					playerObj.score = ++playerObj.score;										
				}
				return playerObj;
			});
			
			return updatedScores;
		
		/**
		 * If the 'type' in the action object
		 * contains value 'REDUCE' then search
		 * for the specific player using 'playerId'
		 * present in the action object and reduce the 
		 * count of the 'score' by 1.
		 * */
		}else if(action.type === "REDUCE"){
		
			const updatedScores = players.map((playerObj)=>{
				if(playerObj.id === action.playerId){
					playerObj.score = --playerObj.score;					
				}
				return playerObj;
			});

			return updatedScores;
		}else{
			return players;
		}
	};

	const [listOfPlayers , dispatch] = useReducer(reducerFn, playerList);
	
	/**
	 * this below function is invoked on the
	 * click of 'Increase Score' button. Its dispatches
	 * object containing 'playerId' of whose score needs to be
	 * increased and action 'type' holding value 'INCREASE'.
	 * **/
	const handleIncrement = (playerObject)=>{	
		dispatch({
			"type" : "INCREASE",
			"playerId" : playerObject["id"]
		});
	};

	/**
	 * this below function is invoked on the
	 * click of 'Decrease Score' button. Its dispatches
	 * object containing 'playerId' of whose score needs to be
	 * decreased and action 'type' holding value 'REDUCE'.
	 * **/
	const handleDecrement = (playerObject)=>{		
		dispatch({
			"type" : "REDUCE",
			"playerId" : playerObject["id"]
		});
	};

	return(
		<Fragment>
			<div className="well">
				<table className="table table-bordered table-stripped">
					{listOfPlayers.map((playerInstance)=>{							
							return (
								<tr key={playerInstance["id"]}>
									<td>{playerInstance["name"]}</td>
									<td>
										<button type="button" onClick={()=>{
											handleIncrement(playerInstance);	
										}} className="btn btn-primary">Increase Score</button>
									</td>
									<td>
										<button type="button" onClick={()=>{
											handleDecrement(playerInstance);	
										}} className="btn">Decrease Score</button>
									</td>
									<td>{playerInstance["score"]}</td>
								</tr>
							)

					})}
				</table>
			</div>
		</Fragment>
	);
}