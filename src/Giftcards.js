import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Mainfooter from "./Mainfooter";
const Giftheader = ({ name }) => {
	return (
		<div
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
				<Carousel.Item key={Math.random()}>
					<Carouselitems key={Math.random()} card={arr} />
				</Carousel.Item>
			);
		});
	}
	return (
		<div className="body-wrap">
			<Giftheader name="FEATURED" />
			<Carousel
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
			<Giftheader name="THANKSGIVING" />
			<Carousel
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
			<Mainfooter bottomPadding="0em" />
		</div>
	);
};
export default Giftcards;
