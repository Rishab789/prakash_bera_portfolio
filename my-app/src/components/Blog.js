import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const { postData } = useOutletContext(); // Get blog data from Outlet context

  console.log("this is coming from blog page ", postData?.posts[0]?.cover);

  return (
    <div>
      <section
        className="bg-[#222222] md:pt-20 lg:pt-20 sm:pt-16 pt-16"
        id="blogs"
      >
        <div className="">
          <p className="text-white clash-font1 text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center mb-10">
            Latest Articles
          </p>
          <div className="md:grid md:grid-cols-2  lg:grid lg:grid-cols-3 ">
            {postData?.posts.map((item) => (
              <div className=" text-white  gap-5 padding-global" key={item.id}>
                <Link to={`/blogs/${item?._id}`}>
                  <div className="blog-card h-full">
                    <img src={item.cover} />
                    <div className="padding-div">
                      <p className="clash-font1 pb-5  md:text-3xl lg:text-2xl">
                        {item.title}
                      </p>
                      <div className="flex justify-between">
                        <p>{item.service}</p>
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
