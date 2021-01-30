import React, { useState } from 'react';

export default function App(props) {
	const [totalLikes, updateLikes] = useState(0);

	const increaseLikes = () => updateLikes(totalLikes + 1);
	const decreaseLikes = () =>
		totalLikes === 0 ? updateLikes(0) : updateLikes(totalLikes - 1);

	return (
		<div className="likes">
			<div className="likes-counter">{totalLikes}</div>
			<button className="increase-btn" onClick={increaseLikes}>
				+
			</button>
			<button className="decrease-btn" onClick={decreaseLikes}>
				-
			</button>
		</div>
	);
}
