import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Mainfooter from "./Mainfooter";
import Banner from "./Banner";
const Giftheader = ({ name }) => {
	return (
		<div
			className="body-wrap"
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				paddingTop: "2em",
				paddingLeft: "3.7em",
				paddingRight: "2em",
			}}
		>
			<h5>{name}</h5>

			<a
				style={{
					right: "0",
					fontWeight: "300",
					color: "#008248",
					fontSize: "1.2em",
					fontFamily: "SodoBold",
				}}
				href="/"
			>
				See all
			</a>
		</div>
	);
};
const Items = ({ image }) => {
	return (
		<div style={{ marginRight: ".5em" }}>
			<img
				src={require(`./assets/${image}.png`).default}
				alt="Third slide"
				className="card"
			/>
		</div>
	);
};
const Carouselitems = ({ card }) => {
	return (
		<div>
			<div className="carousel-items">
				{card.map((name) => {
					return <Items key={Math.random()} image={name} />;
				})}
			</div>
		</div>
	);
};
const Giftcards = () => {
	const [windowWidth, setWindow] = useState(window.innerWidth);
	const [maxCards, setMax] = useState(4);
	var arr1 = [
		"card1",
		"card2",
		"card3",
		"card4",
		"card4",
		"card3",
		"card2",
		"card1",
		"card3",
		"card2",
		"card5",
	];
	var arr2 = [
		"card5",
		"card6",
		"card7",
		"card8",
		"card8",
		"card7",
		"card6",
		"card5",
	];
	var arr3 = ["card7", "card8", "card8", "card3", "card2", "card1", "card3"];
	var arr4 = [
		"card9",
		"card10",
		"card11",
		"card12",
		"card2",
		"card1",
		"card3",
	];
	function updateSize() {
		setWindow(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener("resize", updateSize);
		updateSize();
		if (windowWidth > 1000) {
			setMax(4);
		} else if (windowWidth < 1000 && windowWidth > 700) {
			setMax(3);
		} else if (windowWidth < 700) {
			setMax(2);
		}
	}, [windowWidth, maxCards]);
	function carouselBuilder(arr) {
		var cardList = [];
		var count = 0;
		for (let i = 0; i < arr.length; i++) {
			if (!cardList[count]) {
				cardList[count] = [];
			}
			let temp = maxCards;
			cardList[count].push(arr[i]);
			if (i == arr.length - 1 && arr.length % 2 !== 0) {
				cardList[count].push(arr[0]);
			}
			if ((i + 1) % temp === 0 && i !== 0) {
				count++;
			}
		}
		return cardList.map((arr) => {
			return (
				<Carousel.Item className="fade-away" key={Math.random()}>
					<Carouselitems key={Math.random()} card={arr} />
				</Carousel.Item>
			);
		});
	}
	return (
		<div>
			<div>
				<Giftheader name="FEATURED" />
				<Carousel
					className="fade-away body-wrap"
					interval={null}
					indicators={false}
					nextIcon={
						<button
							aria-hidden="true"
							className="carousel-control-next-icon"
						>
							<div> </div>
						</button>
					}
				>
					{carouselBuilder(arr1)}
				</Carousel>
				<div className="text-banner">
					<div
						className="body-wrap"
						style={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "center",
							alignContent: "center",
						}}
					>
						<h4 style={{ paddingRight: "1em" }}>Got a gift card?</h4>
						<span
							style={{
								paddingRight: "2em",
								paddingTop: ".4em",
								fontFamily: "sans-serif",
							}}
						>
							Earns 2<span style={{ color: "#CBA258" }}>★</span>per $1
						</span>
						<div>
							<button
								style={{
									width: "15em",
									borderColor: "black",
									color: "white",
									fontFamily: "SodoBold",
									width: "10em",
									backgroundColor: "black",
								}}
								className="clear-button"
							>
								Check balance
							</button>
							<button
								style={{
									width: "15em",
									borderColor: "black",
									color: "black",
									fontFamily: "SodoBold",
									width: "10em",
								}}
								className="clear-button"
							>
								Add card
							</button>
						</div>
					</div>
				</div>
				<Giftheader name="THANKSGIVING" />
				<Carousel
					className="fade-away body-wrap"
					interval={null}
					indicators={false}
					nextIcon={
						<button
							aria-hidden="true"
							className="carousel-control-next-icon"
						>
							<div> </div>
						</button>
					}
				>
					{carouselBuilder(arr2)}
				</Carousel>
				<Giftheader name="Red Cup" />
				<Carousel
					className="fade-away body-wrap"
					interval={null}
					indicators={false}
					nextIcon={
						<button
							aria-hidden="true"
							className="carousel-control-next-icon"
						>
							<div> </div>
						</button>
					}
				>
					{carouselBuilder(arr1)}
				</Carousel>
				<Giftheader name="Birthday" />
				<Carousel
					className="fade-away body-wrap"
					interval={null}
					indicators={false}
					nextIcon={
						<button
							aria-hidden="true"
							className="carousel-control-next-icon"
						>
							<div> </div>
						</button>
					}
				>
					{carouselBuilder(arr3)}
				</Carousel>
				<Giftheader name="Appreciation" />
				<Carousel
					className="fade-away body-wrap"
					interval={null}
					indicators={false}
					nextIcon={
						<button
							aria-hidden="true"
							className="carousel-control-next-icon"
						>
							<div> </div>
						</button>
					}
				>
					{carouselBuilder(arr4)}
				</Carousel>
			</div>
			<div style={{ backgroundColor: "#F7F7F7" }}>
				<div
					className="giftcard-banner body-wrap"
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						padding: "4em 2em",
						justifyContent: "space-evenly",
					}}
				>
					<img
						style={{
							height: "100%",
							width: "100%",
							maxWidth: "30em",
							flexBasis: "45%",
						}}
						src={require(`./assets/giftcards.png`).default}
						alt=""
					/>
					<div
						style={{
							flexBasis: "45%",
							padding: "2em 0",
							textAlign: "left",
							alignItems: "left",
						}}
					>
						<div style={{ width: "25em", padding: "0 2.5em" }}>
							<h3>Gift Cards in Bulk</h3>
							<p>
								There’s an easier way to buy Starbucks Cards in bulk!
								Give a Starbucks Card to gift, reward, incentivize, or
								show appreciation towards your customers, clients and
								team members.
							</p>
							<button
								style={{
									width: "15em",
									borderColor: "black",
									color: "black",
									fontFamily: "SodoBold",
									width: "8em",
								}}
								className="clear-button"
							>
								Shop now
							</button>
						</div>
					</div>
				</div>
			</div>
			<div style={{ backgroundColor: "#EDEBE9" }}>
				<div className="body-wrap" style={{ padding: "3em 2.5em" }}>
					<div style={{ width: "100%" }}>
						<h4>GIFT CARD SUPPORT</h4>
						<p style={{ padding: "1em 0", fontSize: "1.4rem" }}>
							Use the links below to manage eGifts you have sent or
							received, or view our full Card Terms & Conditions.
						</p>
						<div>
							<button
								style={{
									width: "15em",
									borderColor: "black",
									color: "black",
									fontFamily: "SodoBold",
									width: "15em",
								}}
								className="clear-button"
							>
								Manage your gift cards
							</button>
							<div style={{ display: "inline", width: "1em" }}> </div>
							<button
								style={{
									width: "15em",
									borderColor: "black",
									color: "black",
									fontFamily: "SodoBold",
									width: "15em",
								}}
								className="clear-button"
							>
								See Terms & Conditions
							</button>
						</div>
					</div>
				</div>
			</div>
			<Mainfooter bottomPadding="0em" />
		</div>
	);
};
export default Giftcards;
