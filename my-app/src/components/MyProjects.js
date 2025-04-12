import React, { useState } from "react";
import "./MyProjects.css";

const MyProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onMouseMove = (e, index) => {
    if (hoveredProject === index) {
      setX(e.nativeEvent.offsetX);
      setY(e.nativeEvent.offsetY);
    }
  };

  const onMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const onMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div>
      <section className="bg-[#181818]  h-auto  cursor-pointer" id="projects">
        <div className="padding-global">
          <div className="section-header">
            <p className="clash-font1 text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-5">
              My Recent Projects
            </p>
            <div className="projects-container">
              {/* card 1 */}
              <div
                className="sticky-div relative z-10"
                onMouseMove={(e) => onMouseMove(e, 1)}
                onMouseEnter={() => onMouseEnter(1)}
                onMouseLeave={onMouseLeave}
              >
                <img
                  src="https://cdn.prod.website-files.com/65fc3eb0d93abcc7a3387fcc/6633617ce9cdeece1d4de463_project-1.png"
                  loading="lazy"
                  alt="Project 1"
                />
                <div className="absolute left-5 bottom-16">
                  <p className="clash-font1 text-white text-5xl">
                    Mobile apps Design
                  </p>
                  <p className="clash-font1 text-white text-2xl">
                    UI/UX Design
                  </p>
                </div>
                {hoveredProject === 1 && (
                  <div
                    className="mouse-move-div"
                    style={{
                      position: "absolute",
                      left: x,
                      top: y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    View Project
                  </div>
                )}
              </div>

              {/* card 2 */}
              <div
                className="sticky-div relative z-20"
                onMouseMove={(e) => onMouseMove(e, 2)}
                onMouseEnter={() => onMouseEnter(2)}
                onMouseLeave={onMouseLeave}
              >
                <img
                  src="https://cdn.prod.website-files.com/65fc3eb0d93abcc7a3387fcc/6633631dd4161d106b11c666_project-4.png"
                  loading="lazy"
                  alt="Project 2"
                />
                <div className="absolute left-5 bottom-16">
                  <p className="clash-font1 text-white text-5xl">
                    Mobile apps Design
                  </p>
                  <p className="clash-font1 text-white text-2xl">
                    UI/UX Design
                  </p>
                </div>
                {hoveredProject === 2 && (
                  <div
                    className="mouse-move-div"
                    style={{
                      position: "absolute",
                      left: x,
                      top: y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    View Project
                  </div>
                )}
              </div>

              {/* card 3 */}
              <div
                className="sticky-div relative z-30"
                onMouseMove={(e) => onMouseMove(e, 3)}
                onMouseEnter={() => onMouseEnter(3)}
                onMouseLeave={onMouseLeave}
              >
                <img
                  src="https://cdn.prod.website-files.com/65fc3eb0d93abcc7a3387fcc/6633645c52f513a795c732c2_project-5.png"
                  loading="lazy"
                  alt="Project 3"
                />
                <div className="absolute left-5 bottom-16">
                  <p className="clash-font1 text-white text-5xl">
                    Mobile apps Design
                  </p>
                  <p className="clash-font1 text-white text-2xl">
                    UI/UX Design
                  </p>
                </div>
                {hoveredProject === 3 && (
                  <div
                    className="mouse-move-div "
                    style={{
                      position: "absolute",
                      left: x,
                      top: y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    View Project
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
