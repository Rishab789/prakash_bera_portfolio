import React, { useRef, useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Dashboard = () => {
  const url = process.env.REACT_APP_URL;
  const coverRef = useRef(null);
  const ref = useRef();
  const [value, setValue] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  console.log("this is url ", url);
  useEffect(() => {
    if (imgUrl) {
      setValue((prev) => prev + `<p><img src="${imgUrl}" width="300"/></p>`);
    }
  }, [imgUrl]);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_blogs");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dlcsuxlco/image/upload",
        {
          method: "POST",

          body: formData,
        }
      );

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      toast.error("Failed to upload image");
    }
  };

  const handleCoverChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = await uploadToCloudinary(file);
      setCoverUrl(url);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = await uploadToCloudinary(file);
      setImgUrl(url);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString("en-GB");

    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("date", date);
    formData.append("cover", coverUrl);
    formData.append("category", e.target.category.value);
    formData.append("desc", e.target.desc.value);
    formData.append("content", value);
    for (let [key, value] of formData.entries()) {
      console.log("this is data", key, value);
    }

    try {
      const response = await fetch(`${url}/api/v1/posts/create`, {
        method: "POST",
        body: formData,
      });
      const getData = await response.json();

      if (response.ok) {
        toast.success(getData.message);
      } else {
        toast.error(getData.message || "An error occurred");
      }
    } catch (e) {
      toast.error(e.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col gap-6 px-20 py-5">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6" onSubmit={(e) => submitHandler(e)}>
        <button
          type="button"
          className="w-max p-2 shadow-md rounded-xl text-sm text-black bg-white"
          onClick={() => coverRef.current.click()}
        >
          {coverUrl ? "Change Cover Image" : "Add Cover Image"}
        </button>
        {coverUrl && <img width={300} src={coverUrl} alt="Cover" />}
        <input
          type="file"
          ref={coverRef}
          style={{ display: "none" }}
          onChange={handleCoverChange}
          name="cover"
          id="cover"
        />
        <input
          className="text-4xl font-semibold bg-transparent outline-none text-black"
          type="text"
          placeholder="My Awesome Story"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label className="text-sm">Choose a category</label>
          <select
            name="category"
            className="p-2 rounded-xl bg-white text-black shadow-md"
          >
            <option value="general">General</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non Fiction</option>
          </select>
        </div>
        <textarea
          placeholder="A short Description"
          name="desc"
          className="p-4 rounded-xl bg-white shadow-md text-black"
        />
        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => ref.current.click()}
          >
            🖼️
          </button>
          <input
            type="file"
            ref={ref}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <ReactQuill
            theme="snow"
            className="rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
          />
        </div>
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
