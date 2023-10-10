import React from "react";
import css from "../assets/css.png";
import HTML from "../assets/html.png";
import js from "../assets/javascript.png";
import nodeJS from "../assets/node.png";
import reactIMG from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/Bootstrap.png";
import MUI from "../assets/MUI.png";
import Github from "../assets/github.png";
import MongoDBIMG from "../assets/MongoDB.png";
import vercelIMG from "../assets/vercelpng.png";
import netlifiIMG from "../assets/netlify.png";
import firebase from "../assets/Firebase.png";

const Experience = () => {
  const logos = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactIMG,
      title: "ReactJS",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: nodeJS,
      title: "NodeJS",
      style: "shadow-green-700 ",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "BootStrap",
      style: "shadow-violet-600",
    },
    {
      id: 5,
      src: MUI,
      title: "MaterialUI",
      style: "shadow-blue-300",
    },
    {
      id: 6,
      src: MongoDBIMG,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: vercelIMG,
      title: "Vercel",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: netlifiIMG,
      title: "Netlify",
      style: "shadow-cyan-500 ",
    },
    {
      id: 11,
      src: Github,
      title: "GitHub",
      style: "shadow-gray-700 ",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies i have work with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {logos.map(({ id, src, title, style }) => (
            <div key={id}  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
              <img className={"w-20 mx-auto shadow-md "+" " +  style} src={src} alt="" />
              <p className="mt-4 text-center ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
