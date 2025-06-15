import React from "react";
import profile from "../assets/assiro1.jpg"; // Adjust the path if needed

function About() {
  return (
    <div className="max-w-7xl mx-auto p-5 flex flex-col items-center justify-center gap-8 bg-gray-100 dark:bg-gray-800/50 rounded-xl shadow-lg my-10">
      <div className="w-full ">
        <h3 className="text-3xl font-extrabold text-center  tracking-wide text-white">
          {" "}
          About Me
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        <div className="w-48 h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow" />
          <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full" />
          <img
            src={profile}
            alt="Profile"
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Hi there, I'm Taouili Aissam
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a full-stack developer and a Master's candidate in Computer
            Engineering at ENSA Tangier, driven by a passion for turning complex
            problems into elegant, functional software. hello
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
