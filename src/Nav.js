import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css";
const Nav = () => {
	return (
		<div>
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src={require(`./assets/logo.svg`).default}
						width="50"
						height="50"
						className="d-inline-block align-top"
					/>{" "}
					<span className="logo-text starbucks-green starbucks-font">
						Starbucks
					</span>
				</Navbar.Brand>
			</Navbar>
		</div>
	);
};
export default Nav;
