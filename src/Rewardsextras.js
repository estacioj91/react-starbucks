import React from "react";
const Extra = ({ image, header, text }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				flexBasis: "30%",
				alignItems: "center",
			}}
			className="extra"
		>
			<img
				style={{ width: "8em" }}
				src={require(`./assets/${image}.png`).default}
				alt=""
			/>
			<h5
				style={{
					paddingTop: ".8em",
					paddingBottom: ".8em",
				}}
			>
				{header}
			</h5>
			<p>{text}</p>
			<p>
				<a style={{ color: "#008248" }} href="/">
					<u>Learn more</u>
				</a>
			</p>
		</div>
	);
};
const Rewardsextras = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				paddingLeft: "3em",
				paddingRight: "3em",
				paddingTop: "4em",
				paddingBottom: "4em",
			}}
			className="body-wrap"
		>
			<h3 style={{ paddingBottom: "1em" }}>Endless Extras</h3>
			<p style={{ paddingBottom: "1em" }}>
				Joining Starbucks® Rewards means unlocking access to exclusive
				benefits. Say hello to easy ordering, tasty Rewards and—yes, free
				coffee.
			</p>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around",
				}}
			>
				<Extra
					image="freebie"
					header="Fun freebies"
					text="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
				/>
				<Extra
					image="order"
					header="Order & pay ahead"
					text="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.

"
				/>
				<Extra
					image="free"
					header="Get to free faster"
					text="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
				/>
			</div>
		</div>
	);
};
export default Rewardsextras;
