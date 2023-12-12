"use client";
import CustomContainer from "@/Components/CustomContainer";
import Map from "@/Components/Map";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";
import toast from "react-hot-toast";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet-async";
import Image from "next/image";
import photo from "@/assets/image_75.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  MdEmail,
  MdOutlinePhoneInTalk,
  MdOutlineLocationOn,
} from "react-icons/md";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const payload = { name, email, message };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
        // You can redirect the user or show a success message
      } else {
        console.error("Email could not be sent:", response.statusText);
        toast.error("Email could not be sent!");
        // Handle the error (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <Helmet>
        <title>Portfolio | Contact Me</title>
        <meta name="description" content="Contact Me Page For Ayan Kumar Das" />
        <link rel="icon" type="image/svg" href="favicon.svg" sizes="16x16" />
      </Helmet>
      <CustomContainer>
        <h1 className="text-white text-center text-2xl mt-16 font-bold">
          Get in Touch
        </h1>
        <h1 className="text-white text-center text-5xl font-bold">
          Let’s discuss about a{" "}
          <span className="text-pinky font-bold">project!</span>
        </h1>
        
        <div className="py-12 flex flex-col-reverse justify-center md:flex-row gap-6 space-y-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 h-[400px] mt-32 md:mt-4 md:w-8/12 lg:w-4/12 w-full"
          >
            <Input
              name="name"
              isRequired
              label="Name"
              placeholder="Enter your name"
              type="text"
            />
            <Input
              name="email"
              isRequired
              label="Email"
              placeholder="Enter your email"
              type="email"
            />
            <Textarea
              name="message"
              minRows={5}
              variant="faded"
              label="Message"
              placeholder="Enter your Message"
              isRequired
            />
            <div className="flex gap-2 justify-end">
              <Button type="submit" fullWidth color="danger">
                Send
              </Button>
            </div>
          </form>
          {/* profile section  */}
        <div className="md:w-4/12 w-full my-12 flex justify-center ">
          <div className="h-56 w-72 absolute flex justify-center items-center">
            <Image
              className="object-cover h-20 w-20 rounded-full"
              src={photo}
              alt=""
            />
          </div>

          <div
            className="
          h-56
          mx-4
          w-5/6
          bg-pinky
          rounded-3xl
          shadow-md
          sm:w-80 sm:mx-0
        "
          >
            <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5"></div>

            <div
              className="
            bg-white
            h-auto
            w-full
            rounded-3xl
            flex flex-col
            justify-around
            items-center
            shadow-xl
          "
            >
              <div className="w-full mt-12 mb-6 px-2 flex flex-col justify-center items-center space-y-1">
                <h1 className="font-bold">Ayan Kumar Das</h1>
                <h1 className="text-gray-700 text-sm flex items-center gap-1">
                  <MdEmail />
                  <a href="mailto:ayankumar.akd@gmail.com">
                    ayankumar.akd@gmail.com
                  </a>
                </h1>
                <h1 className="text-gray-700 text-sm flex items-center gap-1">
                  <MdOutlinePhoneInTalk /> (+88) 01686509495
                </h1>
                <h1 className="text-gray-700 text-sm text-justify flex items-center gap-1">
                  <MdOutlineLocationOn /> Rangpur, Bangladesh
                </h1>
                <div className="grid grid-flow-col gap-4 text-3xl pt-2 text-pinky">
                  <a target="_blank" href="https://www.facebook.com/akd444/">
                    <FaFacebook></FaFacebook>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/akd420v2/">
                    <FaInstagram></FaInstagram>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ayan-kumar-akd/"
                  >
                    <FaLinkedin></FaLinkedin>
                  </a>
                  <a target="_blank" href="https://github.com/ayan-akd">
                    <FaGithub></FaGithub>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="pb-12">
          <h1 className="text-center text-white text-3xl mb-5">My Location</h1>
            <Map position={[25.745132, 89.255494]} popUp={"Ayan"}></Map>
          </div>
      </CustomContainer>
    </div>
  );
};

export default Contact;
