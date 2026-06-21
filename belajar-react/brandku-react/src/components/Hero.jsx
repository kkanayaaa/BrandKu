
import { useState } from 'react';

const Hero = ({count, onTapped}) => {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-white py-24 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Solusi Terbaik untuk Bisnismu
      </h1>
      
      <p className="text-gray-600 mb-8">
        Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
      </p>

      
      {count <3 && (
        <button 
          onClick={onTapped} 
          className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition-all"
        >
          Mulai Gratis
        </button>
      )}

     
      {count === 1 && (
        <p className="text-gray-600 mt-4 text-lg font-medium">Hello World! </p>
      )}

      {count === 2 && (
        <p className="text-red-600 mt-4 text-lg font-medium">Hello World! </p>
      )}
    </section>
  );
};

export default Hero;