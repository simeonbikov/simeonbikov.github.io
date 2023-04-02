import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { data } from "../data/data.js";

const Project = () => {
  const { id } = useParams();
  const project = data.find((proj) => proj.id === parseInt(id));
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full text-[#000] bg-[#fdfffc]">
      <div className="max-w-[900px] mx-auto pt-[60px] px-3 md:px-[60px] flex flex-col justify-center">
        {project.name && (
          <div className="py-8">
            <h1 className="text-3xl font-medium text-center">{`{ ${project.name} }`}</h1>
          </div>
        )}

        <div className="flex justify-between p-4">
          {project.date && (
            <p className="text-lg font-medium pr-2">{project.date}</p>
          )}
          {project.technologies && (
            <p className="text-lg font-medium pl-2">{project.technologies}</p>
          )}
        </div>

        <div className="p-4">
          {project.type && (
            <p className="text-2xl font-medium text-center pb-6">
              {project.type}
            </p>
          )}
          {project.summary && (
            <p className="text-base md:text-lg font-medium text-justify">
              Summary: {project.summary}
            </p>
          )}
          {project.templatesUrl && (
            <>
              <p className="text-base md:text-lg font-medium">
                Cloned from
                <a
                  href={project.templatesUrl}
                  className="text-base md:text-lg font-medium text-blue-800 hover:text-blue-500"
                >
                  {" "}
                  here
                </a>
              </p>
            </>
          )}
        </div>

        <div className="flex justify-evenly">
          {project.github && (
            <button
              onClick={() => {
                window.location.href = project.github;
              }}
              className="bg-[#fdfffc] text-[#0d0c1d] border-[#0d0c1d] border-2 px-8 py-2 m-8 text-lg hover:bg-[#fff] mx-auto flex items-center"
            >
              Source Code
            </button>
          )}
          {project.live && (
            <button
              onClick={() => {
                window.location.href = project.live;
              }}
              className="bg-[#fdfffc] text-[#0d0c1d] border-[#0d0c1d] border-2 px-8 py-2 m-8 text-lg hover:bg-[#fff] mx-auto flex items-center"
            >
              Demo
            </button>
          )}
        </div>

        {project.images && (
          <>
            <p className="text-2xl font-medium text-center pt-4">Screenshots:</p>
            <div className="flex flex-col justify-center items-center p-4">
              {project.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="max-w-[400px] h-[100%] m-5 shadow-md shadow-[#040c16]"
                  >
                    <img
                      src={image}
                      alt={`Screenshot of the project ${project.name}`}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}

        {project.templatesImg && (
          <>
            <p className="text-2xl font-medium text-center pt-8">Templates:</p>
            <div className="flex justify-center p-4">
              {project.templatesImg.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="max-w-[250px] h-[100%] m-4 shadow-md shadow-[#040c16]"
                  >
                    <img
                      src={image}
                      alt={`Template picture of the project ${project.name}`}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
