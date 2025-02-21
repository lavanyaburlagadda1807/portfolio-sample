import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl">Discover my work and projects.</p>
      </motion.div>
    </section>
  );
}

export default Hero;
