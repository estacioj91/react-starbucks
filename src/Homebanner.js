import React from "react";
// this component can be split up in the future
const Homebanner = () => {
	return (
		<div className="body-padding">
			<div className="home-banner-red">
				<div>
					<img
						src={require(`./assets/red-banner.png`).default}
						alt="red banner"
					/>
				</div>
				<div className="banner-textarea">
					<h3>Wishing you the warmest Rewards</h3>
					<p>
						Starbucks® Rewards members can now pay any way they’d like in
						the app and collect Stars to redeem for free holiday faves.
						Positively jolly.*
					</p>
					<button className="clear-button">Get the app</button>
				</div>
			</div>
			<div className="home-banner-red">
				<div>
					<img
						src={require(`./assets/holday-cup-banner.png`).default}
						alt="red banner"
					/>
				</div>
				<div className="banner-textarea">
					<h1 style={{ fontWeight: "bold", marginBottom: "1em" }}>
						HOLIDAY YOUR WAY
					</h1>
					<p>So many convenient ways to get your festive favorites.</p>
					<button style={{ width: "15em" }} className="clear-button">
						Explore seasonal drinks
					</button>
				</div>
			</div>
		</div>
	);
};
export default Homebanner;
