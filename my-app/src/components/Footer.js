import React from "react";
import "./Footer.css";
import FormComponent from "./FormComponent";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-[#181818] py-10 px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-16">
            {/* Left Content */}
            <div className="text-center lg:text-left flex-1">
              <p className="text-white clash-font1 text-4xl md:text-5xl lg:text-7xl">
                Got a project to
              </p>
              <p className="text-white clash-font1 text-4xl md:text-5xl lg:text-7xl mb-6">
                Discuss?
              </p>
              <p className="text-white text-lg sm:text-xl my-6 max-w-xl mx-auto lg:mx-0">
                We work closely with our clients to understand their objectives,
                target audience, and unique needs. We use our creative skills to
                translate these requirements and practical design solutions.
              </p>
              <div className="text-xl my-4">
                <p className="text-[#e5f926]">Give us a call:</p>
                <p className="text-white">(+91) 7008716985</p>
              </div>
              <div className="text-xl">
                <p className="text-[#e5f926]">Send us an email:</p>
                <p className="text-white">beraprakash456@gmail.com</p>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[35%] mx-auto lg:mx-0">
              <FormComponent />
            </div>
          </div>

          {/* Social & Menu */}
          <div className="mt-16 flex flex-col lg:flex-row items-center lg:justify-between gap-6 text-white">
            {/* Icons */}
            <div className="flex gap-4">
              <div className="circle-div">
                <a
                  href="https://www.linkedin.com/in/prakashchandrabera/"
                  className="bi bi-linkedin"
                  target="_blank"
                />
              </div>
              <div className="circle-div">
                <a href="#" className="bi bi-instagram" />
              </div>
              {/* <div className="circle-div">
                <a href="#" className="bi bi-twitter-x" />
              </div> */}
            </div>

            {/* Menu */}
            <ul className="flex flex-col lg:flex-row items-center gap-6">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="#projects">PROJECTS</a>
              </li>
              <li>
                <a href="#blogs">BLOG</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="text-white mt-10 pt-6 border-t-[1px] flex flex-col sm:flex-row justify-between text-center sm:text-left gap-4">
            <p>&#169; 2024 Genixe All Rights Reserved.</p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <p>Changelog</p>
              <p>License</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
