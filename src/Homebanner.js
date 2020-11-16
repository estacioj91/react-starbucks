import React from "react";
import Banner from "./Banner";
// this component can be split up in the future
const Homebanner = () => {
	return (
		<div className="body-padding body-wrap">
			<Banner
				image="red-banner"
				header={<h3>Wishing you the warmest Rewards</h3>}
				text="Starbucks® Rewards members can now pay any way they’d like in the app and collect Stars to redeem for free holiday faves. Positively jolly.*"
				button="Get the app"
				direction="row-reverse"
				bgColor="#e1251b"
				textColor="white"
				font="1.2em"
				fWeight="300"
				button={<button className="clear-button">Get the app</button>}
			/>
			<Banner
				image="holday-cup-banner"
				header={<h1 style={{ fontWeight: "bold" }}>HOLIDAY YOUR WAY</h1>}
				text="So many convenient ways to get your festive favorites."
				button="Explore seasonal drinks"
				direction="row-reverse"
				bgColor="#e1251b"
				font="1.2em"
				fWeight="300"
				textColor="white"
				button={
					<button style={{ width: "15em" }} className="clear-button">
						Explore seasonal drinks
					</button>
				}
			/>
			<Banner
				image="bread"
				header={
					<h1 style={{ fontWeight: "bold" }}>BAKING SPIRITS BRIGHT</h1>
				}
				text="The new Cranberry Orange Scone: made with crème fraîche, dried cranberries, orange zest and a drizzle of vanilla icing."
				button="Explore seasonal drinks"
				direction="row"
				bgColor="#1e3932"
				font="1.2em"
				fWeight="300"
				textColor="white"
				button={
					<button style={{ width: "15em" }} className="clear-button">
						Order now
					</button>
				}
			/>
			<h1
				style={{
					color: "#1e3932",
					fontWeight: "600",
					textAlign: "center",
					margin: "1.0em 0 1.0em 0",
					fontSize: "3.5em",
				}}
			>
				CARRY THE MERRY
			</h1>
			<Banner
				image="card-image"
				header={
					<h3 style={{ fontWeight: "bold" }}>
						Earning 4,500 Bonus Stars is Super Starifying
					</h3>
				}
				text="$0 intro annual fee for your first year with the Starbucks® Rewards Visa® Card. Plus your Stars won’t expire—an exclusive Starbucks benefit for cardmembers. Now that’s Super Starifying.**"
				direction="row"
				bgColor="#D4E9E2"
				font="1.2em"
				fWeight="300"
				textColor="black"
				button={
					<button
						style={{
							width: "15em",
							borderColor: "black",
							color: "black",
						}}
						className="clear-button"
					>
						Learn more
					</button>
				}
			/>
			<div
				style={{
					color: "black",
					textAlign: "center",
					margin: "1.0em auto",
					fontSize: ".7em",
					padding: "0 1em",
					maxWidth: "60%",
				}}
			>
				<p>
					*Starbucks Rewards benefits are available at participating
					Starbucks stores. Some restrictions apply. See
					Starbucks.com/terms
				</p>
				<p style={{ padding: ".8em 0 " }}> </p>
				<p>
					**Under the Starbucks Rewards Program, Stars earned do not expire
					as long as your Starbucks® Rewards Visa® Credit Card account is
					open. If your Starbucks® Rewards Visa® Credit Card account is
					closed for any reason, your Stars will expire six (6) months
					after the calendar month in which that account was closed. Chase
					credit cards are issued by Chase Bank USA, N.A. Deposit products
					are provided by JPMorgan Chase Bank, N.A. Member FDIC
				</p>
			</div>
		</div>
	);
};
export default Homebanner;
