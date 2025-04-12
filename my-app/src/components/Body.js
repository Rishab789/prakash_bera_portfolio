import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import MyWork from "./MyWork";
import MyProjects from "./MyProjects";
import Blog from "./Blog";
import { useOutletContext } from "react-router-dom";
import Feedbacks from "./Feedbacks";

const Body = () => {
  const { postData } = useOutletContext();
  console.log("this is blog details from the blog page ", postData);

  return (
    <div>
      <Hero />
      <Skills />
      <MyWork />
      <MyProjects />
      <Feedbacks />
      {/* <Blog data={postData} /> */}
    </div>
  );
};

export default Body;
