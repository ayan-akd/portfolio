import React from "react";
import CustomContainer from "./CustomContainer";
import photo from "./../assets/oie_BzzKp2fUSrtS.png";
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
  };
  return (
    <div className="text-white mt-12 md:mt-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <CustomContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-20 ">
          <div className="md:order-1 order-2 text-center md:text-start">
            <h1 className="text-5xl font-bold">Hi, I'm Ayan Kumar Das</h1>
            <h3 className="text-4xl font-semibold">MERN Stack Developer</h3>
            <p className="text-gray-300 mt-5">
              I'm an aspiring web developer proficient in HTML, CSS, React.js,
              Node.js, MongoDB, Mongoose, Tailwind CSS, Firebase Authentication,
              and JWT. I'm an eager learner with a passion for creating seamless
              user experiences and am ready to contribute to dynamic web
              development teams.
            </p>
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
            <Image className="rounded-full" src={photo} alt="" />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Intro;
