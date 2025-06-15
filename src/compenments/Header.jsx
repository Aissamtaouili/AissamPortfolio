import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex justify-between items-center px-8 md:px-12 bg-zinc-900/60 backdrop-blur-md border-b border-zinc-800 shadow-lg z-50">
      <div className="font-bold text-2xl text-zinc-100">Taouili Aissam</div>

      <nav>
        <ul className="flex gap-8 font-medium tracking-wider text-zinc-400">
          <li>
            <a
              href="#about"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              RESUME
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
