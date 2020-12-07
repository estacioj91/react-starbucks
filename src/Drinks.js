import React from "react";
import Item from "./Item";

const Drinks = () => {
	return (
		<div style={{ marginBottom: "2em" }}>
			<p className="drinks-header">Drinks</p>
			<hr style={{ marginBottom: "2em" }} />
			<div className="items">
				<Item image="caramel-brule" name="Hot Coffees" />
				<Item image="caramel-ribbon" name="Hot Drinks" />
				<Item image="chocolate-cookie" name="Frappuccino Beverages" />
				<Item image="match-green" name="Hot Teas" />
				<Item image="colddrink" name="Iced Teas" />
				<Item image="cold" name="Cold Drinks" />
			</div>
		</div>
	);
};
export default Drinks;
