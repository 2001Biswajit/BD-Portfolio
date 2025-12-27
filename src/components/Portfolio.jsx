import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import port1 from "../../public/Portfolio_Img/5632377_2943195.jpg"

import port2 from "../../public/Portfolio_Img/6073314_3033057.jpg"

import port3 from "../../public/Portfolio_Img/9989298_4259666.jpg"

import port4 from "../../public/Portfolio_Img/10883229_4575268.jpg"

import port5 from "../../public/Portfolio_Img/11583234_4763473.jpg"

import port6 from "../../public/Portfolio_Img/12983671_5123363.jpg"

import port7 from "../../public/Portfolio_Img/13109096_5136474.jpg"

import port8 from "../../public/Portfolio_Img/21701941_6518625.jpg"


// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="container px-1 mx-auto space-y-18"
    >
      <div
        className=" text-center my-5 mx-2 lg:my-9 space-y-5"
        style={{ fontFamily: "ubuntu" }}
      >
        <h1 className="text-white brightness-200 font-bold text-2xl md:text-4xl lg:text-5xl ">
          Unlock Your Website’s True
          <span className="text-sky-400 brightness-50">Potential</span>
        </h1>
        <p className="text-gray-500 md:text-xl">
          Websites engineered for speed, experience, and results.
        </p>
      </div>
      <div>
        <div className="hidden lg:block border border-sky-900  h-screen overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.4)]">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            mousewheel={{ releaseOnEdges: true }}
            pagination={{ clickable: true }}
            modules={[Mousewheel, Pagination]}
            className="h-full"
          >
            <SwiperSlide className="relative">
              <img
                src={port1}
                alt="5632377_2943195"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={port2}
                alt="6073314_3033057"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={port3}
                alt="9989298_4259666"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={port4}
                alt="10883229_4575268"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={port5}
                alt="11583234_4763473"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide className="relative">
              <img
                src={port6}
                alt="12983671_5123363"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide className="relative">
              <img
                src={port7}
                alt="13109096_5136474"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide className="relative">
              <img
                src={port8}
                alt="21701941_6518625"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:hidden w-75 h-70 lg:h-auto  overflow-hidden mx-1 border border-sky-900 rounded-2xl  shadow-[0_0_30px_rgba(14,165,233,0.4)] ">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={30}
            touchReleaseOnEdges={true}
            touchStartPreventDefault={false}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-full w-full touch-pan-y object-cover "
          >
            <SwiperSlide className="relative">
              <img
                src={port1}
                alt="5632377_2943195"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={port2}
                alt="6073314_3033057"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={port3}
                alt="9989298_4259666"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={port4}
                alt="10883229_4575268"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={port5}
                alt="11583234_4763473"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide className="relative">
              <img
                src={port6}
                alt="12983671_5123363"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide className="relative">
              <img
                src={port7}
                alt="13109096_5136474"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide className="relative">
              <img
                src={port8}
                alt="21701941_6518625"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
    </motion.div>
  );
};

export default Portfolio;
