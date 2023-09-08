"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ThemeSwitcher from "@/app/ThemeSwitcher";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-transparent backdrop-blur-xl ">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="h-full w-[30%] flex items-center sm:justify-center pl-4">
          <Logo />
        </div>
        <div className="h-full w-[70%] ">
          <div className="hidden w-full h-full md:flex items-center justify-center">
            <ul className="flex text-xl gap-10 font-semibold pr-20">
              <Link href="/#home">
                <li>Home</li>
              </Link>
              <Link href="/#about">
                <li>About</li>
              </Link>
              <Link href="/#skills">
                <li>Skills</li>
              </Link>
              <Link href="/#contact">
                <li>Contact</li>
              </Link>
            </ul>

            <div>
          <ThemeSwitcher />
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-end pr-6 md:hidden space-x-4">
            <ThemeSwitcher />
            <MenuIcon onClick={handleNav} className="text-[#252550] text-3xl" />
          </div>
        
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 w-full h-screen top-0 bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Logo />
                <div>
                  <CloseIcon onClick={handleNav} className="cursor-pointer" />
                </div>
              </div>
              <div className="py-4">
                <ul className="uppercase">
                  <Link href="/#home">
                    <li className="py-4 text-sm" onClick={handleNav} >Home</li>
                  </Link>
                  <Link href="/#about">
                    <li className="py-4 text-sm" onClick={handleNav} >About</li>
                  </Link>
                  <Link href="/#skills">
                    <li className="py-4 text-sm" onClick={handleNav} >Skills</li>
                  </Link>
                  <Link href="/#contact">
                    <li className="py-4 text-sm" onClick={handleNav} >Contact</li>
                  </Link>
                </ul>

                <div className="pt-40">
                  <p className="uppercase tracking-widest text-[#5651e5]">
                    Let's Connect
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                      <Link href="https://www.linkedin.com/in/nihal-gawale-3860a1161/">
                       <LinkedInIcon />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                      <Link href="https://github.com/NihalGawale?tab=repositories">
                      <GitHubIcon />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                      <Link href="/#contact">
                        <EmailOutlinedIcon onClick={handleNav}/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
