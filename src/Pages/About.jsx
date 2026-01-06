import CTA from "../Components/CTA";
import { skills, experiences } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Azhar Khan
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A data scientist based in India, specializing in data analysis,
          machine learning, and insight-driven solutions.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="block-container w-20 h-20"
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== Work Experience ===================== */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>

        <p className="mt-5 text-slate-500 max-w-3xl">
          Here’s a look at my professional experience and the practical exposure I’ve gained so far.
        </p>

        {/* Timeline spine */}
        <div className="mt-14 relative border-l border-slate-200">
          {experiences.map((exp, index) => (
            <div key={index} className="ml-10 mb-12 relative">
              {/* Dot */}
              <span className="absolute -left-[36px] top-6 w-3 h-3 bg-blue-500 rounded-full" />


              {/* Card */}
              <div className="bg-white max-w-4xl rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  {exp.icon && (
                    <img
                      src={exp.icon}
                      alt={exp.company_name}
                      className="w-10 h-10 object-contain"
                    />
                  )}

                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {exp.company_name} • {exp.date}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {/* Bullet */}
                      <span className="mt-2 h-2 w-2 bg-slate-400 rounded-full shrink-0" />

                      {/* Text */}
                      <p className="text-slate-500 leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
