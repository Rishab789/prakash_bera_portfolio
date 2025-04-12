import React from "react";
import PageHeaderComponent from "./PageHeaderComponent";
import myImage from "./../assets/my_image.png";
import { motion } from "framer-motion";
import AnimatedCounter from "../services/AnimatedCounter";

const About = () => {
  return (
    <div>
      <PageHeaderComponent title="About Me" name="About" />

      <div className="px-4 sm:px-6 lg:px-16 my-16 lg:my-36">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center my-20 gap-y-10">
          <p className="text-4xl sm:text-5xl lg:text-7xl clash-font1 text-center lg:text-left w-full lg:w-[70%]">
            We make your business stand out
          </p>
          <p className="text-base sm:text-lg lg:text-2xl text-center lg:text-left w-full lg:w-[30%]">
            We work closely with our clients to know their objectives, target
            audience, unique needs, and practical design solutions.
          </p>
        </div>

        {/* Image & Counters */}
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          <motion.div
            initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[70%]"
          >
            <div className="border-4 border-black rounded-2xl overflow-hidden w-full">
              <img
                src="https://aximo-react.vercel.app/assets/video-bg-Dyw4c18R.png"
                alt="About Visual"
                className="w-full"
              />
            </div>
          </motion.div>

          <div className="border border-black rounded-2xl text-white bg-[#181818] flex flex-col justify-center items-center gap-y-8 px-6 py-10 w-full lg:w-[28%]">
            <div className="text-center">
              <p className="clash-font1 text-5xl text-[#e5f926]">
                <AnimatedCounter targetNumber={3} />
              </p>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="clash-font1 text-5xl text-[#e5f926]">
                <AnimatedCounter targetNumber={4} />
              </p>
              <p className="text-lg">Successful Projects</p>
            </div>
            <div className="text-center">
              <p className="clash-font1 text-5xl text-[#e5f926]">
                <AnimatedCounter targetNumber={100} />%
              </p>
              <p className="text-lg">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="my-20 text-center">
          <p className="clash-font1 text-4xl sm:text-5xl lg:text-7xl">
            I think my story
          </p>
          <p className="clash-font1 text-4xl sm:text-5xl lg:text-7xl mb-6">
            is worth sharing with you
          </p>
          <p className="text-base sm:text-lg lg:text-2xl max-w-4xl mx-auto">
            Established in 2008, we began as a small but ambitious team. We
            understood the importance of creative and tech-savvy solutions to
            help businesses succeed in the ever-changing digital landscape.
          </p>
        </div>

        {/* Personal Image */}
        <motion.div
          initial={{ y: 180, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center my-12"
        >
          <img src={myImage} alt="My Photo" width={300} className="mx-auto" />
        </motion.div>

        {/* Agenda Text */}
        <div className="flex flex-col gap-y-6 text-base sm:text-lg max-w-4xl mx-auto text-justify">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
