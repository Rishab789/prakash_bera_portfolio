import React from "react";
import html from "./../assets/html-1.svg";
import angular from "./../assets/angular-icon.svg";
import react from "./../assets/react-2.svg";
import js from "./../assets/logo-javascript.svg";
import css from "./../assets/css-3.svg";
import csharp from "../assets/c--4.svg";
import mongo from "../assets/mongodb-icon-1.svg";
import git from "../assets/git.svg";

const Skills = () => {
  const icons = [react, angular, js, html, css, csharp, mongo, git];

  return (
    <div>
      <section>
        <div className="bg-[#222222] h-auto pb-28">
          {/* Heading */}
          <div className="flex items-center justify-center gap-10 pt-16">
            <div className="border-t-[1px] w-32 sm:w-48 md:w-80 lg:w-96 border-white"></div>
            <p className="text-white clash-font1 text-xs sm:text-sm md:text-lg lg:text-xl">
              MY SKILLS
            </p>
            <div className="border-t-[1px] w-32 sm:w-48 md:w-80 lg:w-96 border-white"></div>
          </div>

          {/* Scrolling Skill Icons */}
          <div className="skill-strip-container  ">
            <div className="skill-strip my-10">
              {[...icons, ...icons].map((icon, i) => (
                <img key={i} src={icon} alt="skill" className="skill-icon" />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-10 p-5">
            <p className="text-white block clash-font1 text-3xl sm:text-3xl md:text-6xl lg:text-7xl word ">
              Hello My name is
              <span className="text-[#e5f926]"> Prakash Chandra Bera</span>, &
              I'm a building enthusiast that works as a Digital product designer
            </p>
          </div>

          {/* Stats */}
          <div className="block flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-center gap-16 sm:gap-40 md:gap-40 lg:gap-40 mt-16">
            <div className="relative">
              <a className="text-[#323232] text-7xl sm:text-9xl md:text-9xl lg:text-9xl clash-font2">
                4
              </a>
              <div className="text-white clash-font1 lg:text-2xl absolute top-14 -left-5 w-48">
                Projects done
              </div>
            </div>
            <div className="border-[#323232] border-r-2"></div>
            <div className="relative">
              <a className="text-[#323232] text-7xl sm:text-9xl md:text-9xl lg:text-9xl clash-font2">
                2
              </a>
              <div className="text-white clash-font1 lg:text-2xl absolute top-14 -left-0">
                Years
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
