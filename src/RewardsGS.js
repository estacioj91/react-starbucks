import React from "react";
const RewardsGS = ({ image, header, text }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				flexBasis: "30%",
				alignItems: "center",
				textAlign: "center",
			}}
		>
			<img
				style={{ width: "3em", marginBottom: "1em" }}
				src={require(`./assets/${image}.png`).default}
				alt=""
			/>
			<h4>{header}</h4>
			{text}
		</div>
	);
};
export default RewardsGS;
