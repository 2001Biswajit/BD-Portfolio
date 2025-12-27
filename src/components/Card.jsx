// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { FaReact } from "react-icons/fa";

const Card = ({ image, name,des,tag1 , tag2 , tag3 }) => {
  return (
    <motion.div

     initial={{scale:0}}
     whileInView={{scale:1}}
     transition={{ type:"spring", duration:1, ease:"easeInOut"}}
     viewport={{once:true}}
     
     className="rounded-xl overflow-hidden  shadow-lg bg-gray-900 hover:bg-gray-700 space-y-3">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover size-5 hover:scale-110 transition duration-300"
      />

      <div className="p-2 mt-3">
        <h3 className="text-white text-[18px] font-semibold ">
          {name}
        </h3>
        <h4 className="text-sm my-4 text-gray-500">{des}</h4>
        <div className="flex space-x-4 text-[12px] py-2">
           <p className="bg-sky-950 px-1 flex items-center rounded"> <span><FaReact /></span> {tag1} </p>
           <p className="bg-sky-950 px-1   rounded"> #{tag2} </p>
           <p className="bg-sky-950 px-1 rounded"> #{tag3} </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

