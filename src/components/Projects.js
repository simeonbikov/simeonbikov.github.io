import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../data/data.js";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [...data].reverse();
  //setProject(data);

  return (
    <div name="work" className="w-full text-[#000] bg-[#fdfffc]">
      <div className="lg:max-w-[800px] xl:max-w-[1200px] mx-auto p-10 flex flex-col justify-center">
        {/* <div className="pb-8 pt-8"> */}
        <div className="py-10">
          {/* <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p> */}
          {/* <p className="py-6">// Check out some of my recent work:</p> */}
          <p className="text-2xl font-medium text-center">
            // Check out some of my recent work:
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
          {/* Gird Item */}
          {projects.map((project) => {
            // console.log(project);
            return (
            <div
              key={project.id}
              style={{ backgroundImage: `url(${project.images[0]})` }}
              className="shadow-md shadow-[#040c16] group container rounded-sm 
              flex justify-center text-center items-center mx-auto max-w-[400px] content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {project.name}
                </span>
                <div className="py-4 text-center ">
                  {/* eslint-disable-next-line */}
                    <button
                      className="bg-[#161b33] text-white border-2 px-8 py-2 m-4 text-lg hover:bg-[#0d0c1d]"
                      onClick={() => {
                        navigate(`/project/${project.id}`);
                      }}
                      // className="text-center rounded-sm px-8 py-2 m-4
                      //  bg-white text-gray-700 font-bold text-lg"
                    >
                      More Info
                    </button>
                  {/* </a> */}
                </div>
                <span className="text-sm font bold text-white tracking-wider mx-3">
                  {project.technologies}
                </span>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default Projects;
