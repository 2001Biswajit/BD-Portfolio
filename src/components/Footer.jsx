import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImYoutube } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function Footer() {
  const [activeLink, setActiveLink] = useState("/");

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className=" pt-10 w-full overflow-hidden absolute ">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative  grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 mx-auto w-70 lg:w-250    rounded-2xl  top-10 overflow-hidden bg-[url('../../public/footer/andrew-kliatskyi-P82xoqgfL7Q-unsplash.jpg')] bg-cover bg-center border border-sky-950"
      >
        <div className="p-5 space-y-3 bg-black/40 ">
          <h2
            className="text-white font-extrabold text-2xl"
            style={{ fontFamily: "initial" }}
          >
            Build smarter digital products with modern UI & performance
          </h2>
          <p className="font-mono text-sm text-gray-400">
            We design and develop fast, scalable, and user-friendly web
            experiences that help businesses grow.
          </p>
        </div>
        <div className=" ps-3 lg:py-5 overflow-hidden bg-sky-950/30">
          <div className="pt-6 lg:pt-20  text-start">
            <h4 className="pe-10 font-mono text-sm text-gray-500">
              I design and develop responsive, high-performance web interfaces
              using modern technologies like React and Tailwind CSS.
            </h4>
            <br />
            <div className="flex gap-3 lg:gap-6 overflow-hidden flex-col lg:flex-row text-center items-center justify-center lg:justify-normal space-y-3 py-4">
              <Link to={"./Contact"}>
                <motion.button
                  variants={{
                    initial: {},
                    hover: {},
                  }}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 1.1, backgroundColor: "#0369A1" }}
                  transition={{ type: "spring", stiffness: 600 }}
                  className="relative overflow-hidden border border-sky-700 cursor-pointer px-8 py-3 rounded-xl flex items-center gap-2 text-white"
                >
                  <motion.span
                    variants={{
                      initial: { y: "100%" },
                      hover: { y: "0%" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-sky-500"
                  />
                  <span className="z-10 flex items-center gap-2">
                    Get Started
                    <motion.span
                      whileInView={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-[20px]"
                    >
                      <MdOutlineDoubleArrow />
                    </motion.span>
                  </span>
                </motion.button>
              </Link>

              <Link
                to={"./portfolio"}
                className="flex gap-2 "
                onClick={() => handleLinkClick("./portfolio")}
              >
                <motion.button
                  variants={{
                    initial: {},
                    hover: {},
                  }}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 1.1, backgroundColor: "#0369A1" }}
                  transition={{ type: "spring", stiffness: 600 }}
                  className="relative overflow-hidden border border-sky-700 cursor-pointer px-8 py-3 rounded-xl flex items-center gap-2 text-white lg:mb-3"
                >
                  <motion.span
                    variants={{
                      initial: { y: "100%" },
                      hover: { y: "0%" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-sky-600 "
                  />
                  <span className="relative flex gap-2 z-10 ">
                    View my work
                    <motion.span
                      whileInView={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-[20px]"
                    >
                      <FaArrowAltCircleUp className="my-auto" />
                    </motion.span>
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <div className=" w-full  bg-sky-950/50 overflow-hidden ">
        <div className="grid grid-cols-1 lg:grid-cols-4 px-10 w-full h-full lg:gap-4 ">
          <div className="  lg:ps-25 flex flex-col pt-30 gap-3">
            <ul className="flex lg:ms-5 md:ms-0 font-extrabold  font-ubuntu">
              <h1 className="me-1 text-xl md:text-2xl">BD</h1>
              <h1 className="text-yellow-300 text-xl md:text-2xl">Web</h1>
            </ul>
            <p className="text-sm text-gray-500 font-serif">
              Delivering modern frontend solutions with clean design and smooth
              animations.
            </p>
            <ul className="flex gap-6 my-2">
              <li className="bg-blue-700 rounded-2xl cursor-pointer hover:scale-125  transition duration-100 ease-in-out">
                <a
                  href="https://www.facebook.com/rsavi.das"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-3xl" />
                </a>
              </li>
              <li className=" text-green-600 cursor-pointer hover:scale-125  transition duration-100 ease-in-out">
                <a
                  href="https://wa.me/918637359958?text=Hello%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>
          <div className="  lg:ps-25 flex flex-col py-20 lg:pt-30 gap-5">
            <h2 className="font-semibold text-xl tracking-wider">
              Quick Links
            </h2>
            <ul className="space-y-4">
              <li className="tracking-widest text-gray-400">
                <Link
                  to={"/"}
                  className={`  ${
                    activeLink === "/" ? "text-amber-400" : "hover:text-sky-500"
                  }`}
                  onClick={() => handleLinkClick("/")}
                >
                  Home
                </Link>
              </li>

              <li className="tracking-widest text-gray-400">
                <Link
                  to={"/portfolio"}
                  className={`  ${
                    activeLink === "/portfolio"
                      ? "text-amber-400"
                      : "hover:text-sky-500"
                  }`}
                  onClick={() => handleLinkClick("/portfolio")}
                >
                  Portfolio
                </Link>
              </li>

              <li className="tracking-widest text-gray-400">
                <Link
                  to={"/testimonials"}
                  className={` ${
                    activeLink === "/testimonials"
                      ? "text-amber-400"
                      : "hover:text-sky-400"
                  }`}
                  onClick={() => handleLinkClick("/testimonials")}
                >
                  Testimonials
                </Link>
              </li>
              <li className="tracking-widest text-gray-400">
                <Link
                  to={"/contact"}
                  className={`  ${
                    activeLink === "/contact"
                      ? "text-amber-400"
                      : "hover:text-sky-500"
                  }`}
                  onClick={() => handleLinkClick("/contact")}
                >
                  Contact
                </Link>
              </li>
              <li className="tracking-widest text-gray-400">
                <Link
                  to={"/about"}
                  className={`${
                    activeLink === "/about"
                      ? "text-amber-400"
                      : "hover:text-sky-500"
                  }`}
                  onClick={() => handleLinkClick("/about")}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="  lg:ps-25 flex flex-col  lg:pt-30 gap-5">
            <h2 className="font-bold text-xl  tracking-wider">Services</h2>
            <ul className="space-y-5">
              <li className="tracking-widest text-gray-400">Documentation</li>
              <li className="tracking-widest text-gray-400">FAQ</li>
              <li className="tracking-widest text-gray-400">Support</li>
            </ul>
          </div>
          <div className=" lg:ps-25 flex flex-col py-20 lg:pt-30 gap-5">
            <h2 className="font-bold text-xl  tracking-wider">Contact</h2>
            <ul className="space-y-5">
              <motion.li
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, color: "#00A6F4" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex items-center gap-2 tracking-widest text-gray-400 cursor-pointer"
              >
                <span className="text-xl">
                  <FaTwitter className="text-sky-500" />
                </span>
                Twitter
              </motion.li>
              <motion.li
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, color: "#00A6F4" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex items-center gap-2 cursor-pointer tracking-widest text-gray-400"
              >
                <span className="text-xl">
                  <FaLinkedinIn className="text-sky-400" />
                </span>
                LinkedIn
              </motion.li>
              <motion.li
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, color: "#00A6F4" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex items-center gap-2 cursor-pointer tracking-widest text-gray-400"
              >
                <span className="text-xl">
                  <ImYoutube className="text-red-600 " />
                </span>
                YouTube
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" py-4 bg-gray-900">
        <h5 className="text-xs text-center px-10 -tracking-tighter justify-center lg:flex text-gray-500 font-serif">
         © 2025 Biswajit Das.<span>All rights reserved.
        Developed by <span className="text-sky-600">Biswajit Das</span></span>.
        </h5>
      </div>
    </div>
  );
}

export default Footer;
