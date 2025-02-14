import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`text-center p-6 mt-10 ${isDarkMode ? 'bg-gray-900' : 'bg-blue-200'} `}
    >
      <p className={`${isDarkMode ? 'text-white' : 'text-black-300'}`}>
        © 2025 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
