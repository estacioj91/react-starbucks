import React from "react";
const Banner = ({
	header,
	image,
	text,
	font,
	fWeight,
	direction,
	textColor,
	button,
	bgColor,
}) => {
	return (
		<div
			className="banner"
			style={{ backgroundColor: bgColor, flexDirection: direction }}
		>
			<div className="image-div">
				<img
					src={require(`./assets/${image}.png`).default}
					alt="red banner"
				/>
			</div>
			<div style={{ color: textColor }} className="text-div">
				{header}
				<p style={{ fontSize: font, fontWeight: fWeight }}>{text}</p>
				{button}
			</div>
		</div>
	);
};
export default Banner;
// <div className="home-banner-red">
// 				<div>
{
	/* <img src={require(`./assets/red-banner.png`).default} alt="red banner" />; */
}
// 				</div>
// <div className="banner-textarea">
// 	<h3>Wishing you the warmest Rewards</h3>
// 	<p>
// 		Starbucks® Rewards members can now pay any way they’d like in
// 		the app and collect Stars to redeem for free holiday faves.
// 		Positively jolly.*
// 	</p>
// 	<button className="clear-button">Get the app</button>
// </div>
// 			</div>
// 			<div className="home-banner-red">
// 				<div>
// 					<img
// 						src={require(`./assets/holday-cup-banner.png`).default}
// 						alt="red banner"
// 					/>
// 				</div>
// 				<div className="banner-textarea">
// 					<h1 style={{ fontWeight: "bold", marginBottom: "1em" }}>
// 						HOLIDAY YOUR WAY
// 					</h1>
// 					<p>So many convenient ways to get your festive favorites.</p>
// 					<button style={{ width: "15em" }} className="clear-button">
// 						Explore seasonal drinks
// 					</button>
// 				</div>
// 			</div>
