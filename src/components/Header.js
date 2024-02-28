import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-center">
        <img
          src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"
          alt="NASA logo"
          className="w-16 h-16"
        />
        <h1 className="text-2xl font-bold">Space Gallery</h1>
      </div>
    </header>
  );
};

export default Header;
