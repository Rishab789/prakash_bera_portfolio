import React, { useState } from "react";
import "./FormComponent.css";

const FormComponent = (props) => {
  const url = process.env.REACT_APP_URL;
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    message: "",
  });

  const className = props.className;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(`${url}/api/v1/posts/getMail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("POST up successful");
        setFormData({
          email: "",
          phone: "",

          fullName: "",
          message: "",
        });
      } else {
        alert("POST up failed");
      }
    } catch (e) {
      console.error("Error:", e);
      alert("An error occurred");
    }
  };

  return (
    <div
      className={`${className} mx-auto   bg-[#181818] border-black px-3 py-3`}
    >
      <form className="flex flex-col gap-5" onSubmit={submitHandler}>
        <div className="w-full ">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-transparent border outline-none border-white  w-full h-12 rounded-full px-3"
            id="name"
            name="fullName"
            onChange={changeHandler}
            value={formData.fullName}
          />
        </div>
        <div className="w-full ">
          <input
            type="email"
            placeholder="Email Address"
            className="outline-none border border-white w-full h-12 rounded-full px-3"
            name="email"
            onChange={changeHandler}
            value={formData.email}
          />
        </div>
        <div className="w-full ">
          <input
            type="text"
            placeholder="Mobile Number"
            className="outline-none border border-white w-full h-12 rounded-full px-3"
            name="phone"
            onChange={changeHandler}
            value={formData.phone}
          />
        </div>
        <div className="w-full ">
          <select className="w-full h-12 outline-none border text-white border-white rounded-full px-3">
            <option className="">Services</option>
            <option value="webdev">Web Development</option>
            <option value="appdev">App Development</option>
          </select>
        </div>
        {/* <div className=""> */}
        <textarea
          placeholder="Message"
          className="px-3  outline-none border  border-white caret-slate-400 w-full h-32 rounded-2xl"
          onChange={changeHandler}
          name="message"
          value={formData.message}
        />
        {/* </div> */}
        <div>
          <button className="button-style bg-[#e5f926] w-full">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
