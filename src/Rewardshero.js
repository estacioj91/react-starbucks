import React from "react";

const Rewardshero = ({
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
			style={{
				backgroundColor: bgColor,
				flexDirection: direction,
				zIndex: "-1",
				paddingTop: "5px",
			}}
		>
			<div className="image-div">
				<img
					src={require(`./assets/${image}.png`).default}
					alt="red banner"
				/>
			</div>
			<div style={{ color: textColor }} className="text-div rewards-padding">
				{header}
				<p style={{ fontSize: font, fontWeight: fWeight }}>{text}</p>
				{button}
				<p>
					<u>Or join in the app</u> for the best experience
				</p>
			</div>
		</div>
	);
};
export default Rewardshero;
