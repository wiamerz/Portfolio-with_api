import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";  
import { FcAbout } from "react-icons/fc";


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-black"} min-h-screen font-sans overflow-x-hidden`}>
      

        <Routes>
          <Route path="/MainPage" element={<MainPage></MainPage>}>
        </Route>
          <Route path="/" element={
            <>
              <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                <Home isDarkMode={isDarkMode} />
                <About isDarkMode={isDarkMode}/>
                <Projects isDarkMode={isDarkMode}/>
                <Contact isDarkMode={isDarkMode}/>
                <Footer isDarkMode={isDarkMode} />
            </>
          }>
          </Route>
        </Routes>

      
    </div>
  );
};

export default App;
