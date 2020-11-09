import React from "react";
import { render } from "react-dom";
import Nav from "./Nav";
import Menu from "./Menu";
const App = () => {
	return (
		<div>
			<Nav />
			<Menu />
		</div>
	);
};

render(<App />, document.getElementById("root"));
