import React from "react";
import data from "./data/side-nav.json";
const SideNav = () => {
	var nav = [];
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
	}
	return (
		<div>
			<ul>{nav}</ul>
		</div>
	);
};
export default SideNav;
