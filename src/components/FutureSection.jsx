import { TbPointFilled } from "react-icons/tb";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const FutureSection = () => {
  return (
    <div className="   overflow-hidden relative ">
      <motion.div
        initial={{ x: "0" }}
        whileInView={{ x: "100%" }}
        transition={{ duration:1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" bg-black z-1 top-15 left-90 w-130 h-15 absolute "
      />

      <h1
        className="relative text-2xl md:text-4xl lg:text-5xl text-amber-50 text-center font-extrabold mt-15 mb-4 md:mb-6 lg:mb-8"
        style={{ fontFamily: "ubuntu" }}
      >
        Featured <span className="text-sky-400">Work</span>
      </h1>

      <motion.h1
        initial={{y:"-100%" , opacity:0}}
        whileInView={{y:"0" , opacity:1}}
        transition={{ duration:1.5 , ease: "easeInOut"}}
        viewport={{once:true}}
        className="text-xs  md:text-xs lg:text-xl text-gray-400 font-semibold flex flex-row justify-center "
      >
        <span className="text-2xl md:text-4xl mb-4 md:mb-0  md:-mt-0.5 mt-1 me-0.5 transition-all  ease-in-out duration-75 animate-bounce  text-sky-500">
          <TbPointFilled />
        </span>
        Turning Ideas Into Digital Products
      </motion.h1>
    </div>
  );
};

export default FutureSection;
