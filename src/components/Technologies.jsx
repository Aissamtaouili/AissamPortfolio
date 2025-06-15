import React from "react";
import {
  Code2,
  FileType,
  Atom,
  Zap,
  Palette,
  BarChart3,
  Server,
  Database,
  GitBranch,
  Github,
  Box,
  Code,
  Rocket,
  Bot,
  Link as LucideLink,
} from "lucide-react";

const technologies = [
  { name: "JavaScript", icon: <Code2 size={48} /> },
  { name: "TypeScript", icon: <FileType size={48} /> },
  { name: "React", icon: <Atom size={48} /> },
  { name: "Next.js", icon: <Zap size={48} /> },
  { name: "Tailwind CSS", icon: <Palette size={48} /> },
  { name: "Node.js", icon: <Server size={48} /> },
  { name: "MongoDB", icon: <Database size={48} /> },
  { name: "Git", icon: <GitBranch size={48} /> },
  { name: "GitHub", icon: <Github size={48} /> },
  { name: "Docker", icon: <Box size={48} /> },
  { name: "VS Code", icon: <Code size={48} /> },
  { name: "Astro", icon: <Rocket size={48} /> },
  { name: "OpenAI", icon: <Bot size={48} /> },
  { name: "Web3", icon: <LucideLink size={48} /> },
  { name: "Analytics", icon: <BarChart3 size={48} /> },
];

function Technologies() {
  return (
    <div className="max-w-7xl mx-auto p-5 flex flex-col items-center justify-center gap-8 bg-gray-100 dark:bg-gray-800/50 rounded-xl shadow-lg my-10">
      <div className="max-w-7xl w-full">
        <h3 className="text-3xl font-extrabold  text-center tracking-wide text-white">
          Technologies
        </h3>
        <div className="max-w-7xl m-5 mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800/50 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                  {tech.icon}
                </div>
                <span className="text-sm text-center text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
