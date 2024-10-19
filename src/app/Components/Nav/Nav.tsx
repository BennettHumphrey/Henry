"use client";

import React from "react";
import Link from "next/link";
import { navOptions, navSocials } from "./data";

const Nav = () => {
  return (
    <div className="flex flex-col z-50 w-full bg-bg-light border-b border-b-gray-300 fixed sm:flex-row">
      <div className="sm:basis-1/3">
        <h1 className="text-2xl tracking-widest font-bold text-center sm:pl-4">
          HENRY
        </h1>
      </div>
      <div className="flex justify-between w-full basis-2/3 sm:justify-around">
        <div className="flex items-center pl-4 gap-4 md:gap-[5vw] md:pl-0">
          {navOptions.map((nav, index) => (
            <div className="group" key={index}>
              <Link href={nav.path}>{nav.title}</Link>
              <div className="h-px w-0 group-hover:w-full duration-500 bg-text-dark" />
            </div>
          ))}
        </div>
        <div className="flex gap-1 pr-2 items-center">
          {navSocials.map((social, index) => (
            <Link className="group" key={index} target="_blank" href={'https://bennetthumphrey.com/'}>
              <div
                className={`fill-text-text-dark duration-300 group-hover:scale-125 w-6 h-6 
                  ${social.name === 'instagram' && "group-hover:fill-[#dc3978]"} 
                  ${social.name === 'facebook' && "group-hover:fill-[#106aff]"}
                  ${social.name === 'whatsapp' && "group-hover:fill-green-400"}
                  `}
              >
                {social.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
