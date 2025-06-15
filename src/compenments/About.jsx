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
            problems into elegant, functional software.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My journey into tech is grounded in the world of industrial
            engineering. For over two years as a Process Technician at Lear
            Corporation, I was on the front lines of launching new projects,
            where I learned to deconstruct complex systems, manage technical
            documentation, and ensure every detail was perfect before
            production. This experience taught me a valuable lesson: every great
            product, whether physical or digital, relies on a solid,
            well-documented, and scalable foundation.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Now, I apply that same systematic approach to the world of software.
            I don't just write code; I architect solutions. I find deep
            satisfaction in building robust back-end systems and pairing them
            with intuitive, user-friendly front-end experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
