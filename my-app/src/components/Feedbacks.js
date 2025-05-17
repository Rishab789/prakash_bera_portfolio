import React, { useEffect, useState } from "react";
import person from "./../assets/testi-img.jpg";
import { feedback } from "../services/feedbacks";
import { motion, AnimatePresence } from "framer-motion";

const Feedbacks = () => {
  const [counter, setCounter] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const leftHandler = () => {
    setDirection(-1);
    setCounter(counter === 0 ? feedback.length - 1 : counter - 1);
  };

  const rightHandler = () => {
    setDirection(1);
    setCounter(counter === feedback.length - 1 ? 0 : counter + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCounter((prev) => (prev === feedback.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="my-20">
      <p className="clash-font1 text-3xl text-center feedback">
        My Client Says
      </p>

      <div className="bg-[#181818] flex justify-center gap-x-5 items-center mt-10 px-10 lg:px-0 relative">
        <div className="cursor-pointer z-10" onClick={leftHandler}>
          <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
        </div>

        <div className="relative flex flex-col gap-y-5 justify-center items-center w-[50rem] h-96 overflow-hidden">
          <AnimatePresence custom={direction}>
            <motion.div
              key={counter}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute flex flex-col justify-center items-center w-full h-full"
            >
              <div className="border rounded-full overflow-hidden">
                <img src={person} className="w-20 lg:w-32" />
              </div>
              <div className="text-white text-center my-5 h-20 flex items-center justify-center">
                {feedback[counter].content}
              </div>
              <p className="text-xl font-bold text-white">
                {feedback[counter].client}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-x-3 z-20 mt-5">
            {feedback.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  index === counter ? "bg-[#e5f926]" : "bg-white"
                }`}
                onClick={() => {
                  setDirection(index > counter ? 1 : -1);
                  setCounter(index);
                }}
              />
            ))}
          </div>
        </div>

        <div className="cursor-pointer z-10" onClick={rightHandler}>
          <i className="fa-solid fa-chevron-right text-3xl text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
