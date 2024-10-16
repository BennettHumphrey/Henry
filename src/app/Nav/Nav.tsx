"use client";

import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Link from "next/link";


const Nav = () => {
  const { width } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState(700);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setWindowWidth(width);
  }, [width]);

  return (
    <div className="bg-nav h-20 z-50 w-full border-b border-b-gray-300 fixed">
      {windowWidth < 768 ? (
        <MobileNav setMenuOpen={setMenuOpen} />
      ) : (
        <DesktopNav />
      )}
        <AnimatePresence>
      {windowWidth < 976 && menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '192px' }}
            exit={{ height: 0 }}
            transition={{ease: 'easeInOut', duration: 0.7}}
            className="bg-nav-open overflow-x-hidden relative flex flex-col items-center justify-between items-between border-b border-b-gray-300"
          >
            {navOptions.map((menuOption, index) => (
              <Link href={menuOption.path} onClick={() => setMenuOpen(false)} className="px-6 h-12 w-full flex items-center" key={index}>
                <p className="tracking-[3px] w-[90%] m-auto font-sans font-semibold border-b border-b-nav-line">
                  {menuOption.title}
                </p>
              </Link>
            ))}
          </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
