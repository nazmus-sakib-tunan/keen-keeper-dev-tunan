import React from "react";
import { Link } from "react-router";


const NotFoundPage = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="text-center">
        
        {/* 404 Text */}
        <h1 className="text-9xl font-extrabold text-[#244D3F]">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-lg shadow-md hover:bg-[#1b3a2f] transition-all duration-300">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;