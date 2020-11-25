import React from "react";
import Drinks from "./Drinks";
import Food from "./Food";
import SideNav from "./SideNav";
import Footer from "./Footer";
import Mainfooter from "./Mainfooter";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
	return (
		<div>
			<div className="menu body-wrap">
				<div className="side-nav">
					<SideNav />
				</div>
				<div className="item-menu">
					<h2 style={{ marginBottom: ".8em" }}>Menu</h2>
					<Drinks />
					<Food />
				</div>
				<Footer />
			</div>
			<div>
				<Mainfooter bottomPadding="6em" />
			</div>
		</div>
	);
};
export default Menu;
