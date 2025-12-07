"use client";

import { useState } from "react";
import ButtonCTA from "./btnCTA";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black rounded-full w-full max-w-[90%] sm:max-w-[800px] lg:max-w-[1000px] h-16 sm:h-20 mx-auto flex justify-between items-center px-4 sm:px-6 relative">
      <a href="/" className="text-white px-2 sm:px-4 text-lg sm:text-xl font-semibold z-30">
        LDW
      </a>
      
      <button
        className="md:hidden text-white z-30 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <ul className="hidden md:flex gap-4 lg:gap-6 items-center px-4">
        <li>
          <a href="" className="text-white hover:text-[#E687D8] transition-colors px-2 sm:px-4">
            A propos
          </a>
        </li>
        <ButtonCTA text="Nous Contacter"/>
      </ul>


      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black rounded-2xl p-6 md:hidden z-20 shadow-lg">
          <ul className="flex flex-col gap-4 items-center">
            <li>
              <a 
                href="" 
                className="text-white hover:text-[#E687D8] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                A propos
              </a>
            </li>
            <li>
              <ButtonCTA text="Nous Contacter"/>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}