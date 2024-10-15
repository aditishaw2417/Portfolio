import React from "react";

const Skills = () => {
  return (
    <div className="bg-white bg-opacity-40 text-white pb-6 pt-6 pl-6 border opacity-60 rounded-lg items-center justify-center">
      <h1 className="sm:text-[22px] text-[18px] font-mono font-bold mb-4">
        SKILLS
      </h1>
      <p className="sm:text-[20px] text-[16px] font-mono font-bold mb-8">
        Hover over the pie chart for proficiency in each skill.
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-x-2 gap-y-5">
        <div>
          <img
            src="/assets/html-5.png"
            className="sm:max-w-[40%] w-[60%]"
            alt="HTML"
          />
        </div>
        <img
          src="/assets/css-3.png"
          className="sm:max-w-[40%] w-[60%]"
          alt="CSS"
        />
        <img
          src="/assets/js.png"
          className="sm:max-w-[40%] w-[50%]"
          alt="JavaScript"
        />
        <img
          src="/assets/java.png"
          className="sm:max-w-[40%] w-[60%]"
          alt="Java"
        />
        <img
          src="/assets/react_logo.png"
          className="max-w-[40%] w-[60%]"
          alt="Bootstrap"
        />
        <img
          src="/assets/mysql.png"
          className="sm:max-w-[40%] w-[50%]"
          alt="MySQL"
        />
        <img
          src="/assets/python.png"
          className="sm:max-w-[40%] w-[50%]"
          alt="Python"
        />
        <img
          src="/assets/git.png"
          className="sm:max-w-[40%] w-[60%]"
          alt="Git"
        />
        <img
          src="/assets/tailwind.png"
          className="max-w-[40%] w-[60%]"
          alt="Tailwind"
        />
      </div>
    </div>
  );
};

export default Skills;
