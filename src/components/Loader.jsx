// Loader.jsx (React 19 Compatible)
import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
      <div className="w-16 h-16 border-4 border-dashed border-red-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
