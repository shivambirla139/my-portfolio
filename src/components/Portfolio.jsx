import React from "react";
import heroImage from "../assets/heroImage.jpeg";
import nodejs from "../assets/node.png";
const Portfolio = () => {
  const portfolios = [
    {
      id:1,
      src:heroImage,
      title:"Sample title goesssss here .. her o ",
      links : {
        demo : "google.com",
        code : "google.com",
      }
    },
    {
      id:2,
      src:nodejs,
      title:"Sample Title nodejs",
      links : {
        demo : "google.com",
        code : "google.com",
      }
    },
  ];

  return (
    <div
      name="portfolio"
      className="pt-20 bg-gradient-to-b from-black to-gray-800 w-full overflow-hidden text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , title , links }) => (
            <div key={id} className="shadow-md shadow-gray-600 h-100 w-100 overflow-hidden rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 w-80 h-80 overflow-hidden hover:scale-105 "
              />
              <h2 className="text-center" > {title } </h2>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
