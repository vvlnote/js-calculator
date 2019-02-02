import React, { Component } from 'react';
import './Calculator.css';
import Key from './Key';
import DisplayWindow from './displayWindow';

class Calculator extends Component {
	constructor(){
		super();
		this.state = {expression: '0'}
		this.onKeyPressed = this.onKeyPressed.bind(this);
		this.onDeletePressed = this.onDeletePressed.bind(this);
		this.onEvaluatePressed = this.onEvaluatePressed.bind(this);
	}
	onKeyPressed (text){
		this.setState((state) => {
			return {expression: state.expression[0] === "0" ? 
			state.expression.slice(1) + text : state.expression + text
			 };
		});
	}
	onDeletePressed(){
		this.setState((state) => ({
			expression: state.expression.length <= 1 ? "0" : state.expression.slice(0, -1)
		}))
	}
	onEvaluatePressed(){
		this.setState((state) =>({
			expression: state.expression[0] !== "0" ? 
			eval(state.expression).toString() : state.expression.length > 1 ? 
			eval(state.expression.slice(1)).toString() : eval (state.expression).toString()
		}))
	}
	render(){
		return (
			<div className="grid-container">
			<DisplayWindow expression={this.state.expression} />
			<button className="kbutton" id="clear" onClick={this.onDeletePressed}>C</button>
			<Key idName="divide" text="/" onKeyPressed={this.onKeyPressed} />
			<Key idName="multiply" text="*" onKeyPressed={this.onKeyPressed} />
			<Key idName="subtract" text="-" onKeyPressed={this.onKeyPressed} />
			<Key idName="seven" text="7" onKeyPressed={this.onKeyPressed} />
			<Key idName="eight" text="8" onKeyPressed={this.onKeyPressed} />
			<Key idName="nine" text="9" onKeyPressed={this.onKeyPressed} />
			<Key idName="add" text="+" onKeyPressed={this.onKeyPressed} />			
			<Key idName="four" text="4" onKeyPressed={this.onKeyPressed} />
			<Key idName="five" text="5" onKeyPressed={this.onKeyPressed} />
			<Key idName="six" text="6" onKeyPressed={this.onKeyPressed} />

			<Key idName="one" text="1" onKeyPressed={this.onKeyPressed} />
			<Key idName="two" text="2" onKeyPressed={this.onKeyPressed} />
			<Key idName="three" text="3" onKeyPressed={this.onKeyPressed} />
			<button id="kEmpty" disabled></button>
			<Key idName="zero" text="0" onKeyPressed={this.onKeyPressed} />
			<Key idName="decimal" text="." onKeyPressed={this.onKeyPressed} />
			<button className="kbutton" id="equals" onClick={this.onEvaluatePressed}>=</button>
			</div>
		);
	}
}

export default Calculator;