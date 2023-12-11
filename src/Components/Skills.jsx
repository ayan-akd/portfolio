import CustomContainer from "./CustomContainer";
import html from "./../assets/icons/html.png";
import css from "./../assets/icons/css.png";
import js from "./../assets/icons/js.png";
import react from "./../assets/icons/react.png";
import tailwind from "./../assets/icons/tailwind.png";
import node from "./../assets/icons/nodejs-logo.png";
import express from "./../assets/icons/express.png";
import firebase from "./../assets/icons/firebase.png";
import jwt from "./../assets/icons/jwt.png";
import github from "./../assets/icons/github.png";
import figma from "./../assets/icons/figma.png";
import netlify from "./../assets/icons/netlify.png";
import vercel from "./../assets/icons/logo-vercel.svg";
import vscode from "./../assets/icons/vscode.png";
import mongodb from "./../assets/icons/mongodb.png";
import git from "./../assets/icons/git.png";
import mysql from "./../assets/icons/mysql.png";
import lott from "./../assets/lottie2.json";
import Image from "next/image";
import Lottie from "lottie-react";

const Skills = () => {
  return (
    <div className="text-white pt-20">
      <CustomContainer>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-4/12 flex flex-col justify-center items-center">
            <h1 className="md:text-start text-center text-5xl mt-16 pb-12 font-bold">
              My Skills
            </h1>
            <div className="lg:w-auto md:w-2/4">
              <Lottie animationData={lott} />
            </div>
          </div>
          <div className="lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center pb-12">
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-center h-96 flex flex-col items-center justify-center">
              <h3 className="text-2xl mb-5">Frontend</h3>
              <div className="flex flex-wrap gap-6 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={html} alt="" />
                  <p>HTML</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={css} alt="" />
                  <p>CSS</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={js} alt="" />
                  <p>JavaScript</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={tailwind} alt="" />
                  <p>Tailwind CSS</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-10" src={react} alt="" />
                  <p>React.JS</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-center h-96 flex flex-col items-center justify-center">
              <h3 className="text-2xl mb-5">Backend</h3>
              <div className="flex flex-wrap gap-6 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={node} alt="" />
                  <p>Node JS</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={express} alt="" />
                  <p>Express</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={firebase} alt="" />
                  <p>Firebase</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={jwt} alt="" />
                  <p>JWT Authentication</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-center h-96 flex flex-col items-center justify-center">
              <h3 className="text-2xl mb-5">Tools</h3>
              <div className="flex flex-wrap gap-6 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={github} alt="" />
                  <p>Github</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={figma} alt="" />
                  <p>Figma</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={netlify} alt="" />
                  <p>Netlify</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={vercel} alt="" />
                  <p>Vercel</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={git} alt="" />
                  <p>Git</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={vscode} alt="" />
                  <p>VS Code</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-center h-96 flex flex-col items-center justify-center">
              <h3 className="text-2xl mb-5">Database</h3>
              <div className="flex flex-wrap gap-6 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={mongodb} alt="" />
                  <p>Mongo DB</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Image className="w-16" src={mysql} alt="" />
                  <p>MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Skills;
