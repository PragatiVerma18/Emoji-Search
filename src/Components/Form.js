import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			emoji: '',
		};
	}

	handleEmojiChange = (event) => {
		this.setState({
			emoji: event.target.value,
		});
	};

	handleSubmit = (event) => {
		alert(`${this.state.emoji}`);
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						value={this.state.emoji}
						onChange={this.handleEmojiChange}></input>
				</form>
			</div>
		);
	}
}

export default Form;
