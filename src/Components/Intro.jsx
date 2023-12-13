/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CustomContainer from "./CustomContainer";
import photo from "./../assets/profile-pic.png";
import { motion as m, useMotionValue, useTransform } from "framer-motion";

import FileSaver from "file-saver";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { MdOutlineFileDownload, MdContactPhone } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const Intro = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const maxTilt = 20;

    const tiltX = (deltaY / centerY) * maxTilt;
    const tiltY = -(deltaX / centerX) * maxTilt;

    setTiltX(tiltX);
    setTiltY(tiltY);
  };
  const resetTilt = () => {
   setTiltX(0);
    setTiltY(0);
  };
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
          <div className="md:order-2 order-1" style={{ perspective: 2000 }}>
            <m.div
              style={{ x, y, rotateX: tiltX, rotateY: tiltY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="flex items-center justify-center drop-shadow-glow"
            >
              <Image className="rounded-full lg:w-3/4" src={photo} alt="" />
            </m.div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Intro;
