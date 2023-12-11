import CustomContainer from "@/Components/CustomContainer";
import { Button, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <CustomContainer>
        <h1 className="text-white text-center text-2xl mt-16 font-bold">
          Get in Touch
        </h1>
        <h1 className="text-white text-center text-5xl font-bold">
          Let’s discuss about an project!
        </h1>
        <div className="py-12">
          <form className="flex flex-col gap-4 h-[300px]">
            <Input
              isRequired
              label="Name"
              placeholder="Enter your name"
              type="password"
            />
            <Input
              isRequired
              label="Email"
              placeholder="Enter your email"
              type="email"
            />
            <Textarea
              variant="faded"
              label="Message"
              placeholder="Enter your Message"
              isRequired
            />
            <div className="flex gap-2 justify-end">
              <Button fullWidth color="primary">
                Send
              </Button>
            </div>
          </form>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Contact;
