import React from "react";
import my_image from "./../assets/heroImage.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      {" "}
      {/* Prevent unwanted horizontal scroll */}
      <section className="bg-[#181818] pb-5 flex flex-col-reverse lg:flex-row lg:items-center justify-around relative p-4">
        {/* Image Section */}
        <div className="text-center lg:order-2 mx-auto lg:mx-0">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="border-4 border-white rounded-3xl overflow-hidden w-[200px] md:w-[350px]"
          >
            <img
              src={my_image}
              className="w-full transition-transform duration-300 ease-in-out scale-110 hover:scale-100"
              alt="Hero"
            />
          </motion.div>

          <div className="absolute -bottom-5 right-32">
            <a
              href="#projects"
              className="arrow-animation hidden pb-10 md:block lg:block mr-20"
            >
              <i className="bi bi-arrow-down text-white border border-white cursor-pointer rounded-full p-3"></i>
            </a>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center   ">
          <div className="lg:mb-10 md:mb-32 text-start flex flex-col gap-y-5">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-white text-lg md:text-2xl clash-font1 mb-6 md:mb-10 lg:mb-7 mt-7 md:mt-14">
                HI,🖐️I'm Prakash Chandra Bera
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <p className="clash-font text-white text-4xl sm:text-6xl md:text-[5.5rem] lg:text-8xl sm:pb-6 md:pb-5 lg:p-0">
                A Creative
              </p>
              <p className="clash-font text-white text-4xl sm:text-6xl md:text-[5.5rem] lg:text-8xl">
                Web Developer
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <p className="text-white text-base w-[70%] md:text-xl my-7 mb-6 lg:mx-0">
                Web Developers Employ A Variety Of Tools And Technique To Bring
                Their Design.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              <button
                className="bg-[#e5f926] button-style1 mb-44 lg:mb-0"
                onClick={() => navigate("/contact")}
              >
                Book a free consultation
              </button>
            </motion.div>

            <div className="blur-element"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
