import React from "react";

const PageHeaderComponent = (props) => {
  const { title, name } = props;
  return (
    <div>
      <section className="bg-[#181818] h-96 text-center">
        <p className="clash-font1 text-white text-4xl md:text-5xl lg:text-7xl pt-24 mb-10">
          {title}
        </p>
        <div className="flex text-white">
          <div className="m-auto lg:flex md:flex lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-2 ">
            <div className="lg:flex md:flex flex justify-center">
              <p className="font-bold">Home</p>
              <i className="bi bi-chevron-right font-bold"></i>
            </div>
            <p className="font-semibold text-[#e5f926] text-lg">{name}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageHeaderComponent;
