/* eslint-disable react/no-unescaped-entities */
import CustomContainer from "@/Components/CustomContainer";
import React from "react";

const Services = () => {
  return (
    <div className="text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <CustomContainer>
        {/* about section  */}
        <h1 className="text-5xl mt-16 lg:mb-0 mb-5 font-bold md:text-start text-center">
          About Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          <div>
            <p className="text-gray-300 md:text-start text-center">
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
            <h3>
              Email:{" "}
              <a
                className="text-blue-400"
                href="mailto:ayankumar.akd@gmail.com"
              >
                ayankumar.akd@gmail.com
              </a>
            </h3>
            <hr />
            <h3>Age: 22</h3>
            <hr />
            <h3>Education:</h3>
            <h3>
              {" "}
              B.Sc in Computer Science and Engineering (CSE) (2020-Present)
              <br />
              Rangpur Engineering College, Rangpur
            </h3>
            <h3>SSC and HSC : Cantonment Public School and College, Rangpur</h3>
            <hr />
            <h3>Location: Rangpur, Bangladesh</h3>
            <hr />
          </div>
        </div>
        {/* service section  */}
        <h1 className="text-5xl mt-16 mb-10 font-bold md:text-start text-center">
          Services I provide
        </h1>
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center mb-12">
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-center h-72 flex flex-col items-center justify-center">
              <h1 className="font-bold text-3xl">{"</>"}</h1>
              <h3 className="text-2xl my-2">Web Design</h3>
              <p className="text-gray-300">
                As a web designer, I combine creativity and technical skills to
                craft visually appealing and user-friendly websites.I can
                convert any psd or Figma file into mobile or tab responsive web
                application.
              </p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-center h-72 flex flex-col items-center justify-center">
              <h1 className="font-bold text-3xl">{"</>"}</h1>
              <h3 className="text-2xl my-2">Frontend Web Development</h3>
              <p className="text-gray-300">
                As a frontend web developer, I specialize in building robust and
                interactive websites that seamlessly integrate functionality and
                aesthetics.
              </p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-center h-72 flex flex-col items-center justify-center">
              <h1 className="font-bold text-3xl">{"</>"}</h1>
              <h3 className="text-2xl my-2">Full Stack Development</h3>
              <p className="text-gray-300">
                Along with the Frontend I am skilled in Node JS, Express, JWT.
                Proficient in implementing Mongo DB database. More than 6 months
                of experience with Full Stack development.
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Services;
