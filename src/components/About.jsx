import React from "react";

const About = () => {
  return (

       <div
      name="about"
      className="pt-20 w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am Shivam Birla and I am pursuing  B.Tech from NIT HAMIRPUR in Mathematics and Scientific Computing .
          I am interested in both mathematical and software  aspects of programming . I  have good knowledge of 
          Data Structures and Algorithms. I have good experience in Web developement and havae created several 
          full stack projects in MERN stack . I have also experimented with Android developement and created a 
          few basic projects .
        </p>

        <br />

        <p className="text-xl">
          Technologies that i am very interested in are object-based databases such as MONGO-DB . Few Technologies which I
          am experimenting are WebSockets and WEBRTC . 
        </p>
      </div>
    </div>
  );
};

export default About;
