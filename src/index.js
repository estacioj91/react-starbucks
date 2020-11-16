import React from "react";
import { render } from "react-dom";
import Navigation from "./Navigation";
import Menu from "./Menu";
import Footer from "./Footer";
import Textbanner from "./Textbanner";
import Homebanner from "./Homebanner";
const App = () => {
	return (
		<div>
			<Navigation />
			<Textbanner />
			<Homebanner />
			{/* <Footer /> */}
		</div>
	);
};

render(<App />, document.getElementById("root"));
