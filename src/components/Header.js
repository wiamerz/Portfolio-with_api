import React from "react";
import light from "../media/light.png";
import dark from "../media/dark.png"; 

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className={`z-50 fixed top-0 left-0 right-0  shadow-md flex justify-between items-center p-2 ${isDarkMode ? 'bg-blue-gray-1000' : 'bg-blue-blue-200'} `}>
      <h1 className={`text-xl font-bold tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}></h1>
      <div className="space-x-6">
        <a href="#home" className={`hover:text-blue-400 transition duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Home</a>
        <a href="#about" className={`hover:text-blue-400 transition duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>About</a>
        <a href="#projects" className={`hover:text-blue-400 transition duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</a>
        <a href="#contact" className={`hover:text-blue-400 transition duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact</a>
      </div>
      <button onClick={toggleTheme} className="px-4 py-2 rounded-lg w-20 transition duration-300">
        <img src={isDarkMode ? light : dark} alt="Theme Toggle" />
      </button>
    </nav>
  );
};

export default Header;






















/*import React from "react";
import pic from "../media/light.png";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-gray-900 shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">Wiame</h1>
      <div className="space-x-6">
      <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
        <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
        <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
      </div>
      <button className=" px-4 py-2 rounded-lg  w-20 transition duration-300">
      <img
         src={pic} 
         alt=""
        />
      </button>
    </nav>
  );
};

export default Header;*/







