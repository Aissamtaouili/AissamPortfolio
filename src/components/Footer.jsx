import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full footer-animate-gradient text-zinc-200 py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Address & Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="mb-1">123 Main Street, City, Country</p>
          <p className="mb-1">
            Email:{" "}
            <a
              href="mailto:your@email.com"
              className="underline hover:text-amber-400"
            >
              your@email.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="underline hover:text-amber-400"
            >
              +123 456 7890
            </a>
          </p>
        </div>
        {/* Footer Navigation Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="hover:text-amber-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="hover:text-amber-400 transition-colors"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-amber-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-amber-400 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-amber-400 transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-2">Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-zinc-800 text-zinc-100 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-amber-400 text-black font-semibold hover:bg-amber-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-zinc-400 text-sm">
        &copy; {new Date().getFullYear()} Taouili Aissam. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
