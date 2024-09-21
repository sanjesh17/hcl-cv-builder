import React from "react";

const CreativeResume = ({
  name,
  title,
  contact,
  summary,
  experience,
  education,
  skills,
  extraCurricular,
  leadership,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white">
      <header className="mb-8">
        <h1 className="text-6xl font-extrabold mb-2">{name}</h1>
        <h2 className="text-3xl font-bold text-purple-200">{title}</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm">
            {contact.email}
          </span>
          <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm">
            {contact.phone}
          </span>
          <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm">
            {contact.location}
          </span>
        </div>
      </header>

      <section className="mb-8 bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg">
        <h3 className="text-2xl font-bold mb-4 text-purple-200">About Me</h3>
        <p className="text-white">{summary}</p>
      </section>

      <section className="mb-8 bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg">
        <h3 className="text-2xl font-bold mb-4 text-purple-200">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg">
        <h3 className="text-2xl font-bold mb-4 text-purple-200">Experience</h3>
        {experience.map((job, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-white">{job.title}</h4>
            <p className="text-lg text-purple-200 mb-2">
              {job.company} | {job.date}
            </p>
            <ul className="list-disc list-inside text-white">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8 bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg">
        <h3 className="text-2xl font-bold mb-4 text-purple-200">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
            <p className="text-purple-200">
              {edu.school}, {edu.date}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-8 bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg">
        <h3 className="text-2xl font-bold mb-4 text-purple-200">Projects</h3>
        {experience.map((job, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-white">{job.title}</h4>
            <p className="text-lg text-purple-200 mb-2">
              {job.company} | {job.date}
            </p>
            <ul className="list-disc list-inside text-white">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8 bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg">
        <h3 className="text-2xl font-bold mb-4 text-purple-200">
          Extra Curricular Activities
        </h3>
        <ul className="list-disc list-inside text-white">
          {extraCurricular.map((activity, index) => (
            <li key={index} className="mb-1">
              {activity}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg">
        <h3 className="text-2xl font-bold mb-4 text-purple-200">Leadership</h3>
        {leadership.map((role, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-white">{role.title}</h4>
            <p className="text-lg text-purple-200 mb-2">
              {role.organization} | {role.date}
            </p>
            <ul className="list-disc list-inside text-white">
              {role.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CreativeResume;
