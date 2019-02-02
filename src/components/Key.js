import React, { Component } from 'react';
import './Calculator.css'

class Key extends Component {
	constructor(props) {
		super(props);
		this.onKeyPressed = this.onKeyPressed.bind(this);
	}
	onKeyPressed() {
		this.props.onKeyPressed(this.props.text);
	}
	render() {
		return (
			<div>
				<button className="kbutton" id={this.props.idName} onClick={this.onKeyPressed}>{this.props.text}</button>
			</div>
		);
	}
}

export default Key;