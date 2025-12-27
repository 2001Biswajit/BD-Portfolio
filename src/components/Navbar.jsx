import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("/");

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
     setIsOpen(false);
  };

  return (
    <nav
      className=" text-white py-1 md:py-2 sticky top-0 z-100 backdrop-blur-xl  w-full bord border-sky-900"
      style={{ fontFamily: "revert" }}
    >
      <div className=" container sm:px-5 flex justify-between  items-center mx-auto py-2">
        <ul className="flex ms-5 md:ms-0 font-extrabold  font-ubuntu">
          <h1 className="me-1 text-xl md:text-2xl">BD</h1>
          <h1 className="text-yellow-300 text-xl md:text-2xl animate-pulse transition delay-75 duration-200 ease-in-out">
            Web
          </h1>
        </ul>

        <div className="md:hidden ml-auto mr-5">
          <button
            onClick={toggleMenu}
            className="active:animate-spin transition delay-75 "
          >
            {isOpen ? (
              <IoMdClose className="size-6 " />
            ) : (
              <FaBars className="size-5 " />
            )}
          </button>
        </div>

        <ul className="hidden md:flex space-x-4 md:space-x-12 text-[16px]">
          <li>
            <Link
              to={"/"}
              className={`${
                activeLink === "/" ? "text-amber-400" : "hover:text-sky-300"
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to={"/portfolio"}
              className={`${
                activeLink === "/portfolio"
                  ? "text-amber-300"
                  : "hover:text-sky-300"
              }`}
              onClick={() => handleLinkClick("/portfolio")}
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              to={"/testimonials"}
              className={`${
                activeLink === "/testimonials"
                  ? "text-amber-300"
                  : "hover:text-sky-300"
              }`}
              onClick={() => handleLinkClick("/testimonials")}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={`${
                activeLink === "/contact"
                  ? "text-amber-300"
                  : "hover:text-sky-300"
              }`}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className={`${
                activeLink === "/about"
                  ? "text-amber-300"
                  : "hover:text-sky-300"
              }`}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
          </li>
        </ul>
        <Link to={"/contact"}>
          <button
            className="hidden  md:block  text-xl font-semibold text-gray-950 py-0.5 px-3 rounded bg-sky-500 cursor-pointer hover:bg-sky-600 hover:scale-110 transition ease-in-out delay-75 duration-200"
            style={{ fontFamily: "revert" }}
          >
            Hire Me
          </button>
        </Link>

        <div
          className={`md:hidden py-4 bg-black/85  drop-blur-2xl w-full h-screen  absolute top-full left-0 ${
            isOpen
              ? "block transition-all ease-in duration-300"
              : " hidden transition-all ease-out duration-300"
          }`}
        >
          <ul className="relative text-white text-xl tracking-widest flex flex-col items-center  w-full font-sans">
            <li className="active:bg-gray-700 transition active:scale-110 border border-sky-950/80 w-full text-center py-4">
              <Link
                to={"/"}
                className={`${
                  activeLink === "/" ? "text-amber-300" : "hover:text-green-200"
                }`}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li className="active:bg-gray-700  transition active:scale-110 border border-sky-950/80 w-full text-center py-4">
              <Link
                to={"/portfolio"}
                className={`${
                  activeLink === "/portfolio"
                    ? "text-amber-300"
                    : "hover:text-green-200"
                }`}
                onClick={() => handleLinkClick("/portfolio")}
              >
                Portfolio
              </Link>
            </li>
            <li className="active:bg-gray-700  transition active:scale-110 border border-sky-950/80 w-full text-center py-4">
              <Link
                to={"/Testimonials"}
                className={`${
                  activeLink === "/Testimonials"
                    ? "text-amber-300"
                    : "hover:text-green-200"
                }`}
                onClick={() => handleLinkClick("/Testimonials")}
              >
                Testimonials
              </Link>
            </li>
            <li className="active:bg-gray-700  transition active:scale-110 border border-sky-950/80 w-full text-center py-4">
              <Link
                to={"/contact"}
                className={`${
                  activeLink === "/contact"
                    ? "text-amber-300"
                    : "hover:text-green-200"
                }`}
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </Link>
            </li>
            <li className="active:bg-gray-700  transition active:scale-110 border border-sky-950/80 w-full text-center py-4">
              <Link
                to={"/about"}
                className={`${
                  activeLink === "/about"
                    ? "text-amber-300"
                    : "hover:text-green-200"
                }`}
                onClick={() => handleLinkClick("/about")}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
