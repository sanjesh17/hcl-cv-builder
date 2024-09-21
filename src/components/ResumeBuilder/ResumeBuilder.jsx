import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ResumeBuilder = () => {
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [inputText, setInputText] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [loading, setLoading] = useState(false);

  if (step === 1) {
    return (
      <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900 h-screen">
          <div className="py-10 flex justify-center items-center flex-col shadow-xl">
            <h1 className="text-center text-4xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              What's the best way for employers to contact you?
            </h1>
            <p className="text-2xl text-slate-500">
              We suggest including an email and phone number.
            </p>
          </div>
          <div className="flex justify-center text-white mt-9">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className="mb-2">First Name</label>
                <input
                  type="text"
                  className="p-4 rounded-md text-white bg-gray-950 text-xl outline-none w-80 shadow-xl"
                  placeholder="e.g. Sanjesh"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Last Name</label>
                <input
                  type="text"
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                  placeholder="e.g. Ramesh"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-white mt-9">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className="mb-2">Title</label>
                <input
                  type="text"
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                  placeholder="e.g. Software Developer"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Email</label>
                <input
                  type="email"
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                  placeholder="sample@gmail.com"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-white mt-9">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className="mb-2">Phone</label>
                <input
                  type="text"
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                  placeholder="e.g. +91 1234567891"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Location</label>
                <input
                  type="email"
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                  placeholder="Chennai, India"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-9">
            <button
              onClick={() => {
                setStep(step + 1);
              }}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform shadow-2xl bg-blue-600 rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Next : Summary
            </button>
          </div>
        </section>
      </>
    );
  } else if (step === 2) {
    return (
      <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900 h-screen">
          <div className="py-10 flex justify-center items-center flex-col shadow-xl">
            <h1 className="text-center text-4xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Write about yourself
            </h1>
            <p className="text-2xl text-slate-500">
              Write a brief summary about yourself to impress your recruiters!
            </p>
          </div>
          <div className="flex justify-center items-center mt-9">
            <textarea
              name="summary"
              id="summary"
              className="h-80 w-[40%] rounded-lg p-9 bg-gray-950 text-white text-3xl shadow-2xl outline-none"
            ></textarea>
          </div>
          <div className="flex justify-center items-center gap-8 mt-9">
            <button
              onClick={() => {
                setStep(step - 1);
              }}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-2xl hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Previous : Contact Info
            </button>
            <button
              onClick={() => {
                setStep(step + 1);
              }}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Next : Skills
            </button>
          </div>
        </section>
      </>
    );
  } else if (step === 3) {
    const allSkills = [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "Ruby",
      "PHP",
      "Swift",
      "Go",
      "TypeScript",
      "HTML/CSS",
      "React.js",
      "Angular",
      "Vue.js",
      "Node.js",
      "Django",
      "Flask",
      "Ruby on Rails",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Oracle DB",
      "AWS",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Kubernetes",
      "Docker",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "R",
      "Jenkins",
      "Git/GitHub",
      "Terraform",
      "Ansible",
      "Puppet",
      "Ethical Hacking",
      "Penetration Testing",
      "Network Security",
      "Cryptography",
      "Kotlin",
      "Swift",
      "Flutter",
      "React Native",
      "Selenium",
      "Cucumber",
      "Jest",
      "Mocha",
      "Git",
      "Bitbucket",
      "Travis CI",
    ];

    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);

      if (value.length > 0) {
        const filteredSuggestions = allSkills.filter((skill) =>
          skill.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    };

    const handleAddSkill = (skill) => {
      if (!skills.includes(skill)) {
        setSkills([...skills, skill]);
        setInputValue("");
        setSuggestions([]);
      }
    };

    const handleRemoveSkill = (index) => {
      setSkills(skills.filter((_, i) => i !== index));
    };

    return (
      <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900 h-screen">
          <div className="py-10 flex justify-center items-center flex-col shadow-xl">
            <h1 className="text-center text-4xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Add your skills
            </h1>
            <p className="text-2xl text-slate-500">
              Add relevant skills to showcase on your resume
            </p>
          </div>
          <div className="flex justify-center items-center mt-9">
            <div className="flex flex-col">
              <label className="mb-2 text-white">Skills</label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                placeholder="e.g. Python"
              />
              {suggestions.length > 0 && (
                <ul className="bg-white text-black mt-2 rounded-md shadow-lg">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleAddSkill(suggestion)}
                      className="cursor-pointer p-2 hover:bg-gray-200"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md cursor-pointer transition-all duration-200  hover:bg-blue-500"
                  onClick={() => handleRemoveSkill(index)}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-8 mt-9">
            <button
              onClick={() => {
                setStep(step - 1);
              }}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-2xl hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Previous : Summary
            </button>
            <button
              onClick={() => {
                setStep(step + 1);
              }}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Next : Education
            </button>
          </div>
        </section>
      </>
    );
  } else if (step === 4) {
    return (
      <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900 h-screen">
          <div className="py-10 flex justify-center items-center flex-col shadow-xl">
            <h1 className="text-center text-4xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Add Your Educational Details
            </h1>
            <p className="text-2xl text-slate-500">
              Your educational background may be a bonus for you resume
              selection
            </p>
          </div>
          <div className="flex justify-center text-white mt-9">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className="mb-2">Degree</label>
                <input
                  type="text"
                  className="p-4 rounded-md text-white bg-gray-950 text-xl outline-none w-96 shadow-xl"
                  placeholder="e.g. Bachelor of Engineering in CSE"
                />
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col">
                  <label className="mb-2">School/University</label>
                  <input
                    type="text"
                    className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-96 shadow-xl"
                    placeholder="e.g. Sathyabama University"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-white mt-9">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className="mb-2">Start Date</label>
                <input
                  type="date"
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">End Date / Expected Date</label>
                <input
                  type="date"
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                  placeholder="Chennai, India"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 mt-9">
            <button
              onClick={() => {
                setStep(step - 1);
              }}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-2xl hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Previous : Skills
            </button>
            <button
              onClick={() => {
                setStep(step + 1);
              }}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Next : Experience
            </button>
          </div>
        </section>
      </>
    );
  } else if (step === 5) {
    const handleGenerateSuggestions = async () => {
      setLoading(true);
      try {
        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt =
          `please generate a list of key responsibilities in bullet points based on the description provided, I NEED ONLY 4 POINTS NOTHING ELSE NO MARKUP OR ANY EXTRA TEXT:${inputText}` ||
          "Write a story about a magic backpack.";
        const result = await model.generateContent(prompt);

        const points = result.response.text().split("\n");
        setResponsibilities(points);
      } catch (error) {
        console.error("Error generating content:", error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900 max-h-max">
          <div className="py-10 flex justify-center items-center flex-col shadow-xl">
            <h1 className="text-center text-4xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Add Your Work Experience
            </h1>
            <p className="text-2xl text-slate-500">
              Showcase your key experiences to stand out in front of recruiters
            </p>
          </div>

          <div className="flex justify-center text-white mt-9">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className="mb-2">Job Title</label>
                <input
                  type="text"
                  className="p-4 rounded-md text-white bg-gray-950 text-xl outline-none w-96 shadow-xl"
                  placeholder="e.g. Full Stack Developer"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Company</label>
                <input
                  type="text"
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-96 shadow-xl"
                  placeholder="e.g. ABC Tech Solutions"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center text-white mt-9">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className="mb-2">Start Date</label>
                <input
                  type="date"
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">End Date</label>
                <input
                  type="date"
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center text-white mt-9">
            <div className="flex flex-col w-full max-w-3xl">
              <label className="mb-2">Key Responsibilities</label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="p-4 rounded-md text-white bg-gray-950 text-xl outline-none w-full h-32 shadow-xl"
                placeholder="Enter your responsibilities or project details here..."
              />
              <button
                onClick={handleGenerateSuggestions}
                className="mt-4 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-2xl hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate Suggestions with AI"}
              </button>
              <ul className="mt-4">
                {responsibilities.map((item, index) => (
                  <li key={index} className="text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 mt-9 pb-9">
            <button
              onClick={() => {
                setStep(step - 1);
              }}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-2xl hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Previous : Education
            </button>
            <button
              onClick={() => {
                setStep(step + 1);
              }}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Next : Summary
            </button>
          </div>
        </section>
      </>
    );
  }
};

export default ResumeBuilder;
