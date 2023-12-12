"use client";
import CustomContainer from "@/Components/CustomContainer";
import Map from "@/Components/Map";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";
import toast from "react-hot-toast";
import "leaflet/dist/leaflet.css"; 
import { Helmet } from "react-helmet-async";
const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const payload = { name, email, message };
    try {
        console.log("Payload:", payload);
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
        <link rel="icon" type="image/png" href="favicon.png" sizes="16x16" />
      </Helmet>
      <CustomContainer>
        <h1 className="text-white text-center text-2xl mt-16 font-bold">
          Get in Touch
        </h1>
        <h1 className="text-white text-center text-5xl font-bold">
          Let’s discuss about an project!
        </h1>
        <div className="py-12 flex flex-col lg:flex-row gap-6 space-y-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 h-[400px] mt-4 lg:w-1/2"
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
              <Button type="submit" fullWidth color="primary">
                Send
              </Button>
            </div>
          </form>
          <div className=" lg:w-1/2">
            <Map position={[25.745132, 89.255494]} popUp={"Ayan"}></Map>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Contact;
