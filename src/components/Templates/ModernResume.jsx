import React from "react";

const ModernResume = ({
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
    <div className="max-w-4xl mx-auto p-8 bg-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-thin text-gray-800 mb-2">{name}</h1>
        <h2 className="text-2xl font-light text-gray-600">{title}</h2>
        <div className="mt-4 text-gray-600 flex justify-center space-x-4">
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
          <span>{contact.location}</span>
        </div>
      </header>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-light mb-4 text-gray-700">Summary</h3>
        <p className="text-gray-600">{summary}</p>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-light mb-4 text-gray-700">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-light mb-4 text-gray-700">Experience</h3>
        {experience.map((job, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-medium text-gray-700">{job.title}</h4>
            <p className="text-lg text-gray-600 mb-2">
              {job.company} | {job.date}
            </p>
            <ul className="list-disc list-inside text-gray-600">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-light mb-4 text-gray-700">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-medium text-gray-700">{edu.degree}</h4>
            <p className="text-gray-600">
              {edu.school}, {edu.date}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-light mb-4 text-gray-700">Projects</h3>
        {experience.map((job, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-medium text-gray-700">{job.title}</h4>
            <p className="text-lg text-gray-600 mb-2">
              {job.company} | {job.date}
            </p>
            <ul className="list-disc list-inside text-gray-600">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-light mb-4 text-gray-700">
          Extra Curricular Activities
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          {extraCurricular.map((activity, index) => (
            <li key={index} className="mb-1">
              {activity}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-light mb-4 text-gray-700">Leadership</h3>
        {leadership.map((role, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-medium text-gray-700">{role.title}</h4>
            <p className="text-lg text-gray-600 mb-2">
              {role.organization} | {role.date}
            </p>
            <ul className="list-disc list-inside text-gray-600">
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

export default ModernResume;
