import React from 'react';
import './EmojiItem.css';
function EmojiItem(props) {
	return (
		<div className='animate-bottom list'>
			{props.emoji.character} - {props.emoji.unicodeName}
		</div>
	);
}

export default EmojiItem;
