import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ClassicResume from "../../components/Templates/ClassicResume";
import CreativeResume from "../../components/Templates/CreativeResume";
import ModernResume from "../../components/Templates/ModernResume";

const ResumeBuilder = () => {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState({
    name: "",
    title: "",
    contact: {
      email: "",
      phone: "",
      location: "",
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
    extraCurricular: [],
    leadership: [],
  });

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [inputText, setInputText] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [loading, setLoading] = useState(false);

  const [activities, setActivities] = useState([""]);
  const [leadershipExperiences, setLeadershipExperiences] = useState([""]);

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

  const addActivity = () => {
    setActivities([...activities, ""]);
  };

  const handleActivityChange = (index, value) => {
    const newActivities = [...activities];
    newActivities[index] = value;
    setActivities(newActivities);
  };

  const addLeadershipExperience = () => {
    setLeadershipExperiences([...leadershipExperiences, ""]);
  };

  const handleLeadershipChange = (index, value) => {
    const newLeadershipExperiences = [...leadershipExperiences];
    newLeadershipExperiences[index] = value;
    setLeadershipExperiences(newLeadershipExperiences);
  };

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
    if (!resumeData.skills.includes(skill)) {
      setResumeData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, skill],
      }));
      setInputValue("");
      setSuggestions([]);
    }
  };

  const handleRemoveSkill = (index) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, i) => i !== index),
    }));
  };

  const handleNextStep = () => {
    if (step === 7) {
      console.log("Resume Data:", resumeData);
    } else {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [name]: value,
      },
    }));
  };

  const handleSummaryChange = (e) => {
    const { value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      summary: value,
    }));
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      education: prevData.education.map((edu, i) =>
        i === index ? { ...edu, [name]: value } : edu
      ),
    }));
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      experience: prevData.experience.map((exp, i) =>
        i === index ? { ...exp, [name]: value } : exp
      ),
    }));
  };

  const handleAddArrayItem = (field, newItem = "") => {
    setResumeData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], newItem],
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setResumeData((prevData) => ({
      ...prevData,
      [field]: prevData[field].map((item, i) => (i === index ? value : item)),
    }));
  };

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
                  name="name"
                  value={resumeData.name}
                  onChange={handleChange}
                  className="p-4 rounded-md text-white bg-gray-950 text-xl outline-none w-80 shadow-xl"
                  placeholder="e.g. Sanjesh"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Last Name</label>
                <input
                  type="text"
                  name="title"
                  value={resumeData.title}
                  onChange={handleChange}
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                  placeholder="e.g. Ramesh"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-white mt-9">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className="mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={resumeData.contact.email}
                  onChange={handleContactChange}
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                  placeholder="sample@gmail.com"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={resumeData.contact.phone}
                  onChange={handleContactChange}
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                  placeholder="e.g. +91 1234567891"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-white mt-9">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className="mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={resumeData.contact.location}
                  onChange={handleContactChange}
                  className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                  placeholder="Chennai, India"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-9">
            <button
              onClick={handleNextStep}
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
              value={resumeData.summary}
              onChange={handleSummaryChange}
              className="h-80 w-[40%] rounded-lg p-9 bg-gray-950 text-white text-3xl shadow-2xl outline-none"
            ></textarea>
          </div>
          <div className="flex justify-center items-center gap-8 mt-9">
            <button
              onClick={handlePreviousStep}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-2xl hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Previous : Contact Info
            </button>
            <button
              onClick={handleNextStep}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Next : Skills
            </button>
          </div>
        </section>
      </>
    );
  } else if (step === 3) {
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
              {resumeData.skills.map((skill, index) => (
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
              onClick={handlePreviousStep}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-2xl hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Previous : Summary
            </button>
            <button
              onClick={handleNextStep}
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
              Your educational background may be a bonus for your resume
              selection
            </p>
          </div>
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-center text-white mt-9">
                <div className="flex gap-5">
                  <div className="flex flex-col">
                    <label className="mb-2">Degree</label>
                    <input
                      type="text"
                      name="degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(e, index)}
                      className="p-4 rounded-md text-white bg-gray-950 text-xl outline-none w-96 shadow-xl"
                      placeholder="e.g. Bachelor of Engineering in CSE"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2">School/University</label>
                    <input
                      type="text"
                      name="school"
                      value={edu.school}
                      onChange={(e) => handleEducationChange(e, index)}
                      className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-96 shadow-xl"
                      placeholder="e.g. Sathyabama University"
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
                      name="startDate"
                      value={edu.startDate}
                      onChange={(e) => handleEducationChange(e, index)}
                      className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2">End Date / Expected Date</label>
                    <input
                      type="date"
                      name="endDate"
                      value={edu.endDate}
                      onChange={(e) => handleEducationChange(e, index)}
                      className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button
              onClick={() =>
                setResumeData((prev) => ({
                  ...prev,
                  education: [...prev.education, {}],
                }))
              }
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Education
            </button>
          </div>
          <div className="flex justify-center items-center gap-8 mt-9">
            <button
              onClick={handlePreviousStep}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-2xl hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Previous : Skills
            </button>
            <button
              onClick={handleNextStep}
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
        setResumeData((prevData) => ({
          ...prevData,
          experience: {
            ...prevData.experience,
            responsibilities: points,
          },
        }));
      } catch (error) {
        console.error("Error generating content:", error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900 h-screen">
          <div className="py-10 flex justify-center items-center flex-col shadow-xl">
            <h1 className="text-center text-4xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Add Your Work Experience
            </h1>
            <p className="text-2xl text-slate-500">
              Showcase your key experiences to stand out in front of recruiters
            </p>
          </div>

          {resumeData.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-center text-white mt-9">
                <div className="flex gap-5">
                  <div className="flex flex-col">
                    <label className="mb-2">Job Title</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={exp.jobTitle || ""}
                      onChange={(e) => handleExperienceChange(e, index)}
                      className="p-4 rounded-md text-white bg-gray-950 text-xl outline-none w-96 shadow-xl"
                      placeholder="e.g. Full Stack Developer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={exp.company || ""}
                      onChange={(e) => handleExperienceChange(e, index)}
                      className="p-4 rounded-md text-white bg-gray-950 text-xl outline-none w-96 shadow-xl"
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
                      name="startDate"
                      value={exp.startDate || ""}
                      onChange={(e) => handleExperienceChange(e, index)}
                      className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2">End Date</label>
                    <input
                      type="date"
                      name="endDate"
                      value={exp.endDate || ""}
                      onChange={(e) => handleExperienceChange(e, index)}
                      className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl w-80 shadow-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center text-white mt-9">
                <div className="flex flex-col w-full max-w-2xl">
                  <label className="mb-2">Responsibilities</label>
                  <textarea
                    name="responsibilities"
                    value={
                      Array.isArray(exp.responsibilities)
                        ? exp.responsibilities.join("\n")
                        : exp.responsibilities || ""
                    }
                    onChange={(e) => {
                      const newResponsibilities = e.target.value.split("\n");
                      handleExperienceChange(
                        {
                          target: {
                            name: "responsibilities",
                            value: newResponsibilities,
                          },
                        },
                        index
                      );
                    }}
                    className="p-4 rounded-md text-white bg-gray-950 outline-none text-xl shadow-xl"
                    rows="4"
                    placeholder="Enter responsibilities (one per line)"
                  ></textarea>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button
              onClick={() =>
                setResumeData((prev) => ({
                  ...prev,
                  experience: [...prev.experience, { responsibilities: [] }],
                }))
              }
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Experience
            </button>
          </div>
          <div className="flex justify-center items-center gap-8 mt-9 pb-9">
            <button
              onClick={handlePreviousStep}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-2xl hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Previous : Education
            </button>
            <button
              onClick={handleNextStep}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Next : Extra Curricular Activities
            </button>
          </div>
        </section>
      </>
    );
  } else if (step === 6) {
    return (
      <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900 h-screen">
          <div className="py-10 flex justify-center items-center flex-col shadow-xl">
            <h1 className="text-center text-4xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Add Extra Curricular Activities
            </h1>
            <p className="text-2xl text-slate-500">
              Adding extracurricular activities helps employers see your
              well-rounded personality and interests.
            </p>
          </div>
          {resumeData.extraCurricular.map((activity, index) => (
            <div key={index} className="flex justify-center text-white mt-9">
              <div className="flex gap-5">
                <div className="flex flex-col">
                  <label className="mb-2">Add an Activity</label>
                  <input
                    type="text"
                    className="p-4 rounded-md text-white bg-gray-950 text-xl outline-none w-96 shadow-xl"
                    placeholder="e.g. Member of GDSC"
                    value={activity}
                    onChange={(e) =>
                      handleArrayChange(
                        "extraCurricular",
                        index,
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handleAddArrayItem("extraCurricular")}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Activity
            </button>
          </div>
          <div className="flex justify-center items-center gap-8 mt-9">
            <button
              onClick={handlePreviousStep}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-2xl hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Previous : Experience
            </button>
            <button
              onClick={handleNextStep}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Next : Leadership
            </button>
          </div>
        </section>
      </>
    );
  } else if (step === 7) {
    return (
      <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900 h-screen">
          <div className="py-10 flex justify-center items-center flex-col shadow-xl">
            <h1 className="text-center text-4xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Add Leadership Experience
            </h1>
            <p className="text-2xl text-slate-500">
              Showcase your leadership roles highlights your ability to lead and
              make an impact.
            </p>
          </div>
          {resumeData.leadership.map((experience, index) => (
            <div key={index} className="flex justify-center text-white mt-9">
              <div className="flex gap-5">
                <div className="flex flex-col">
                  <label className="mb-2">Add Leadership</label>
                  <input
                    type="text"
                    className="p-4 rounded-md text-white bg-gray-950 text-xl outline-none w-96 shadow-xl"
                    placeholder="e.g. President of FOSS Club"
                    value={experience}
                    onChange={(e) =>
                      handleArrayChange("leadership", index, e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handleAddArrayItem("leadership")}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Leadership Experience
            </button>
          </div>
          <div className="flex justify-center items-center gap-8 mt-9">
            <button
              onClick={handlePreviousStep}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-2xl hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Previous : Extra Curricular Activities
            </button>
            <button
              onClick={() => {
                setStep(step + 1);
              }}
              className="px-8 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Generate Resume
            </button>
          </div>
        </section>
      </>
    );
  } else if (step === 8) {
    const safeResumeData = {
      ...resumeData,
      experience: resumeData.experience || [],
      education: resumeData.education || [],
      skills: resumeData.skills || [],
      extraCurricular: resumeData.extraCurricular || [],
      leadership: resumeData.leadership || [],
    };
    return <CreativeResume {...safeResumeData} />;
  }
};

export default ResumeBuilder;
