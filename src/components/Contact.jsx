import React, { useEffect, useState } from "react";
import { FcPhone } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  return (
    <>
      <div
        name="contact me"
        className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      >
        {/* {show && <Toast/> } */}
        <div className="max-w-screen-lg mx-auto" data-aos="fade-right">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 ">Submit the form below to get in touch with me</p>
        </div>
        <div className="max-w-screen-lg flex flex-col mx-auto mt-18 mb-18 md:m-auto md:flex-row gap-x-3 justify-center items-center">
          {/* Left side */}
          <div className="flex flex-col justify-center gap-y-14 mt-0 md:-mt-20">
            <div
              className="w-full flex gap-3 p-6 rounded-xl  shadow-emerald-600 shadow-lg "
              data-aos="fade-up-right"
            >
              <div>
                <FcPhone className="hover:animate-bounce" size="32px" />
              </div>
              <div>
                <h1 className="text-xl font-bold ">Phone :</h1>
                <h1 className="text-xl text-gray-500 ">+91 9482593708</h1>
              </div>
            </div>
            <div
              className="w-full flex gap-3 p-6 rounded-xl shadow-lg shadow-red-400"
              data-aos="fade-up-right"
            >
              <div>
                <SiGmail
                  className="hover:animate-bounce"
                  size="32px"
                  color="red"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Email :</h1>
                <h1 className="text-xl text-gray-500">saradgi07@gmail.com</h1>
              </div>
            </div>
            <div
              className="w-full flex gap-3 p-6 rounded-xl shadow-lg shadow-red-500"
              data-aos="fade-up-right"
            >
              <div>
                <a
                  href="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539974,77.6309395,11z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu"
                  target="_blank"
                >
                  <FaMapMarkerAlt
                    className="hover:animate-bounce"
                    size="32px"
                    color="red"
                  />
                </a>
              </div>
              <div>
                <h1 className="text-xl font-bold">Address :</h1>
                <h1 className="text-xl  text-gray-500">Bengaluru,Karnataka </h1>
              </div>
            </div>
          </div>

          {/* Right side  */}

          <div
            className="w-full flex justify-center mt-8 md:m-auto lg:-mt-5"
            data-aos="fade-up-left"
          >
            <form
              action="https://getform.io/f/2afeef8e-bb35-4c8c-980d-a1169af77978"
              method="POST"
              encType="multipart/form-data"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                placeholder="Enter your Mobile No"
                className="mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />

              <button
                type="submit"
                className="text-white hover:opacity-60 bg-gradient-to-b from-cyan-400 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 hover:cursor-pointer "
              >
                Let's Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
