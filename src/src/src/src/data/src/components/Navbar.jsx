import React from 'react';

export default function Navbar() {
  return (
    <nav className="glass-panel fixed top-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center">
      <div className="text-xl font-bold tracking-tighter text-apple-text cursor-pointer hover:opacity-80 transition-opacity">
        STUDIO_04
      </div>
      <ul className="hidden md:flex space-x-8 text-sm font-medium text-apple-muted">
        <li className="hover:text-apple-text transition-colors cursor-pointer">Work</li>
        <li className="hover:text-apple-text transition-colors cursor-pointer">Expertise</li>
        <li className="hover:text-apple-text transition-colors cursor-pointer">Global Team</li>
      </ul>
      <button className="text-sm font-medium border border-apple-muted/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
        Contact Us
      </button>
    </nav>
  );
}
