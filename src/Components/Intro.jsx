/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import CustomContainer from "./CustomContainer";
import photo from "./../assets/profile-pic.png";
import { motion as m } from "framer-motion";

import FileSaver from "file-saver";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { MdOutlineFileDownload, MdContactPhone } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const Intro = () => {
  const handleDownloadClick = () => {
    const dummyAnchor = document.createElement("a");
    dummyAnchor.download = "Ayan_Kumar_Das_Resume.pdf";
    dummyAnchor.href =
      "https://drive.usercontent.google.com/download?id=1bS_XY8-sQIApl6hg1LVmMSatbI4OcNaM";
    document.body.appendChild(dummyAnchor);
    dummyAnchor.click();
    document.body.removeChild(dummyAnchor);
    // FileSaver.saveAs(
    //   `${process.env.REACT_APP_CLIENT_URL}/static/resume.pdf`,
    //   "Ayan_Kumar_Das_Resume.pdf"
    // );
  };
  return (
    <div className="text-white mt-12 md:mt-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <CustomContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-20 ">
          <div className="md:order-1 order-2 text-center md:text-start lg:pl-20 overflow-hidden">
            <m.h1
              initial={{ opacity: 0, scale: 0, x: -500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="text-5xl font-bold"
            >
              Hi, I'm Ayan Kumar Das
            </m.h1>
            <m.h3
              initial={{ opacity: 0, scale: 0, x: -500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="text-4xl font-semibold mt-2"
            >
              A MERN Stack{" "}
              <span className="drop-shadow-glow text-pinky font-bold">
                Developer
              </span>
            </m.h3>
            <div className="flex lg:justify-start flex-wrap justify-center items-center gap-1 my-5">
              <m.div
                initial={{ opacity: 0, scale: 0, x: -500 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.5 }}
              >
                <Button color="danger" onClick={handleDownloadClick}>
                  <MdOutlineFileDownload />
                  Download Resume
                </Button>
              </m.div>
              <m.div
                initial={{ opacity: 0, scale: 0, x: -500 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.75 }}
              >
                <Link href={"/projects"}>
                  <Button color="danger">
                    See Projects
                    <FaArrowRight />
                  </Button>
                </Link>
              </m.div>
              <m.div
                initial={{ opacity: 0, scale: 0, x: -500 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 1 }}
              >
                <Link href={"/contact"}>
                  <Button color="danger">
                    <MdContactPhone />
                    Contact
                  </Button>
                </Link>
              </m.div>
            </div>
          </div>
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="md:order-2 order-1 flex items-center justify-center drop-shadow-glow"
          >
            <Image className="rounded-full lg:w-3/4" src={photo} alt="" />
          </m.div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Intro;
