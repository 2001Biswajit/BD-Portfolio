import testimonial from "../../testimonials";
import "swiper/css";
import "swiper/css/pagination";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <div className=" container w-full mx-auto my-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center space-y-5 overflow-hidden"
      >
        <h1
          className="text-white  brightness-200 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide "
          style={{ fontFamily: "ubuntu" }}
        >
          What{" "}
          <span className="text-sky-500 font-extrabold brightness-50 ">
            {" "}
            Clients{" "}
          </span>{" "}
          Say
        </h1>
        <h2 className="text-gray-400 md:text-xl tracking-widest">
          Real feedback from people I’ve worked with
        </h2>
      </motion.div>
      <div className="container w-full  sm:px-6 md:px-10 mx-auto">
        <div className="hidden lg:block px-0 md:px-20 lg:px-40">
          {testimonial.map((item) => (
            <div key={item.id} className=" my-8 px-5">
              <motion.div
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ duration:0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 w-full border border-sky-950 p-5 rounded-3xl"
              >
                <div className="space-y-3">
                  <div className="flex gap-6  items-center">
                    <div className="w-20 h-20 md:w-20 md:h-20  overflow-hidden border border-sky-950 lg:rounded-full rounded-3xl">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-col space-y-1">
                      <h3 className="text-xl text-sky-500 font-bold">
                        {item.name}
                      </h3>
                      <span className="text-xs text-gray-500 ">
                        {item.role}
                      </span>
                      <span>{item.st}</span>
                    </div>
                  </div>
                  <div className="md:ps-26 ps-2  ">
                    <p className="text-[18px]  text-gray-400 font-mono max-w-full md:max-w-xl">
                      {item.review}
                    </p>
                  </div>
                </div>

                <div className=" px-4 py-2  text-sm">
                  <div className="flex md:grid md:grid-cols-1 gap-5 md:gap-5 justify-start md:justify-center">
                    <div className="flex md:flex-col gap-5">
                      <FaYoutube className="text-xl text-red-500" />
                      <TbBrandFiverr className="text-xl text-[#1DBF73]" />
                      <FaSquareUpwork className="text-xl text-[#14A800]" />
                      <TbBrandLinkedinFilled className="text-xl text-[#0A66C2]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="lg:hidden ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay:1000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <div className=" px-0 md:px-20 lg:px-40">
              {testimonial.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className=" my-8 px-5">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 w-full border border-sky-950 p-5 rounded-3xl">
                      <div className="space-y-3">
                        <div className="flex gap-6  items-center">
                          <div className="w-20 h-20 md:w-20 md:h-20  overflow-hidden border border-sky-950 lg:rounded-full rounded-3xl">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-col space-y-1">
                            <h3 className="text-xl text-sky-500 font-bold">
                              {item.name}
                            </h3>
                            <span className="text-xs text-gray-500 ">
                              {item.role}
                            </span>
                            <span>{item.st}</span>
                          </div>
                        </div>
                        <div className="md:ps-26 ps-2  ">
                          <p className="text-[18px]  text-gray-400 font-mono max-w-full md:max-w-xl">
                            {item.review}
                          </p>
                        </div>
                      </div>

                      <div className=" px-4 py-2  text-sm">
                        <div className="flex md:grid md:grid-cols-1 gap-5 md:gap-5 justify-start md:justify-center">
                          <div className="flex md:flex-col gap-5">
                            <FaYoutube className="text-xl text-red-500" />
                            <TbBrandFiverr className="text-xl text-[#1DBF73]" />
                            <FaSquareUpwork className="text-xl text-[#14A800]" />
                            <TbBrandLinkedinFilled className="text-xl text-[#0A66C2]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
