import { Link } from "react-router-dom";

import Card from "./Card";
import card1 from "../../public/Card/card (1).jpg";
import card2 from "../../public/Card/card (2).jpg";
import card3 from "../../public/Card/card (3).jpg";
import card4 from "../../public/Card/card (4).jpg";
import card5 from "../../public/Card/card (5).jpg";
import card6 from "../../public/Card/card (6).jpg";
import card7 from "../../public/Card/card (7).jpg";
import card8 from "../../public/Card/card (8).jpg";
import herlogo1 from "../../public/herologo/herologo (1).png";
import herlogo2 from "../../public/herologo/herologo (6).png";
import herlogo3 from "../../public/herologo/herologo (5).png";
import herlogo4 from "../../public/herologo/herologo (4).png";
import herlogo5 from "../../public/herologo/herologo (3).png";
import herlogo6 from "../../public/herologo/herologo (2).png";


import FutureSection from "./FutureSection";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div>
      <div className="container px-5 sm:px-2 mx-auto w-full relative ">
        <video
          src="../../public/heroVideo/3130284-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute object-cover bg-center h-150 "
        ></video>
        <div className="absolute inset-2  bg-black/80 w-full h-full "></div>
        <div className="max-h-screen relative md:flex md:flex-col items-center justify-center h-full pt-7 md:py-15  md:px-15 space-t-5 md:space-y-6 text-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-amber-50 font-extrabold lg:tracking-wide  flex flex-col md:block text-4xl md:text-6xl lg:text-7xl  ">
              Create a <span className="text-sky-500"> Portfolio</span>
              <span className="sm:text-sky-500 text-amber-400"> Website </span>
              That Stants Out
            </h1>
            <p className="text-[12px] lg:text-xm text-gray-400  px-4 my-4">
              Showcase your work and attract clients. Build and promote your
              online portfolio using powerfull
              <span className="text-amber-400 font-bold"> AI </span> ,
              <span className="text-purple-500 font-bold">Design</span> and
              business tools.
            </p>
          </motion.div>
          <div
            className=" lg:mt-15 lg:px-30  items-center h-full w-full grid 
             grid-cols-3
              sm:grid-cols-3
              md:grid-cols-4
               lg:grid-cols-6
                gap-4
                 sm:gap-6
                lg:gap-8  justify-items-center my-5 "
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "tween",
                stiffness: 500,
                damping: 20,
                mass: 0.5,
                delay: 0.5,
                ease: "easeIn",
                repeat: 0,
              }}
              viewport={{ once: true }}
              className="w-15 h-15 lg:w-20  lg:h-20 overflow-hidden border border-sky-950 hover:border-sky-800 transition duration-200 ease-in-out p-2 rounded-2xl"
            >
              <img src={herlogo1} alt="herologo" className="object-cover p-1" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "tween",
                stiffness: 300,
                damping: 15,
                mass: 0.5,
                delay: 0.8,
                ease: "easeIn",
              }}
              viewport={{ once: true }}
              className="w-15 h-15  lg:w-20 lg:h-20 overflow-hidden border border-sky-950 hover:border-sky-800 transition duration-200 ease-in-out p-2 rounded-2xl "
            >
              <img src={herlogo2} alt="herologo" className="object-cover"/>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "tween",
                stiffness: 300,
                damping: 15,
                mass: 0.5,
                delay: 1,
                ease: "easeIn",
              }}
              viewport={{ once: true }}
              className="w-15 h-15  lg:w-20 lg:h-20 overflow-hidden border border-sky-950 hover:border-sky-800 transition duration-200 ease-in-out p-2 rounded-2xl"
            >
              <img src={herlogo3} alt="herologo" className="object-cover"/>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "tween",
                stiffness: 300,
                damping: 15,
                mass: 0.5,
                delay: 1.2,
                ease: "easeIn",
              }}
              viewport={{ once: true }}
              className="w-15 h-15  lg:w-20 lg:h-20 overflow-hidden border border-sky-950 hover:border-sky-800 transition duration-200 ease-in-out p-2 rounded-2xl"
            >
              <img src={herlogo4} alt="herologo" className="object-cover"/>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "tween",
                stiffness: 300,
                damping: 15,
                mass: 0.5,
                delay: 1.4,
                ease: "easeIn",
              }}
              viewport={{ once: true }}
              className="w-15 h-15  lg:w-20 lg:h-20 overflow-hidden border border-sky-950 hover:border-sky-800 transition duration-200 ease-in-out p-2 rounded-2xl "
            >
              <img src={herlogo5} alt="herologo" className="object-cover"/>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "tween",
                stiffness: 300,
                damping: 15,
                mass: 0.5,
                delay: 1.6,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="w-15 h-15 lg:w-20 lg:h-20 overflow-hidden border border-sky-950 hover:border-sky-800 transition duration-200 ease-in-out p-2 rounded-2xl "
            >
              <img src={herlogo6} alt="herologo" className="object-cover"/>
            </motion.div>
          </div>
          <Link to={"/contact"}>
            <div className="relative z-50 px-1 lg:px-0.5 py-0.5  lg:my-15 overflow-hidden rounded-full my-10 w-50 mx-auto">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  mass: 0.5,
                  delay: 2.2,
                  duration: 0.5,
                  ease: "easeIn",
                  repeat: 0,
                }}
                className="absolute bg-[conic-gradient(blue,blue,black,red,red,black)] w-50 h-50 rounded-full top-1/2 left-1/2
                 -translate-x-1/2 -translate-y-1/2 animate-spin blur-2xl transition ease-linear duration-100"
              ></motion.span>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  mass: 0.5,
                  delay: 2.2,
                  duration: 0.5,
                  ease: "easeIn",
                  repeat: 0,
                }}
                className="relative w-full px-5 py-2 z-50 font-semibold   text-xm md:text-xl conBtn text-white  rounded-3xl hover:bg-sky-500 transition duration-400 ease-in-out hover:scale-105 active:bg-green-800 active:scale-105 hover:animate-none"
              >
                <span className="font-semibold cursor-pointer tracking-wider">
                  Get Started
                </span>
              </motion.button>
            </div>
          </Link>
        </div>

        <FutureSection className="mt-10"></FutureSection>
      </div>
      <div className="container mx-auto md:py-10 px-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 h-full">
          <Card
            image={card1}
            name="Modern Landing Page Design"
            des="A clean and responsive landing page designed to showcase product value and improve user engagement."
            tag1="React"
            tag2="Tailwind CSS"
            tag3="Framer Motion"
          />
          <Card
            image={card2}
            name="Inspired by Nature"
            des="A visually soothing landing page that reflects the beauty of nature through minimal design and soft colors."
            tag1="React"
            tag2="Tailwind CSS"
            tag3="Framer Motion"
          />
          <Card
            image={card3}
            name="Explore the World"
            des="A visually engaging travel landing page crafted to inspire journeys and unforgettable experiences."
            tag1="React"
            tag2="Tailwind CSS"
            tag3="Framer Motion"
          />
          <Card
            image={card4}
            name="Explore the World With Us"
            des="Discover beautiful destinations and plan your next unforgettable journey."
            tag1="React"
            tag2="Tailwind CSS"
            tag3="Framer Motion"
          />
          <Card
            image={card5}
            name="Discover the Forest"
            des="Step into nature’s serenity and reconnect with the wild."
            tag1="React"
            tag2="Tailwind CSS"
            tag3="Framer Motion"
          />
          <Card
            image={card6}
            name="Trusted Medical Care for You"
            des="Providing quality healthcare services with experienced doctors and modern facilities."
            tag1="React"
            tag2="Tailwind CSS"
            tag3="Framer Motion"
          />
          <Card
            image={card7}
            name="Your Health, Our Priority"
            des="Quality healthcare solutions designed for patients and families."
            tag1="React"
            tag2="Tailwind CSS"
            tag3="Framer Motion"
          />
          <Card
            image={card8}
            name="Travel Beyond Boundaries"
            des="Discover new places, experience different cultures, and create memories that last a lifetime."
            tag1=" React"
            tag2="Tailwind CSS"
            tag3="Framer Motion"
          />
        </div>
      </div>
      <div className="my-20">
        <About></About>
      </div>
      <div className="lg:my-40">
        <Portfolio></Portfolio>
      </div>
      <div className="lg:mt-30">
        <Testimonials></Testimonials>
      </div>
      <div className="lg:my-30">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default HeroSection;
