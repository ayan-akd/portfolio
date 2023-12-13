import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion as m } from "framer-motion";
const Footer = () => {
  return (
    <div className="bg-gray-700 text-white text-center min-h-[100px] pb-10">
      <div className="py-10">
        <nav className="flex flex-col items-center">
          <header className="text-2xl lg:text-4xl mb-1 lg:mb-5">
            Social <span className="font-semibold text-pinky">Links</span>
          </header>
          <div className="grid grid-flow-col gap-4 text-3xl text-pinky">
            <m.a
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            target="_blank" href="https://www.facebook.com/akd444/">
              <FaFacebook></FaFacebook>
            </m.a>
            <m.a 
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            target="_blank" href="https://www.instagram.com/akd420v2/">
              <FaInstagram></FaInstagram>
            </m.a>
            <m.a
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            target="_blank" href="https://www.linkedin.com/in/ayan-kumar-akd/">
              <FaLinkedin></FaLinkedin>
            </m.a>
            <m.a
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            target="_blank" href="https://github.com/ayan-akd">
              <FaGithub></FaGithub>
            </m.a>
          </div>
        </nav>
      </div>
      <h2>Build using Next.js and Next UI.</h2>
      <h1>Copyright ©2023 All right reserved by Ayan Kumar Das</h1>
    </div>
  );
};

export default Footer;
