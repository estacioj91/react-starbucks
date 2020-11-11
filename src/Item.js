import React from "react";

const Item = (props) => {
	return (
		<div className="item">
			<img
				className="menu-item-image"
				src={require(`./assets/${props.image}.jpg`).default}
				alt="images"
			/>
			<p>{props.name}</p>
		</div>
	);
};
export default Item;
