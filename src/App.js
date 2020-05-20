import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header';
import Form from './Components/Form';
import EmojiList from './Components/EmojiList';
import Loader from './Components/Loader';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			emojis: [],
			loading: true,
		};
	}
	fetchAll = (e) => {
		const token = 'caeb9ad508435bb320ed55379c2767fb9eb4e469';
		const url = `https://emoji-api.com/emojis?access_key=${token}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ ...this.state, emojis: data, loading: false });
			});
	};

	componentDidMount() {
		this.fetchAll();
	}

	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({ ...this.state, [name]: value });
	};

	fetchEmojis = (e) => {
		e.preventDefault();
		this.setState({ loading: true });
		const token = 'caeb9ad508435bb320ed55379c2767fb9eb4e469';
		const search = this.state.search;
		const url = `https://emoji-api.com/emojis?search=${search}&access_key=${token}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ ...this.state, emojis: data, loading: false });
			});
	};

	render() {
		const { search, emojis } = this.state;
		return (
			<div className='App'>
				<Header />
				<Form
					search={search}
					handleInput={this.handleInputChange}
					fetchEmojis={this.fetchEmojis}
				/>
				{this.state.loading ? <Loader /> : <EmojiList emojis={emojis} />}
			</div>
		);
	}
}

export default App;
