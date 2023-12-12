/* eslint-disable react/no-unescaped-entities */
"use client";
import CustomContainer from "@/Components/CustomContainer";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Services = () => {
  const [aboutMeRef, aboutMeInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <CustomContainer>
        {/* about section  */}
        <div ref={aboutMeRef} className="overflow-hidden">
          <div>
            <motion.h1
              initial={{ opacity: 0, scale: 0, x: -500 }}
              animate={aboutMeInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="text-5xl mt-16 lg:mb-0 mb-5 font-bold md:text-start text-center"
            >
              About Me
            </motion.h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
            <motion.p
              initial={{ opacity: 0, scale: 0, x: -500 }}
              animate={aboutMeInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="text-gray-300 md:text-start text-center"
            >
              I'm passionate about developing web applications that meet
              technical requirements and deliver delightful user experiences.
              Proficient in HTML, CSS, React.js, Node.js, MongoDB, Mongoose,
              Tailwind CSS, Firebase Authentication, and JWT. Experienced in
              writing clean and maintainable code, working in a collaborative
              environment, and agile methodologies. Committed to staying
              up-to-date with the latest developments and best practices in the
              field.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 500 }}
              animate={aboutMeInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="space-y-2 mb-5"
            >
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
              <h3>
                SSC and HSC : Cantonment Public School and College, Rangpur
              </h3>
              <hr />
              <h3>Phone: (+88) 01686509495</h3>
              <hr />
              <h3>Location: Rangpur, Bangladesh</h3>
              <hr />
            </motion.div>
          </div>
        </div>
        {/* service section  */}
        <div ref={servicesRef}>
          <div>
            <motion.h1
              initial={{ opacity: 0, scale: 0, y: -200 }}
              animate={servicesInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.75 }}
              className="text-5xl mt-16 mb-10 font-bold md:text-start text-center"
            >
              Services I provide
            </motion.h1>
          </div>
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, scale: 0, y: 200 }}
                animate={
                  servicesInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.75 },
                      }
                    : {}
                }
                className="bg-gray-700 p-5 rounded-lg shadow-lg text-center h-72 flex flex-col items-center justify-center drop-shadow-glow"
              >
                <h1 className="font-bold text-3xl text-pinky">{"</>"}</h1>
                <h3 className="text-2xl my-2 font-bold">Web Design</h3>
                <p className="text-gray-300">
                  As a web designer, I combine creativity and technical skills
                  to craft visually appealing and user-friendly websites.I can
                  convert any psd or Figma file into mobile or tab responsive
                  web application.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, scale: 0, y: 200 }}
                animate={
                  servicesInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.75, delay: 0.25 },
                      }
                    : {}
                }
                className="bg-gray-700 p-5 rounded-lg shadow-lg text-center h-72 flex flex-col items-center justify-center drop-shadow-glow"
              >
                <h1 className="font-bold text-3xl text-pinky">{"</>"}</h1>
                <h3 className="text-2xl my-2 font-bold">
                  Frontend Web Development
                </h3>
                <p className="text-gray-300">
                  As a frontend web developer, I specialize in building robust
                  and interactive websites that seamlessly integrate
                  functionality and aesthetics.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, scale: 0, y: 200 }}
                animate={
                  servicesInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.75, delay: 0.5 },
                      }
                    : {}
                }
                className="bg-gray-700 p-5 rounded-lg shadow-lg text-center h-72 flex flex-col items-center justify-center drop-shadow-glow"
              >
                <h1 className="font-bold text-3xl text-pinky">{"</>"}</h1>
                <h3 className="text-2xl my-2 font-bold">
                  Full Stack Development
                </h3>
                <p className="text-gray-300">
                  Along with the Frontend I am skilled in Node JS, Express, JWT.
                  Proficient in implementing Mongo DB database. More than 6
                  months of experience with Full Stack development.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Services;
