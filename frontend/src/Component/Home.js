import React from "react";
import profile from "../assets/profile.jpg";
import { BiChevronRight } from "react-icons/bi";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col    items-center justify-center h-full  md:flex-row ">
        <div className="flex flex-col justify-center h-full gap-2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 text-xl py-4 max-w-lg">
            i have 2 year of experience buliding and designing responsive
            webiste Currently I love to work on web application using MERN stack
            development 
          </p>

          <div>
            <button className=" text-white rounded-md  w-fit px-6 py-2  flex justify-center items-center flex-row gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
              Portfolio
              <span className="hover:rotate-90 duration-300">
                <BiChevronRight />
              </span>
            </button>
          </div>
        </div>
        <div  className="h-[250px] w-[250px] md:h-[350px] md:w-[350px]" >
          <img
            className="rounded-2xl mx-auto w-2/3  md:w-full"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
