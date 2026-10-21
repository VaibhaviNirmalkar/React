import React from 'react'
import Button from './Button';


function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5DDF5] bg-[#FAF7FF] px-6 py-4 shadow-sm md:px-10">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9E2FF] text-2xl">
          🎓
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-[#49376E]">
            EduBloom
          </h2>
          <p className="text-xs text-[#827590]">
            Students Portal
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-[#6D5A9E]">
        <a href="#about" className="transition hover:text-[#C27897]">
          About
        </a>

        <a href="#careers" className="transition hover:text-[#C27897]">
          Careers
        </a>

        <a href="#contact" className="transition hover:text-[#C27897]">
          Contact
        </a>

        <a href="#courses" className="transition hover:text-[#C27897]">
          Courses
        </a>
      </div>

      {/* Button */}
      <Button />
    </nav>
  );
}

export default Navbar;

