import React, { useEffect, useState } from "react";
import PageHeaderComponent from "../components/PageHeaderComponent";
import "./BlogDetails.css";
import { useParams } from "react-router-dom";
import loading from "./../assets/loading.json";
import Lottie from "lottie-react";

const BlogDetails = () => {
  const { id } = useParams(); // Extract the blog post ID from the URL

  const [blogDetails, setBlogDetails] = useState(null);
  const [loadingState, setLoadingState] = useState(true); // Add a loading state

  const URL = process.env.REACT_APP_URL;

  const fetchBlogDetails = async () => {
    // Replace this with your actual API call
    const response = await fetch(`${URL}/api/v1/posts/${id}`);
    const data = await response.json();
    setBlogDetails(data.post);
    console.log("this is iurl ", data.post);
    setLoadingState(false);
  };
  useEffect(() => {
    // Fetch blog details based on the ID

    fetchBlogDetails();
  }, [id]);

  if (!blogDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {loadingState ? (
        <div className="flex justify-center items-center h-screen">
          <Lottie animationData={loading} loop={true} />
        </div>
      ) : (
        <>
          <PageHeaderComponent title="Blog Details" name={blogDetails.title} />
          <section className="bg-[#222222] p-10 ">
            <div className="">
              <div className="image-container">
                <img
                  src={blogDetails.cover}
                  className="m-auto"
                  alt={blogDetails.title}
                />
              </div>
              <div className="post-dets">
                <div>
                  <p>Post:</p>
                  <p className="clash-font1 lg:text-2xl md:text-2xl text-sm">
                    Ramon Lian
                  </p>
                </div>
                <div>
                  <p>Date:</p>
                  <p className="clash-font1 lg:text-2xl md:text-2xl text-sm ">
                    {blogDetails.date}
                  </p>
                </div>
                <div>
                  <p>Category:</p>
                  <p className="clash-font1 lg:text-2xl md:text-2xl text-sm">
                    {blogDetails.service}
                  </p>
                </div>
              </div>
              <div className="mb-14">
                <p className="text-white clash-font1 lg:text-5xl md:text-5xl text-3xl pt-14 pb-14">
                  {blogDetails.title}
                </p>
                <p className="text-white text-xl">{blogDetails.body}</p>
                <br></br>
                <p className="text-white text-xl">{blogDetails.body}</p>
              </div>
            </div>
            <div
              className="body text-white text-xl"
              dangerouslySetInnerHTML={{ __html: blogDetails.content }}
            ></div>
          </section>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
