import React from "react";

const ServiceModal = ({ className, service }) => {
  if (!service) return null;

  return (
    <div
      className={`flex justify-center rounded-xl bg-white items-center w-[20rem] md:w-[25rem] lg:w-[400px] ${className}`}
    >
      <div className="modal flex flex-col gap-y-5 p-5">
        <p className="text-xl clash-font1">{service.title}</p>
        <div className="flex gap-3">
          <div>
            <p className="my-2">
              <span className="font-bold">Title: </span>
              {service.title}
            </p>
            <p>
              <span className="font-bold">Intro: </span>
              {service.intro}
            </p>
          </div>
          <div>
            <img src={service.image} width={120} />
          </div>
        </div>
        <p>
          <span className="font-bold">Description: </span>
          {service.description}
        </p>
        <small className="font-extrabold">Click outside to close!</small>
      </div>
    </div>
  );
};

export default ServiceModal;
