import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
            <div className="flex justify-center pt-16 pb-5 md:pt-0 md:pb-8 rounded-full ">
            <div className="h-[120px] w-[120px] md:h-[200px] md:w-[200px] rounded-full relative overflow-hidden ">

            <Image quality={100} src="/assets/profile.jpg" alt="profile-image" fill objectFit="cover"/>
            </div>
            </div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-2 md:py-4">
            Hi, I'm <span className="text-blue-700 ">Nihal</span>
          </h1>
          <h1 className="py-2">A Full Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a full-stack developer speciailizing in building full scale web
            applications. Possessing a strong background in full stack
            development, I am adept at working with the MERN stack to create
            scalabel web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
