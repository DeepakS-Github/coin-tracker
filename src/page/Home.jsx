import React from "react";
import Card from "../components/card/Card";
import "./home.css";
import Heading from "../components/heading/Heading";
import Tag from "../components/tag/Tag";
import Table from "../components/table/Table";
import Modal from "../components/modal/Modal";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <section>
      <div className="upper-section">
        <div className="mobile-slider">
          <Slider />
        </div>
        <div className="card-main">
          <Card
            image={"/images/card1.svg"}
            cardHeadText={"Take a quiz!"}
            cardSubheadText={"Learn and earn $CKB"}
          />
          <Card
            image={"/images/card2.svg"}
            cardHeadText={"Portfolio 🔥"}
            cardSubheadText={
              "Track your trades in one place, not all over the place"
            }
          />
          <Card
            image={"/images/card3.svg"}
            cardHeadText={"Portfolio"}
            cardSubheadText={
              "Track your trades in one place, not all over the place"
            }
          />
        </div>
        <Heading headingText={"Top 100 Cryptocurrencies by Market Cap"} />
        <div className="tag-main">
          <Tag textColor={"#000000"}>
            <img src="/images/star.svg" />
            <span>Favourites</span>
          </Tag>
          <Tag isSelected={true}>CryptoCurrencies</Tag>
          <Tag>DeFi</Tag>
          <Tag>NFTs & Collectibles</Tag>
        </div>
      </div>
      <Table />
    </section>
  );
};

export default Home;
