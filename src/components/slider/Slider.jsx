import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";
import Card from "../card/Card";

function Slider() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Swiper
          // effect={"coverflow"}
          // grabCursor={true}
          // centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          modules={[Pagination]}
          pagination={true}
        >
          <SwiperSlide>
            <Card
              image={"/images/card1.svg"}
              cardHeadText={"Take a quiz!"}
              cardSubheadText={"Learn and earn $CKB"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={"/images/card2.svg"}
              cardHeadText={"Portfolio 🔥"}
              cardSubheadText={
                "Track your trades in one place, not all over the place"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={"/images/card3.svg"}
              cardHeadText={"Portfolio"}
              cardSubheadText={
                "Track your trades in one place, not all over the place"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
