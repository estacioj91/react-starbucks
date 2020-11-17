import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css";
import { Router, Link } from "@reach/router";
const Navigation = () => {
	return (
		<div className="nav-shade">
			<Navbar
				className="color-nav body-wrap"
				collapseOnSelect
				expand="lg"
				variant="light"
			>
				<Link to="/">
					<Navbar.Brand>
						<img
							alt="nav"
							src={require(`./assets/logo.svg`).default}
							width="50"
							height="50"
							style={{ marginRight: ".5em" }}
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto ">
						<div className="menu-divider"></div>
						<Nav.Link as={Link} to="/menu" className="nav-menu-items">
							MENU
						</Nav.Link>
						<Nav.Link className="nav-menu-items">REWARDS</Nav.Link>
						<Nav.Link className="nav-menu-items">GIFT CARDS</Nav.Link>
					</Nav>
					<hr className="hr-divider"></hr>
					<Nav className="signin">
						<Nav.Link href="#deets">
							<button className="sign-button">Sign in</button>
						</Nav.Link>
						<span className="menu-span"> </span>
						<Nav.Link eventKey={2} href="#memes">
							<button className="join-button">Join now</button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
export default Navigation;
