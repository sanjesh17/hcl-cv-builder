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
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="bg-indigo-800 text-white p-8 md:w-1/3">
            <div className="mb-12">
              <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
                {name}
              </h1>
              <h2 className="text-xl font-light italic mb-6">{title}</h2>
              <div className="space-y-2">
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {contact.email}
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {contact.phone}
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {contact.location}
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 border-b-2 border-indigo-500 pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 border-b-2 border-indigo-500 pb-2">
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-indigo-200">{edu.school}</p>
                  <p className="text-sm text-indigo-300">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="p-8 md:w-2/3">
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4 pb-2 border-b-2 border-indigo-800">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">{summary}</p>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold text-indigo-800 mb-6 pb-2 border-b-2 border-indigo-800">
                Experience
              </h3>
              {experience.map((job, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-xl font-semibold text-indigo-700">
                    {job.jobTitle}
                  </h4>
                  <p className="text-lg text-gray-600 mb-2">{job.company}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {job.startDate} - {job.endDate}
                  </p>
                  <ul className="list-disc list-inside text-gray-700">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="mb-1">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4 pb-2 border-b-2 border-indigo-800">
                Extra-Curricular Activities
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {extraCurricular.map((activity, index) => (
                  <li key={index} className="mb-2">
                    {activity}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-indigo-800 mb-4 pb-2 border-b-2 border-indigo-800">
                Leadership
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {leadership.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernResume;
