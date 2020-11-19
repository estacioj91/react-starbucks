import React from "react";
import { render } from "react-dom";
import Navigation from "./Navigation";
import Menu from "./Menu";
import Footer from "./Footer";
import Home from "./Home";
import Rewards from "./Rewards";
import Mainfooter from "./Mainfooter";
import { Router, Link } from "@reach/router";
const App = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Navigation />
			<Router primary={false}>
				<Home path="/" />
				<Menu path="menu" />
				<Rewards path="rewards" />
			</Router>
		</div>
	);
};

render(<App />, document.getElementById("root"));
