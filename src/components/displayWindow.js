import React from 'react';
import "./Calculator.css"

function DisplayWindow(props) {
	return(
	<input id="display" type="text" value={props.expression} disabled />
	);
}


export default DisplayWindow;