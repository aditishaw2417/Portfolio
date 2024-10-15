import React from "react";
import CircularProgressBar from "./CircularProgressBar";
import Skills from "./Skills";

const SkillsPage = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between sm:p-8 p-4 bg-black min-h-screen items-center">
      <div className="sm:w-[60%] sm:pl-4 w-[80%]">
        <Skills />
      </div>
      <div className="sm:w-1/2 sm:pr-4 w-[100%]">
        <CircularProgressBar />
      </div>
    </div>
  );
};

export default SkillsPage;
