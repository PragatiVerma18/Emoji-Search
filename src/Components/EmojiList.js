import React from 'react';

import EmojiItem from './EmojiItem';
function EmojiList(props) {
	const { emojis } = props;
	if (emojis) {
		return (
			<>
				{emojis.map((emoji) => (
					<EmojiItem key={emoji.codePoint} emoji={emoji} />
				))}
			</>
		);
	} else {
		return (
			<>
				<img
					src='https://lh3.googleusercontent.com/proxy/qsFnSC-BoNINskllpVavoykkDP9_8iPNIw6FZmc3PB-WuusoUtNptqx-bkumU4HC2NeW04ZF-XPDq-R82Tec9uzibfGC8rSzlXj688KAlvLV2CM-tiE'
					alt=''
				/>
			</>
		);
	}
}

export default EmojiList;
