import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ShowCard from "./ShowCard";
import ShowCardSkeleton from "./ShowCardSkeleton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./Carousel.module.css";

const Carousel = () => {
  const [shows, setShows] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const skeletonArray = Array.from({ length: 12 }, (_, index) => index);

  useEffect(() => {
    async function fetchShows() {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/227a53a3-8004-4c54-8155-0f14e6714409"
        );
        setIsFetched(true);
        const resData = response.data;
        setShows(resData.editorialItems);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchShows();
  }, []);

  return (
    <div>
      <Swiper
        allowTouchMove={false}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className={classes.swiper}
        spaceBetween={"0"}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
      >
        {isFetched &&
          shows.map((show, index) => (
            <SwiperSlide className={classes.slide} key={show.item.id}>
              <ShowCard show={show} index={index} hoverable={true} />
            </SwiperSlide>
          ))}
        {!isFetched &&
          skeletonArray.map((index) => (
            <SwiperSlide key={index} className={classes.slide}>
              <ShowCardSkeleton />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
