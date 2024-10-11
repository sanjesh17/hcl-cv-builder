import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const ResumeOption = () => {
  const templates = [
    { name: "Creative Resume", image: "path/to/creative-resume-image.jpg" },
    { name: "Modern Resume", image: "path/to/modern-resume-image.jpg" },
    { name: "Classic Resume", image: "path/to/classic-resume-image.jpg" },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-5xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
              Choose Your Resume Template
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">
              Select from our professionally designed templates to create your
              perfect resume. Each template is ATS-friendly and tailored to
              showcase your unique skills and experience.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white w-max px-10 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <img
                  src={template.image}
                  alt={`${template.name} preview`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {template.name}
                  </h3>
                  <Link to={`/resumebuilder`}>
                    <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
                      Select Template
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumeOption;
