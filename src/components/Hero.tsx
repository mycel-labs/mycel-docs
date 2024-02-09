import React from 'react';
import Background from '../assets/hero.png';

export const Hero = () => (
  <div
    className="relative bg-cover bg-center h-screen"
    style={{ height: '33vh', backgroundImage: `url(${Background})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
      <h1 className="text-5xl font-bold mb-4">Mycel</h1>
      <p className="text-xl mb-8">ID based Intent-Centeric Interface</p>
    </div>
  </div>
);
