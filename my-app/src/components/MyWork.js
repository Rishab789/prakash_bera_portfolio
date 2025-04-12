import React, { useEffect, useRef, useState } from "react";
import "./MyWork.css";
import ServiceModal from "./ServiceModal";
import service1 from "./../assets/services1.png";
import service2 from "./../assets/services2.png";
import service3 from "./../assets/services3.png";
import service4 from "./../assets/services4.png";
import service5 from "./../assets/services5.png";
import service6 from "./../assets/services6.png";

const servicesData = [
  {
    image: service1,
    title: "Branding Design",
    intro: "Unique visual branding identity.",
    description:
      "Crafting memorable brand visuals that resonate with your audience.",
  },
  {
    image: service2,
    title: "UI/UX Design",
    intro: "Seamless user experiences.",
    description: "Designing intuitive interfaces that engage and retain users.",
  },
  {
    image: service3,
    title: "Web Application",
    intro: "Robust and scalable solutions.",
    description:
      "Building performant and maintainable web applications tailored to your business.",
  },
  {
    image: service4,
    title: "Mobile App",
    intro: "Native and cross-platform apps.",
    description:
      "Developing responsive and elegant mobile experiences for all devices.",
  },
  {
    image: service5,
    title: "E-commerce",
    intro: "Sell your products online.",
    description:
      "Custom e-commerce platforms designed for seamless shopping experiences.",
  },
  {
    image: service6,
    title: "SEO Optimization",
    intro: "Boost your visibility.",
    description:
      "Optimizing your website for search engines to improve organic traffic.",
  },
];

const MyWork = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const sliderRef = useRef(null);
  const modalRef = useRef(null);

  // Detect outside click to close modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const handleNext = () => {
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollLeft += width;
  };

  const handlePrev = () => {
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollLeft -= width;
  };

  const showModalFn = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div>
      <section id="services" className="relative">
        {showModal && selectedService && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
            <div ref={modalRef}>
              <ServiceModal service={selectedService} />
            </div>
          </div>
        )}

        <div className="bg-[#222222] pb-28 pt-10">
          <div className="flex justify-between pl-10 pr-10">
            <p className="clash-font1 text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              What I do
            </p>
            <div className="flex gap-4">
              <div
                className="border border-white rounded-full h-12 w-12 flex justify-center items-center cursor-pointer arrow"
                onClick={handlePrev}
              >
                <i className="bi bi-arrow-left-short text-white text-3xl"></i>
              </div>
              <div
                className="border border-white rounded-full h-12 w-12 flex justify-center items-center cursor-pointer arrow"
                onClick={handleNext}
              >
                <i className="bi bi-arrow-right-short text-white text-3xl"></i>
              </div>
            </div>
          </div>

          <div className="flex main-card-container slider" ref={sliderRef}>
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className={`card cursor-pointer ${
                  showModal ? "blur-sm" : "blur-0"
                }`}
                onClick={() => showModalFn(service)}
              >
                <div>
                  <img src={service.image} width={100} />
                </div>
                <p className="clash-font3">{service.title}</p>
                <p>{service.intro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyWork;
