import React from "react";
import ProjectWebsite from "./ProjectWebsite";

const ProjectCard = ({
  projectName,
  projectMedia,
  projectDescription,
  techStack,
  gitHubLink,
  projectWebsite,
}) => {

  return (
    <>
      <div className="flex flex-col w-full h-full border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg dark:shadow-none overflow-hidden max-sm:max-w-[90%] max-sm:mx-auto">

        {/* Media  */}
        <div className="h-fit">
          <img
          className="object-contain w-full h-full"
            src={projectMedia}
            alt="ProjectGLimpse"
          />
        </div>

        <div className="p-4 relative border-t border-neutral-700">
          <h3 className="text-2xl font-bold text-gray-400">{projectName}</h3>
          <p className="text-neutral-500 text-sm mt-2">
            {projectDescription}
          </p>

        
          {techStack && (
            <div className="flex flex-wrap mt-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-neutral-700 text-white rounded-lg px-2 py-1 text-xs mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-4 items-senter mt-2">
            {projectWebsite && (
              <ProjectWebsite projectWebsite={projectWebsite} />
            )}

            {gitHubLink && (
              <div className="">
                <a
                  href={gitHubLink}
                  className="text- hover:text-primary-600 font-semibold dark:text-white"
                >
                  GitHub
                </a>
              </div>
            )}
          </div>
        

        </div>
      </div>
    </>
  );
};

export default ProjectCard;
