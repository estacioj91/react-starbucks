import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown } from "react-bootstrap";
const Mainfooter = ({ bottomPadding }) => {
	return (
		<div className="main-footer body-wrap" style={{ width: "100%" }}>
			<div></div>
			<div className="social-media" style={{ paddingBottom: bottomPadding }}>
				<Dropdown.Divider />
				<div className="icons">
					<img src={require(`./assets/s.svg`).default} alt="" />
					<img src={require(`./assets/fb.svg`).default} alt="" />
					<img src={require(`./assets/p.svg`).default} alt="" />

					<img src={require(`./assets/tw.svg`).default} alt="" />
					<img src={require(`./assets/ig.svg`).default} alt="" />
				</div>
				<div className="links">
					<ul>
						<li>
							<a href="">Privacy Policy</a>
						</li>
						<li>
							<span className="hidden">|</span>
							<a href="">Terms of Use</a>
						</li>
						<li>
							<span className="hidden">|</span>
							<a href="">CA Supply Chain Act</a>
						</li>
						<li>
							<span className="hidden">|</span>
							<a href="">Submit Your Idea</a>
						</li>
						<li>
							<span className="hidden">|</span>
							<a href="">Cookie Preferences</a>
						</li>
					</ul>
					<p>© 2020 Starbucks Coffee Company. All rights reserved.</p>
				</div>
			</div>
		</div>
	);
};
export default Mainfooter;
