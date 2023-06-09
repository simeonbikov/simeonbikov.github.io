import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { data } from "../data/data.js";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [...data].reverse();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      id="projects"
      className="w-full text-dark1 bg-light1 py-[60px] mb-12"
    >
      <div className="lg:max-w-[900px] xl:max-w-[1200px] mx-auto px-6 flex flex-col justify-center">
        <div className="py-12">
          <p className="text-lg sm:text-3xl font-medium text-center">
            {"{ Check out some of my recent work }"}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                style={{ backgroundImage: `url(${project.images[0]})` }}
                className="shadow-md shadow-dark2 group container rounded-sm 
              flex justify-center text-center items-center mx-auto max-w-[400px] content-div"
              >
                {/* Hover images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <p className="text-lg sm:text-2xl font bold text-light1 tracking-wider ">
                    {project.name}
                  </p>
                  <p className="text-sm font bold text-light1 tracking-wider ">
                    {project.date}
                  </p>
                  <div className="py-3 text-center ">
                    {/* eslint-disable */}
                    <button
                      className="bg-dark2 text-light1 border-2 px-8 py-2 m-4 text-lg hover:bg-dark1"
                      onClick={() => {
                        navigate(`/project/${project.id}`);
                      }}
                    >
                      More Info
                    </button>
                  </div>
                  <p className="text-sm font bold text-light1 tracking-wider mx-5">
                    {project.technologies}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
