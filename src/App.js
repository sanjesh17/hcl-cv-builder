import React from "react";
import Hero from "./components/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";
import ResumeOption from "./components/Choose/ResumeOption";

const App = () => {
  return (
    <div className="font-clash">
      <BrowserRouter>
        <Routes>
          <Route index="true" element={<Hero />} />
          <Route path="/resumebuilder" element={<ResumeBuilder />} />
          <Route path="/resumeselect" element={<ResumeOption />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
