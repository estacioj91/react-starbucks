import React from "react";
import Mainfooter from "./Mainfooter";
import Rewardshero from "./Rewardshero";
import RewardsGS from "./RewardsGS";
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
					<h3 style={{ fontWeight: "bold" }}>
						More ways to pay. More ways to get rewarded.
					</h3>
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
			<div className="rewardsGS body-wrap">
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
			<Mainfooter bottomPadding="0em" />
		</div>
	);
};
export default Rewards;
