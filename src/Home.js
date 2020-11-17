import React from "react";
import Textbanner from "./Textbanner";
import Homebanner from "./Homebanner";
import Mainfooter from "./Mainfooter";
const Home = () => {
	return (
		<div>
			<Textbanner />
			<Homebanner />
			<Mainfooter bottomPadding="0em" />
		</div>
	);
};
export default Home;
