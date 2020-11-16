import React from "react";
import Banner from "./Banner";
// this component can be split up in the future
const Homebanner = () => {
	return (
		<div className="body-padding">
			<Banner
				image="red-banner"
				header={<h3>Wishing you the warmest Rewards</h3>}
				text="Starbucks® Rewards members can now pay any way they’d like in the app and collect Stars to redeem for free holiday faves. Positively jolly.*"
				button="Get the app"
				direction="row-reverse"
				bgColor="#e1251b"
				font="1.2em"
				fWeight="300"
				button={<button className="clear-button">Get the app</button>}
			/>
			<Banner
				image="holday-cup-banner"
				header={<h1 style={{ fontWeight: "bold" }}>HOLIDAY YOUR WAY</h1>}
				text="So many convenient ways to get your festive favorites."
				button="Explore seasonal drinks"
				direction="row-reverse"
				bgColor="#e1251b"
				font="1.2em"
				fWeight="300"
				button={
					<button style={{ width: "15em" }} className="clear-button">
						Explore seasonal drinks
					</button>
				}
			/>
			<Banner
				image="bread"
				header={
					<h1 style={{ fontWeight: "bold" }}>BAKING SPIRITS BRIGHT</h1>
				}
				text="The new Cranberry Orange Scone: made with crème fraîche, dried cranberries, orange zest and a drizzle of vanilla icing."
				button="Explore seasonal drinks"
				direction="row"
				bgColor="#1e3932"
				font="1.2em"
				fWeight="300"
				button={
					<button style={{ width: "15em" }} className="clear-button">
						Order now
					</button>
				}
			/>
		</div>
	);
};
export default Homebanner;
