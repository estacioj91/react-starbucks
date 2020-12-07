import React from "react";
import Mainfooter from "./Mainfooter";
import Rewardshero from "./Rewardshero";
import RewardsGS from "./RewardsGS";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Rewardsextras from "./Rewardsextras";

const Earn = ({ image, header, text }) => {
	return (
		<div className="earn">
			<img
				style={{ width: "7em", height: "10em" }}
				src={require(`./assets/${image}.png`).default}
				alt=""
			/>
			<div className="earn-text">
				<h5>{header}</h5>
				<p>{text}</p>
			</div>
		</div>
	);
};
const Rewardsearn = () => {
	return (
		<div style={{ backgroundColor: "#F3F1E7", paddingBottom: "2em" }}>
			<div className="body-wrap earn-wrap">
				<div style={{ textAlign: "center", padding: "3em 0 4em 0" }}>
					<h3 style={{ paddingBottom: "1em" }}>
						Cash or card, you earn Stars
					</h3>
					<p>
						No matter how you pay, you can earn Stars with your morning
						coffe. Those Stars add up to (really delicious) Rewards
					</p>
				</div>
				<div className="earn-row">
					<div style={{ paddingBottom: "1em" }}>
						<h4>1★ per dollar</h4>
						<p>Pay as you go</p>
					</div>
					<div className="earn-row-items">
						<Earn
							header="Scan and pay separately"
							text="Use cash or credit/debit card at the register."
							image="1A"
						/>
						<Earn
							header="Save payment in the app"
							text="Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step."
							image="1B"
						/>
					</div>
				</div>
				<hr />
				<div className="earn-row">
					<div style={{ paddingBottom: "1em" }}>
						<h4>2★ per dollar</h4>
						<p>Add funds in the app</p>
					</div>
					<div className="earn-row-items">
						<Earn
							header="Preload"
							text="To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.

							"
							image="2A"
						/>
						<Earn
							header="Register your gift card"
							text="Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
							image="2B"
						/>
					</div>
				</div>
				<hr />
				<div className="earn-row">
					<div style={{ paddingBottom: "1em" }}>
						<h4>Up to 3★ per dollar</h4>
						<p>With Starbucks® Rewards Visa® Card</p>
					</div>
					<div className="earn-row-items">
						<Earn
							header="Earn Stars even faster
							"
							text="Earn Stars on all purchases you make with our 
							credit card
							opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card."
							image="3A"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const Tabimage = ({ image, header, text }) => {
	return (
		<div
			style={{
				backgroundColor: "#D3E9E1",
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
			}}
			className="tab-image"
		>
			<img
				style={{
					width: "28em",
					height: "16em",
					maxWidth: "100%",
				}}
				src={require(`./assets/${image}.png`).default}
				alt=""
			/>
			"
			<div
				style={{
					fontFamily: "SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif",
					paddingTop: "3em",
					textAlign: "center",
					paddingLeft: "1.5em",
					paddingRight: "1.5em",
				}}
			>
				<h4
					style={{
						fontWeight: "600",
						fontSize: "1.4rem",
						paddingBottom: ".5em",
					}}
				>
					{header}
				</h4>
				<p>{text}</p>
			</div>
		</div>
	);
};

const Rewardstab = () => {
	return (
		<div
			style={{
				backgroundColor: "#f0f7f4",
				width: "100%",
				paddingTop: "3em",
			}}
		>
			<div>
				<h4
					style={{
						color: "black",
						fontWeight: "500",
						fontSize: "1.5em",
						fontFamily:
							"SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif",
						textAlign: "center",
					}}
				>
					Get your favorites for free
				</h4>
				<div>
					<Tabs
						className="our-tab"
						defaultActiveKey="25"
						id="uncontrolled-tab-example"
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						<Tab
							eventKey="25"
							title={
								<span>
									25
									<span style={{ fontSize: "10px", color: "#cba258" }}>
										★
									</span>
								</span>
							}
						>
							<Tabimage
								image="25"
								header="Customize your drink"
								text="Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."
							/>
						</Tab>
						<Tab
							eventKey="50"
							title={
								<span>
									50
									<span style={{ fontSize: "10px", color: "#cba258" }}>
										★
									</span>
								</span>
							}
						>
							<Tabimage
								image="50"
								header="
                                Brewed hot coffee, bakery item or hot tea"
								text="Pair coffee cake or an almond croissant with your fresh cup of hot brew."
							/>
						</Tab>
						<Tab
							eventKey="150"
							title={
								<span>
									150
									<span style={{ fontSize: "10px", color: "#cba258" }}>
										★
									</span>
								</span>
							}
						>
							<Tabimage
								image="150"
								header="Handcrafted drink, hot breakfast or parfait"
								text="Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."
							/>
						</Tab>
						<Tab
							eventKey="200"
							title={
								<span>
									200
									<span style={{ fontSize: "10px", color: "#cba258" }}>
										★
									</span>
								</span>
							}
						>
							<Tabimage
								image="200"
								header="Salad, sandwich or protein box"
								text="Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box."
							/>
						</Tab>
						<Tab
							eventKey="400"
							title={
								<span>
									400
									<span style={{ fontSize: "10px", color: "#cba258" }}>
										★
									</span>
								</span>
							}
						>
							<Tabimage
								image="400"
								header="Select merchandise or at-home coffee"
								text="Take home a signature cup, a bag of coffee or your choice of select coffee accessories."
							/>
						</Tab>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

const Rewards = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div
				className="rewards-mini-banner"
				style={{
					backgroundColor: "#1e3932",
					height: "3em",
					marginTop: "-1em",
					marginBottom: "-.1em",
					zIndex: "10",
				}}
			>
				<div
					style={{
						fontWeight: "600",
						color: "white",
						maxWidth: "1440px",
						marginLeft: "auto",
						marginRight: "auto",
						height: "100% !important",
						fontSize: ".8em",
					}}
				>
					<p
						style={{
							paddingLeft: "8.3em",
							paddingTop: "1.2em",
							paddingBottom: "0",
						}}
					>
						STARBUCKS® REWARDS
					</p>
				</div>
				<div
					className="nav-shade"
					style={{
						zIndex: "10",
						width: "100%",
						height: "1px",
					}}
				></div>
			</div>
			<Rewardshero
				image="hero"
				header={
					<h4 style={{ fontWeight: "bold" }}>
						More ways to pay. More ways to get rewarded.
					</h4>
				}
				text="As a Starbucks® Rewards member, you’ll earn free food and drinks whether you pay with cash, credit card or gift card. 
                Terms of use
                opens in new window"
				direction="row-reverse"
				bgColor="rgb(30, 57, 50)"
				font="1.2em"
				fWeight="300"
				textColor="white"
				button={
					<button
						style={{
							width: "15em",
							borderColor: "#008248",
							color: "white",
							backgroundColor: "#008248",
						}}
						className="clear-button"
					>
						Learn more
					</button>
				}
			/>
			<div
				style={{
					textAlign: "center",
					marginTop: "5em",
					marginBottom: "3em",
				}}
			>
				<h2 style={{ marginBottom: "2em" }}>Getting started is easy</h2>
				<p style={{ fontSize: "1.5em", fontWeight: "500" }}>
					Earn Stars and get rewarded in a few easy steps.
				</p>
			</div>
			<div
				style={{ paddingLeft: "3em", paddingRight: "3em" }}
				className="rewardsGS body-wrap"
			>
				<RewardsGS
					image="1"
					header="Create an account"
					text={
						<p>
							To get started,{" "}
							<u>
								<a href="/" style={{ color: "#008248" }}>
									join now
								</a>
							</u>
							. You can also{" "}
							<u>
								<a href="/" style={{ color: "#008248" }}>
									join in the app
								</a>
							</u>{" "}
							to get access to the full range of Starbucks® Rewards
							benefits.
						</p>
					}
				/>
				<RewardsGS
					image="2"
					header="Order and pay how you’d like"
					text={
						<p>
							Use cash, credit/debit card or save some time and pay right
							through the app. You’ll collect Stars all ways.{" "}
							<u>
								<a href="/" style={{ color: "#008248" }}>
									Learn how
								</a>
							</u>
						</p>
					}
				/>
				<RewardsGS
					image="3"
					header="Earn Stars, get Rewards"
					text={
						<p>
							As you earn Stars, you can redeem them for Rewards—like
							free food, drinks, and more. Start redeeming with as little
							as 25 Stars!
						</p>
					}
				/>
			</div>
			<Rewardstab />
			<Rewardsextras />
			<Rewardsearn />
			<Mainfooter bottomPadding="0em" />
		</div>
	);
};
export default Rewards;
