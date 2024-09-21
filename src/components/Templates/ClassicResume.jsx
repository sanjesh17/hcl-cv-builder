import React from "react";

const ClassicResume = ({
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
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
        <h2 className="text-2xl text-gray-600">{title}</h2>
        <div className="mt-2 text-gray-600">
          {contact.email} | {contact.phone} | {contact.location}
        </div>
      </header>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700 border-b border-gray-300 pb-1">
          Summary
        </h3>
        <p className="text-gray-600">{summary}</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700 border-b border-gray-300 pb-1">
          Skills
        </h3>
        <ul className="flex gap-3 list-disc list-inside text-gray-600">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700 border-b border-gray-300 pb-1">
          Education
        </h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h4 className="text-lg font-medium text-gray-700">{edu.degree}</h4>
            <p className="text-sm text-gray-600">
              {edu.school}, {edu.date}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700 border-b border-gray-300 pb-1">
          Projects
        </h3>
        {experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-medium text-gray-700">
              {job.title} at {job.company}
            </h4>
            <p className="text-sm text-gray-600">{job.date}</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700 border-b border-gray-300 pb-1">
          Experience
        </h3>
        {experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-medium text-gray-700">
              {job.title} at {job.company}
            </h4>
            <p className="text-sm text-gray-600">{job.date}</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700 border-b border-gray-300 pb-1">
          Extra Curricular Activities
        </h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {extraCurricular.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700 border-b border-gray-300 pb-1">
          Leadership
        </h3>
        {leadership.map((role, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-medium text-gray-700">
              {role.title} at {role.organization}
            </h4>
            <p className="text-sm text-gray-600">{role.date}</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {role.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ClassicResume;
