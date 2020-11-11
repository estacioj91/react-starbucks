import React from "react";
import Drinks from "./Drinks";
import Food from "./Food";
import SideNav from "./SideNav";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
	return (
		<div className="menu">
			<div className="side-nav">
				<SideNav />
			</div>
			<div className="item-menu">
				<h2 style={{ marginBottom: ".8em" }}>Menu</h2>
				<Drinks />
				<Food />
			</div>
		</div>
	);
};
export default Menu;
