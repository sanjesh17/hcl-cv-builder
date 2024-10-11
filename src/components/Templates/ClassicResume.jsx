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
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">{edu.school}</p>
              <p className="text-sm text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700 border-b border-gray-300 pb-1">
          Experience
        </h3>
        {experience.map((job, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h4 className="text-lg font-medium text-gray-700">
                  {job.jobTitle}
                </h4>
                <h5 className="text-sm text-gray-600">{job.company}</h5>
              </div>
              <p className="text-sm text-gray-600">
                {job.startDate} - {job.endDate}
              </p>
            </div>
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
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {leadership.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ClassicResume;
