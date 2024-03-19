import React from 'react';
import Link from 'next/link';
export default function Homepage() {
  return (
    <div className="flex items-center h-[100vh]">
      <div className="max-w-lg mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Michaels To-Do App</h1>
        <div className="mt-8">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            reiciendis modi cumque, voluptate pariatur amet dolor qui minima
            temporibus eaque! Nihil hic dolores aspernatur nostrum impedit
            voluptates laborum quidem cumque.
          </p>
          <Link href='/sign'>
            <button className="mt-4 bg-[#1d8050] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}