import React from "react";
import Hero from "./components/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";

const App = () => {
  return (
    <div className="font-clash">
      <BrowserRouter>
        <Routes>
          <Route index="true" element={<Hero />} />
          <Route path="/templates" element={<ResumeBuilder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
