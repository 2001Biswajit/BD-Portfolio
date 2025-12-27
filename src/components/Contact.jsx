import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebase.config";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import {motion} from "motion/react"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const whatsappMessage =
    "Hello, I visited your portfolio and would like to discuss a potential project with you. Looking forward to your response.";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });

      alert("Message has been submitted ✅");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }} 
    
    className="container md:min-w-screen my-5 lg:my-15  z-50 ">
      <h2
        className="md:text-6xl text-3xl font-extrabold text-white text-center  mb-4 md:mb-8"
        style={{ fontFamily: "ubuntu" }}
      >
        Get In <span className="text-sky-400 font">Touch</span>
      </h2>
      <p className="text-gray-400 text-center text-xs md:text-xm mb-3 md:mb-1 px-8">
        Have a question or want to work together ? Fill out the form and I’ll
        get back to you soon.
      </p>
      <div className=" flex flex-col md:flex-row  overflow-hidden w-auto">
        <div className="md:w-125 md:h-full  sm:items-center h-auto justify-items-center md:ms-70 md:mx-0 px-10 md:px-0 ">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 items-center"
            style={{ fontFamily: "ubuntu" }}
          >
            <label
              htmlFor="name"
              className=" text-white md:me-60 left-auto font-semibold"
            >
              Name
              <span className="text-red-500"> *</span>
            </label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="font-extralight text-xs border border-sky-950 hover:border-2 hover:border-sky-900 transition ease-in-out duration-400 me-auto p-3 md:w-100 w-65 rounded placeholder-gray-400 mt-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300
             outline-none"
              required
            />
            <br />
            <label
              htmlFor="email"
              className="text-white md:me-60 font-semibold"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-extralight text-xs border border-sky-950 hover:border-2 hover:border-sky-900 transition ease-in-out duration-400 p-3 w-full md:w-100 rounded placeholder-gray-400 mt-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300
             outline-none"
              required
            />
            <br />
            <label
              htmlFor="message"
              className="text-white md:me-50 font-semibold"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <br />
            <textarea
              id="message"
              placeholder="Tell me about your project or idea..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="font-extralight text-xs border border-sky-950 p-1  w-full md:w-100  h-20 rounded placeholder-gray-400 mt-2 hover:border-2 hover:border-sky-900 transition ease-in-out duration-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300
             outline-none"
              required
            ></textarea>
            <br />
            <button
              type="submit"
              disabled={loader}
              className={`px-12 py-2 text-shadow-black text-2xl font-bold text-center  rounded block md:mx-auto cursor-pointer hover:scale-110 hover:bg-sky-700 transition ease-in-out duration-300 ${
                loader ? "bg-gray-400" : "bg-sky-600"
              }`}
              style={{ fontFamily: "robot" }}
            >
              {loader ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <div className=" w-auto h-auto pt-9 md:px-0 px-4 ">
          <div className=" border p-8 border-sky-950 rounded-2xl hover:border-2 hover:border-sky-900 transition ease-in-out duration-400">
            <h2
              className="text-amber-50 md:text-2xl text-xl font-bold font-ubuntu text-center"
              style={{ fontFamily: "ubuntu" }}
            >
              Contact <span className="text-amber-400">Info</span> .
            </h2>
            <br />
            <a
              href={`mailto:dasb34431@gmail.com?subject=${encodeURIComponent(
                "Project Inquiry"
              )}&body=${encodeURIComponent(
                "Hello, I visited your portfolio and would like to discuss a potential project with you. Looking forward to your response."
              )}`}
              className="text-gray-400  flex items-center gap-2 mb-1 hover:text-sky-500"
              style={{ fontFamily: "ubuntu" }}
            >
              <HiOutlineMail className="text-sky-400 text-xl" />
              dasb34431@gmail.com
            </a>
            <a
              href={`https://wa.me/918637359958?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 flex items-center gap-2 mb-1 hover:text-sky-500"
              style={{ fontFamily: "ubuntu" }}
            >
              <FaWhatsapp className="text-sky-400 text-xl" />
              +91 8637 3599 58
            </a>
            <h3 className="text-amber-50 text-2xl font-semibold text-center mb-5">
              Join Us
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-sky-600 text-2xl transition-transform duration-300 hover:scale-125"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-sky-600 text-2xl transition-transform duration-300 hover:scale-125"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
