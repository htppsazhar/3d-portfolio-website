import React from "react";
import CTA from "../Components/CTA";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container relative overflow-hidden">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-600 max-w-3xl">
        <p>
          I’ve worked on multiple real-world projects focused on data analysis,
          machine learning, and data engineering. Each project reflects my
          hands-on learning, problem-solving approach, and ability to turn data
          into actionable insights.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.iconUrl} alt="Project Icon" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
            <div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-6 flex items-center gap-6">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline flex items-center gap-1"
                  >
                    Live Link <span>→</span>
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 font-medium hover:underline flex items-center gap-1"
                  >
                    GitHub <span>→</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />

    </section>
  )
}

export default Projects