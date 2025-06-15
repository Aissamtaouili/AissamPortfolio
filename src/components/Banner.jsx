import React from "react";
import backgroundpic from "../assets/background.png"; // Adjust path if necessary

const Banner = () => {
  return (
    <div
      className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden text-center text-white"
      style={{
        backgroundImage: `url(${backgroundpic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 3. A subtle overlay for better text readability */}
      <div className="absolute top-0 left-0 h-full w-full bg-black/40" />

      {/* 4. Content is now correctly centered */}
      <div className="relative z-10 p-4">
        <h1 className="text-4xl font-bold drop-shadow-md md:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p className="mt-2 text-lg drop-shadow-md md:text-xl">
          Aissam Taouili - Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Banner;
