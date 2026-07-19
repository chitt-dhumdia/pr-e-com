import "./Slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ban1 from "../assets/ban-1.png";
import ban2 from "../assets/ban-2.png";
import ban3 from "../assets/ban-3.png";
import ban4 from "../assets/ban-4.png";

const Slider = () => {
  return (
    <div className="slider-section">

      <div className="container position-relative">

        <button className="prev-btn">
          <i className="bi bi-chevron-left"></i>
        </button>

        <button className="next-btn">
          <i className="bi bi-chevron-right"></i>
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src={ban1} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={ban2} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={ban3} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={ban4} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={ban1} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={ban2} alt="" />
          </SwiperSlide>
        </Swiper>

      </div>

    </div>
  );
};

export default Slider;