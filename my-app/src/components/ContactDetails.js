import React, { useState } from "react";
import { contactDets } from "../services/contactDetailsJSON";
import "./ContactDetails.css";
// import gif from "./../../src/assets/output-onlinegiftools.gif";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    message: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/posts/getMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:4000",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // const result = await response.json();
        alert("POST up successful");
        // Handle successful signup
        setFormData({
          email: "",
          fullName: "",
          message: "",
        });
      } else {
        alert("POST up failed");
        // Handle signup failure
      }
    } catch (e) {
      console.error("Error:", e);
      alert("An error occurred");
    }
  };

  return (
    <section className="bg-[#222222] h-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-5">
        {contactDets.map((item) => {
          return (
            <div className=" bg-[#fff] rounded-md h-[15rem] p-5">
              <img src={item.src} width={100} height={100} className="mb-5" />
              <p className="text-black clash-font1">{item.label}:</p>
              <p className="text-xl">{item.value}</p>
            </div>
          );
        })}
      </div>
      {/* form section  */}
      <div className="lg:grid lg:grid-cols-2 mt-14 p-5 gap-60 ">
        <div className="mb-10">
          <p className="clash-font1 lg:text-5xl md:text-5xl text-4xl text-white mb-10">
            We Provide Best Services! Let's Work Together
          </p>
          <p className="text-xl text-white">
            Get In Touch’ is more than just a phrase; it’s an open door to
            seamless Communication and meaningful interaction.
          </p>

          <div className="mt-14">
            <p className="text-[#f1f4f4] text-2xl clash-font1">Follow Us</p>
            <div className="flex gap-4 ">
              <div className="circle-div">
                <a
                  href="https://www.linkedin.com/in/prakashchandrabera/"
                  className="bi bi-linkedin text-[#f1f4f4]"
                  target="_blank"
                ></a>
              </div>
              <div className="circle-div">
                <a href="#" className="bi bi-instagram text-[#f1f4f4]"></a>
              </div>
              {/* <div className="circle-div">
                <a href="#" className="bi bi-twitter-x text-[#f1f4f4]"></a>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-10" onSubmit={submitHandler}>
            <div className="w-full  border-b-[1px]">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border-none focus:outline-none w-full"
                id="name"
                name="fullName"
                onChange={changeHandler}
                value={formData.fullName}
              />
            </div>
            <div className="w-full  border-b-[1px]">
              <input
                type="email"
                placeholder="Email Address"
                className="focus:outline-none w-full "
                name="email"
                onChange={changeHandler}
                value={formData.email}
              />
            </div>
            <div className="w-full  border-b-[1px]">
              <select className="w-full text-white">
                <option className="">Services</option>
                <option>Web Developement</option>
                <option>App Developement</option>
              </select>
            </div>
            <div className=" border-b-[1px] ">
              <textarea
                placeholder="Message"
                className="focus:outline-none caret-slate-400 w-full"
                onChange={changeHandler}
                name="message"
                value={formData.message}
              />
            </div>
            <div>
              <button className="button-style bg-[#e5f926]">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
