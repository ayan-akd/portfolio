"use client"
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavbarC from "@/Components/NavbarC";
import Footer from "@/Components/Footer";
import { Toaster } from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Providers({ children }) {
  return (
   <HelmetProvider>
     <NextUIProvider>
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black h-screen">
      <Helmet>
          <title>Portfolio | Ayan Kumar Das</title>
          <meta name="description" content="Portfolio of Ayan Kumar Das" />
        </Helmet>
        <NavbarC></NavbarC>
        {children}
        <Footer></Footer>
        <Toaster />
      </div>
    </NextUIProvider>
   </HelmetProvider>
  );
}
