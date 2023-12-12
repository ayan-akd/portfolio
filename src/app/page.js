"use client";
import Intro from "@/Components/Intro";
import Services from "@/Components/Service";
import Skills from "@/Components/Skills";
import React from "react";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <Helmet>Portfolio | Ayan Kumar Das</Helmet>
      <Intro></Intro>
      <Services></Services>
      <Skills></Skills>
    </div>
  );
};

export default Home;
