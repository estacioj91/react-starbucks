import React from "react";

const Item = (props) => {
	return (
		<div className="item">
			<img
				className="menu-item-image"
				src={`../assets/${props.image}.jpg`}
				alt="images"
			/>
			<p>{props.name}</p>
		</div>
	);
};
export default Item;
