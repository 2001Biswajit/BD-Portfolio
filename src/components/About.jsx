// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { RiReactjsFill } from "react-icons/ri";
import aboutpic from "../../public/abt_pic/WhatsApp Image 2025-12-28 at 1.56.10 AM.jpeg"
const About = () => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
    >
      <div
        
        className=" lg:items-center text-center lg:justify-center lg:mb-15  space-y-5 mx-10"
      >
        <h1
          className="text-2xl inline-block md:text-4xl lg:text-5xl text-center text-white font-extrabold mt-5 md:mt-8 lg:mt-12"
          style={{ fontFamily: "ubuntu" }}
        >
          Crafting Digital <span className="text-sky-500"> Experiences</span>
        </h1>
        <p
          className="text-gray-500 lg:text-xl "
          style={{ fontFamily: "ubuntu" }}
        >
          Creating digital experiences with design and code
        </p>
      </div>
      <div className="container  lg:mx-auto px-5 md:px-15 lg:w-full lg:px-20 lg:ps-40 flex items-center justify-center mt-10">
        <div className="border border-sky-950  rounded-4xl flex flex-col lg:flex-row items-center p-5 md:p-10 lg:p-8 lg:me-15 gap-4 lg:gap-5 shadow-xl  shadow-sky-400/5 lg:h-full">
          <div className="w-40 h-40 md:w-55 md:h-55 lg:w-85 lg:h-60 rounded-full  lg:border lg:border-sky-500 bg-cover  overflow-hidden flex items-center justify-center md:mb-4 hover:scale-90 transition-all duration-200  relative hover:border-0">
            <span className="absolute inset-0 rounded-full lg:hover:border-2 border-3 lg:border-0 border-transparent border-b-pink-500 border-r-amber-300 border-t-blue-600 border-l-red-600 transition-all animate-spin lg:animate-none lg:hover:animate-spin"></span>
            <img
              src={aboutpic}
              alt="card (10)"
              className="w-35 h-35 md:w-50 md:h-50 lg:w-55 lg:h-54   rounded-full object-cover hover:scale-110 transition-all duration-300 "
            />
          </div>
          <div
            className=" lg:h-auto lg:p-5 w-full items-center"
            style={{ fontFamily: "ubuntu" }}
          >
            <div className=" space-y-3 text-left">
              <h3 className="text-white font-bold text-xl inline-block">
                Hi, I’m <span className="text-sky-400 ">Biswajit Das</span> , a
                frontend web developer specializing in React-based modern
                websites.
              </h3>
              <p className="text-gray-500 text-xm font-bold">
                I build fast, responsive, and scalable user interfaces with a
                strong focus on performance, clean code, and user experience.
                From landing pages to full-scale web applications, I turn
                designs into smooth, functional digital products.
              </p>
              <span className="text-gray-500 text-xm font-bold">
                If you’re looking for a frontend developer who understands both
                design and development, you’re in the right place.
              </span>
              <h4 className=" text-white font-bold inline-block mt-3 tracking-wide">
                Let’s Build Something{" "}
                <span className="text-amber-300 text-xl">Powerful</span> With
                <span className="text-sky-500 text-xl font-bold  inline-block text-center">
                  <RiReactjsFill className="ms-1 text-2xl lg:text-3xl inline-block drop-shadow-[0_0_2px_rgba(56,189,248,0.6)] transition-all  animate-spin [animation-duration:3s]" />{" "}
                  React
                </span>
                .
              </h4>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
