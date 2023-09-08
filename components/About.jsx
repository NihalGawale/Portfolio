import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-24 lg:py-0">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-2xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 ">Who I am</h2>
          <p className="text-gray-600 py-2">
            I am a Full Stack Developer with 1year&10 months of experience in
            Web Development.
          </p>
          <p  className="text-gray-600 py-2">
            I have always been passionate about programming. In my Professional
            career I have worked on Frontend as well as Backend Technologies.
          </p>
          <p  className="text-gray-600 py-2">
            Being working on Dapp, I am also inclined towards Web3, Blockchain
            and CryptoCurrency.
          </p>
        </div>
        <div className="col-span-2 w-full h-auto m-auto  shadow-xl shadow-gray-400 dark:shadow-lg dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 relative ease-in duration-300">
          <img
            src="/assets/aboutImage.jpg"
            alt="about-image"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
