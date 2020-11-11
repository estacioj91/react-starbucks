import React from "react";
import data from "./data/side-nav.json";
const SideNav = () => {
	var nav = [];
	console.log(data);
	for (var key of Object.keys(data)) {
		var listItems = data[key].map((key) => {
			return (
				<li key={key}>
					<a href="/">{key}</a>
				</li>
			);
		});
		nav.push(<p key={key}>{key}</p>);
		nav.push(listItems);
		console.log(listItems);
	}
	return (
		<div>
			<ul className="side-nav">{nav}</ul>
		</div>
	);
};
export default SideNav;
