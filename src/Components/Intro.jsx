/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CustomContainer from "./CustomContainer";
import photo from "./../assets/profile-pic.png";
import FileSaver from "file-saver";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { MdOutlineFileDownload } from "react-icons/md";
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
          <div className="md:order-1 order-2 text-center md:text-start lg:pl-20">
            <h1 className="text-5xl font-bold">Hi, I'm Ayan Kumar Das</h1>
            <h3 className="text-4xl font-semibold mt-2">A MERN Stack Developer</h3>
            <Button
              className="my-5"
              color="primary"
              onClick={handleDownloadClick}
            >
              <MdOutlineFileDownload />
              Download Resume
            </Button>
          </div>
          <div className="md:order-2 order-1 flex items-center justify-center">
            <Image className="rounded-full lg:w-3/4" src={photo} alt="" />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Intro;
