"use client";
import Intro from "@/Components/Intro";
import Services from "@/Components/Service";
import Skills from "@/Components/Skills";
import React from "react";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <Helmet>
        <title>Portfolio | Ayan Kumar Das</title>
        <meta name="description" content="Portfolio of Ayan Kumar Das" />
        <link rel="icon" type="image/svg" href="favicon.svg" sizes="16x16" />
      </Helmet>
      <Intro></Intro>
      <Services></Services>
      <Skills></Skills>
    </div>
  );
};

export default Home;
