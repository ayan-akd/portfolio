import CustomContainer from "@/Components/CustomContainer";
import React from "react";

const About = () => {
  return (
    <div className="text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <CustomContainer>
        {/* about section  */}
        <h1 className="text-5xl mt-16 mb-10 font-bold">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          <div>
            <h3 className="text-2xl mb-2">
              I'm Ayan Kumar Das a MERN stack web Developer.
            </h3>
            <p className="text-gray-300">
            I'm passionate about creating web applications that not only meet
              the technical requirements but also deliver a seamless and
              enjoyable user experience. With a strong foundation in HTML, CSS,
              React.js, Node.js, MongoDB, Mongoose, Tailwind CSS, Firebase
              Authentication, and JWT, I strive to contribute to dynamic web
              development teams.
            </p>
          </div>
          <div className="space-y-2 mb-5">
            <h3>Name: Ayan Kumar Das</h3>
            <hr />
            <h3>Email: <a className="text-blue-400" href="mailto:ayankumar.akd@gmail.com">ayankumar.akd@gmail.com</a></h3>
            <hr />
            <h3>Age: 22</h3>
            <hr />
            <h3>Location: Rangpur, Bangladesh</h3>
            <hr />
          </div>
        </div>
        {/* service section  */}
        <h1 className="text-5xl mt-16 mb-10 font-bold">Services I provide</h1>
      </CustomContainer>
    </div>
  );
};

export default About;
