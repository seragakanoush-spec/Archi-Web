import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProjectGrid from './components/ProjectGrid';

function App() {
  return (
    <div className="relative min-h-screen bg-apple-dark selection:bg-white selection:text-black">
      <Navbar />

      <header className="relative h-screen w-full flex items-center px-6 md:px-12">
        {/* The 3D Canvas Background */}
        <div className="absolute inset-0 z-0 h-full w-full opacity-60 pointer-events-none md:pointer-events-auto">
           <Hero3D />
        </div>

        {/* Hero Typography */}
        <div className="relative z-10 max-w-4xl pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1] text-apple-text"
          >
            Explore <br className="hidden md:block"/> Beyond <br className="hidden md:block"/> Architecture.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 text-lg md:text-xl text-apple-muted max-w-md font-light"
          >
            Based in the MENA region. Delivering transformative 3D rendering and conceptual design solutions globally.
          </motion.p>
        </div>
      </header>

      <ProjectGrid />
    </div>
  );
}

export default App;
