import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "../App.css"
const Home = () => {
  return (
    <div
      name="home"
      className="pt-20 w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center w-4/5 h-full">
          <h2 className="text-3xl sm:text-7xl font-bold text-white">
            I am a programmer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am very enthusiastic about and have experience in programming 
            specifically web developement and game developement .
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-4/5 h-full flex items-center justify-center" >
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl  mx-auto w-2/3 md:w-1/2 mt-10 z-1 overflow-hidden animated-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
