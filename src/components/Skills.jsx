import React from "react";

const Skills = ({ icon, title, description }) => {
  return (
    <div className=" bg-transparent dark:bg-transparent p-5 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-colors duration-300 ease-in-out border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default Skills;
