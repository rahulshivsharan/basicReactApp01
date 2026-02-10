'use strict'

import React, {useState, useEffect, Fragment} from "react";
import ChildComponent02 from './ChildComponent02.jsx';

export default function ParentComp02(){
	
	const [UIText, setUIText] = useState("Hi Parent");

	const getUIText = (changedText)=>{
		setUIText(changedText);
	}

	return (
		<Fragment>
			<div className="jumbotron">
				<div className="well">
					<h1>{UIText}</h1>
				</div>
			</div>
			<ChildComponent02 getUIText={getUIText}/>
		</Fragment>
	);	
}