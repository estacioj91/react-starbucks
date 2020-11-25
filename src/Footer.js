import React from "react";

const Footer = () => {
	return (
		<article className="footer">
			<div className="footer-select" style={{ paddingTop: "1em" }}>
				<a href="/" className="footer-link">
					<div style={{ display: "block" }}>
						<span>For item availability</span>
						<p>
							<strong style={{ color: "white" }}>Choose a store</strong>
						</p>
					</div>
				</a>
			</div>
		</article>
	);
};
export default Footer;
