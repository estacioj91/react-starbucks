import React from "react";
import Item from "./Item";
const Food = () => {
	return (
		<div style={{ marginBottom: "2em" }}>
			<p className="drinks-header">Food</p>
			<hr />
			<div className="items" style={{ marginBottom: "5em" }}>
				<Item image="croissant" name="Hot Breakfast" />
				<Item image="bagel" name="Bakery" />
				<Item image="pumpkin-muffin" name="Lunch" />
				<Item image="lemon-cake" name="Snacks & Sweets" />
			</div>
		</div>
	);
};
export default Food;
