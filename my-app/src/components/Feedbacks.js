import React, { useEffect, useState } from "react";
import person from "./../assets/testi-img.jpg";
import { feedback } from "../services/feedbacks";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Feedbacks = () => {
  const [counter, setCounter] = useState(0);
  const leftHandler = () => {
    if (counter == 0) {
      setCounter(feedback.length - 1);
    } else {
      setCounter((prev) => prev - 1);
    }
  };
  const rightHandler = () => {
    if (counter == feedback.length - 1) {
      setCounter(0);
    } else {
      setCounter((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log("this is counter ", counter);
  }, [counter]);
  // e5f926
  return (
    <div className="my-20">
      <div>
        <p className="clash-font1 text-3xl text-center feedback  ">
          My Client Says
        </p>
        <div className="bg-[#181818] flex justify-center gap-x-5 items-center mt-10 px-10 lg:px-0">
          <div className="cursor-pointer" onClick={leftHandler}>
            <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
          </div>
          <div className=" flex flex-col gap-y-5  lg:gap-y-0 mt-5 justify-center items-center w-[50rem] h-96">
            <div className="border rounded-full overflow-hidden ">
              <img src={person} className="w-20 lg:w-32" />
            </div>
            <div className="flex justify-center my-5  h-20 items-center text-center text-white">
              {feedback[counter].content}
            </div>
            <p className="text-xl font-bold text-white ">
              {feedback[counter].client}
            </p>
            <div className="flex gap-x-3">
              {feedback.map((data, index) => {
                return (
                  <div
                    className={`my-10 cursor-pointer w-2 h-2 rounded-full  ${
                      index === counter ? "bg-[#e5f926]" : "bg-white"
                    }`}
                    onClick={() => {
                      setCounter(index);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="cursor-pointer" onClick={rightHandler}>
            <i className="fa-solid fa-chevron-right text-3xl text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
