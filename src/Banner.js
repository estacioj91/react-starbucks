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
			<div
				style={{
					color: textColor,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
				className="text-div"
			>
				{header}
				<p style={{ fontSize: font, fontWeight: fWeight }}>{text}</p>
				{button}
			</div>
		</div>
	);
};
export default Banner;
