"use client"
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavbarC from "@/Components/NavbarC";
import Footer from "@/Components/Footer";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <NextUIProvider>
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black h-screen">
        <NavbarC></NavbarC>
        {children}
        <Footer></Footer>
        <Toaster />
      </div>
    </NextUIProvider>
  );
}
