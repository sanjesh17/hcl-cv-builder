import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-2xl dark:bg-gray-900 sticky top-0 left-0 z-50">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <p className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
          home
        </p>
        <p className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          Build
        </p>
        <p className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          Github
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
