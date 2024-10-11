import React from "react";
import Navbar from "../Navbar/Navbar";
import ModernResume from "./ModernResume";
import CreativeResume from "./CreativeResume";

const Templates = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-5xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
              Choose a Template
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">
              Select a template that reflects your style and make your CV stand
              out effortlessly!
            </p>
          </div>
        </div>
        <div className="px-52">
          <ModernResume
            name="John Doe"
            title="Software Engineer"
            contact={{
              email: "john.doe@example.com",
              phone: "(123) 456-7890",
              location: "San Francisco, CA",
            }}
            summary="Experienced software engineer with a passion for creating efficient, scalable applications."
            skills={["JavaScript", "React", "Node.js", "Python", "SQL"]}
            education={[
              {
                degree: "B.S. in Computer Science",
                school: "University of California, Berkeley",
                date: "2015-2019",
              },
            ]}
            experience={[
              {
                title: "Software Engineer",
                company: "Tech Corp",
                date: "2019-Present",
                responsibilities: [
                  "Developed and maintained key features of the company's main product",
                  "Collaborated with cross-functional teams to improve system architecture",
                ],
              },
            ]}
            extraCurricular={[
              "Member of the University Coding Club",
              "Volunteer at local Code for Kids workshops",
              "Regular participant in hackathons",
            ]}
            leadership={[
              {
                title: "Team Lead",
                organization: "University Robotics Team",
                date: "2018-2019",
                responsibilities: [
                  "Led a team of 5 in designing and building a robot for an international competition",
                  "Managed project timeline and resource allocation",
                ],
              },
            ]}
          />
        </div>
      </section>
      <CreativeResume
        name="John Doe"
        title="Software Engineer"
        contact={{
          email: "john.doe@example.com",
          phone: "(123) 456-7890",
          location: "San Francisco, CA",
        }}
        summary="Experienced software engineer with a passion for creating efficient, scalable applications."
        skills={["JavaScript", "React", "Node.js", "Python", "SQL"]}
        education={[
          {
            degree: "B.S. in Computer Science",
            school: "University of California, Berkeley",
            date: "2015-2019",
          },
        ]}
        experience={[
          {
            title: "Software Engineer",
            company: "Tech Corp",
            date: "2019-Present",
            responsibilities: [
              "Developed and maintained key features of the company's main product",
              "Collaborated with cross-functional teams to improve system architecture",
            ],
          },
        ]}
        extraCurricular={[
          "Member of the University Coding Club",
          "Volunteer at local Code for Kids workshops",
          "Regular participant in hackathons",
        ]}
        leadership={[
          {
            title: "Team Lead",
            organization: "University Robotics Team",
            date: "2018-2019",
            responsibilities: [
              "Led a team of 5 in designing and building a robot for an international competition",
              "Managed project timeline and resource allocation",
            ],
          },
        ]}
      />
    </>
  );
};

export default Templates;
