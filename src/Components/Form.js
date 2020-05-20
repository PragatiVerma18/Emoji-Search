import React from 'react';
import './Form.css';

function Form({ search, fetchEmojis, handleInput }) {
	return (
		<div>
			<form onSubmit={fetchEmojis}>
				<label className='search' htmlFor='inpt_search'>
					<input
						type='text'
						value={search}
						name='search'
						onChange={handleInput}
						id='inpt_search'
					/>
				</label>
				<h3>Hover and Type to Search.</h3>
			</form>
		</div>
	);
}

export default Form;
