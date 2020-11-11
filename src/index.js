import React from "react";
import { render } from "react-dom";
import Nav from "./Nav";
import Menu from "./Menu";
import Footer from "./Footer";
const App = () => {
	return (
		<div>
			<Nav />
			<Menu />
			<Footer />
		</div>
	);
};

render(<App />, document.getElementById("root"));
