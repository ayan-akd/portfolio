"use client"
import Intro from '@/Components/Intro';
import Services from '@/Components/Service';
import Skills from '@/Components/Skills';
import React from 'react';
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <Intro></Intro>
      <Services></Services>
      <Skills></Skills>
    </div>
  );
};

export default Home;