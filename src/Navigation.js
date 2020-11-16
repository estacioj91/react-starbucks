import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css";
const Navigation = () => {
	return (
		<div>
			<Navbar
				className="color-nav"
				collapseOnSelect
				expand="lg"
				variant="light"
			>
				<Navbar.Brand href="#home">
					<img
						alt="nav"
						src={require(`./assets/logo.svg`).default}
						width="50"
						height="50"
						style={{ marginRight: ".5em" }}
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto ">
						<div className="menu-divider"></div>
						<Nav.Link className="nav-menu-items" href="#features">
							MENU
						</Nav.Link>
						<Nav.Link className="nav-menu-items" href="#pricing">
							REWARDS
						</Nav.Link>
						<Nav.Link className="nav-menu-items" href="#pricing">
							GIFT CARDS
						</Nav.Link>
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
{
	/* <Navbar bg="light" variant="light">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Brand href="#home">
					<img
						alt="nav"
						src={require(`./assets/logo.svg`).default}
						width="50"
						height="50"
						className="d-inline-block align-top"
					/>{" "}
					<span className="logo-text starbucks-green starbucks-font">
						Starbucks
					</span>
				</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav defaultActiveKey="/home" as="ul">
						<Nav.Item as="li">
							<Nav.Link href="/home">Active</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li">
							<Nav.Link eventKey="link-1">Link</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li">
							<Nav.Link eventKey="link-2">Link</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar> */
}
