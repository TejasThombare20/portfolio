import React from "react";
import project1 from "../assets/1Billion.jpg";
import project2 from "../assets/epasal.PNG"
import project3 from "../assets/Estatefolio.PNG"
import project4 from "../assets/carSeller1.PNG"
import project5 from "../assets/textoperator.PNG"
const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: project1,
      code : "https://github.com/TejasThombare20/1Billion-frontend",
      demo : "https://1-billion-frontend.vercel.app/"
    },
    {
      id: 2,
      src: project2,
      code : "https://github.com/TejasThombare20/E-pasal-Inventory-frontend",
      demo : "https://e-pasal-inventory-frontend.vercel.app/"
    },
    {
      id: 3,
      src: project3,
      code : "https://github.com/TejasThombare20/CityEstateHub-frontend",
      demo :"https://city-estate-hub-frontend.vercel.app/"
    },
    {
      id: 4,
      src: project4,
      code :  "https://github.com/TejasThombare20/car-rental-landing-frontend",
      demo : "https://car-rental-landing-frontend.vercel.app/"
    },
    {
      id: 5,
      src:  project5,
      code : "https://github.com/TejasThombare20/TextOperator",
      demo : "https://text-operator.vercel.app/"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full py-10 text-white md:h-full"
    >
      <div className="max-w-screen-lg p-3 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white ">
            Portfolio
          </p>
          <p className="py-4">Checkout some of work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 sm:px-0">
          {portfolio.map((portfolio) => (
            <div className="shadow-md shadow-gray-600 rounded-lg ">
              <div className="w-[319px] h-[300px] rounded-xl ">
              <img
                className="rounded-md duration-200 hover:scale-110 w-full h-full object-fill "
                src={portfolio.src}
                alt=""
              />
              </div>
              <div className="flex items-center justify-center ">
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125" target="_blank"
                 href={portfolio.demo}>
                  {" "}
                  Demo
                </a>
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125" target="_blank"
                href={portfolio.code}>
                  {" "}
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
