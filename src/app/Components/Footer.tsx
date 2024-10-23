import React from "react";
import { navSocials } from "./Nav/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-bg-dark text-text-light relative top-[100px]">
      <div>
        <h4 className="text-3xl pt-5 font-bold tracking-wider text-center">HENRY</h4>
      </div>
      <div className="flex gap-8 pt-4">
        {navSocials.map((social, index) => (
          <Link  className="group" key={index} target="_blank" href={'https://bennetthumphrey.com/'}>
            <div
              className={`fill-text-light duration-300 group-hover:scale-125 w-6 h-6
              ${social.name === "instagram" && "group-hover:fill-[#dc3978]"}
              ${social.name === "facebook" && "group-hover:fill-[#106aff]"}
              ${social.name === "whatsapp" && "group-hover:fill-green-400"}
              `}
              key={index}
            >
              {social.icon}
            </div>
          </Link>
        ))}
      </div>
      <div className="h-full w-full bg-bg-dark flex justify-center pt-5 pb-2">
        <a
          target="_blank"
          href="https://bennetthumphrey.com"
          className="md:text-xl text-text-light hover:scale-105 hover:text-orange-500 duration-500 hover:cursor-pointer"
        >
          Site by BennettHumphrey.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
