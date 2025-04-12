import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import resume from "./../assets/prakash_chandra_bera_upd_2yoe.pdf";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isHam, setIsHam] = useState(false);

  const hamHandler = () => {
    setIsHam(!isHam);
  };

  const navLinkClass = ({ isActive }) => ({
    color: isActive ? "#e5f926" : "#fff",
  });

  return (
    <div className="bg-[#181818] border-b-[1px] border-gray-400">
      <header className="relative flex justify-between items-center h-24 container-class mx-auto px-4">
        {/* Logo */}
        <div>
          <img
            src="https://cdn.prod.website-files.com/65f81804d647903ccaca5944/65fbd5ed536ff7cb226a1bbe_logo-2.svg"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex text-white text-lg font-medium gap-14 menu-font">
            <li>
              <NavLink to="/" className="menu-hover-color" style={navLinkClass}>
                HOME
              </NavLink>
            </li>
            <li>
              <a href="#projects" className="menu-hover-color">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="/blogs" className="menu-hover-color">
                BLOG
              </a>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="menu-hover-color"
                style={navLinkClass}
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="menu-hover-color"
                style={navLinkClass}
              >
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Resume Button */}
        <div className="hidden lg:block">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#e5f926] button-style">Resume</button>
          </a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden block bg-[#474644] border-none rounded-lg p-3 cursor-pointer"
          onClick={hamHandler}
        >
          <img
            src="https://cdn.prod.website-files.com/65f81804d647903ccaca5944/65ffccc8b5ae78d555180ff7_menu%20(3)%201.svg"
            alt="Menu"
          />
        </div>

        {/* Mobile Menu Dropdown with animation */}
        <AnimatePresence>
          {isHam && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-24 left-0 right-0 z-10 bg-[#282424]"
            >
              <div className="container-class mx-auto px-4 py-4">
                <ul className="text-white space-y-4 text-center text-xl">
                  <li>
                    <NavLink
                      to="/"
                      className="menu-hover-color block"
                      onClick={() => setIsHam(false)}
                      style={navLinkClass}
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="menu-hover-color block"
                      onClick={() => setIsHam(false)}
                    >
                      PROJECTS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blogs"
                      className="menu-hover-color block"
                      onClick={() => setIsHam(false)}
                    >
                      BLOG
                    </a>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className="menu-hover-color block"
                      onClick={() => setIsHam(false)}
                      style={navLinkClass}
                    >
                      CONTACT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="menu-hover-color block"
                      onClick={() => setIsHam(false)}
                      style={navLinkClass}
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <a
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mx-auto text-black font-semibold bg-[#e5f926] w-fit px-4 py-2 rounded-md"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
