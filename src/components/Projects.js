import React, { useRef } from 'react';
import startup from "../media/startup.jpg";
import meteo from "../media/weatherapp.png";
import portfolio from "../media/portfolio.jpg";
import { FaGithub } from "react-icons/fa";
import gsap from 'gsap';

const Projects = ({ isDarkMode }) => {
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);
  const overlay3Ref = useRef(null);

  const handleMouseEnter = (ref) => {
    gsap.fromTo(ref.current,
      { 
        yPercent: 100,
        opacity: 0
      },
      { 
        yPercent: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }
    );
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      yPercent: 100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    });
  };

  return (
    <section
      id="projects"
      className={`p-12 ${isDarkMode ? 'bg-blue-gray-900' : 'bg-blue-100 '} rounded-lg mx-4`}
    >
      <h2
        className={`text-4xl font-bold inline-block pb-2 ${isDarkMode ? 'text-white' : 'text-black'} border-b-2 border-blue-400`}
      >
        My projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {/* Project 1 */}
        <div className="relative">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden"
            onMouseEnter={() => handleMouseEnter(overlay1Ref)}
            onMouseLeave={() => handleMouseLeave(overlay1Ref)}
          >
            <img
              src={startup}
              alt="Project 1"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />

            <div
              ref={overlay1Ref}
              className="absolute inset-0 bg-blue-900/90 rounded-lg p-4 text-white flex flex-col justify-between items-center text-center h-full"
            >
              <h3 className="text-lg font-bold mt-2">Site Web Startup</h3>
              <p className="text-gray-200 px-4">
                Site web moderne et dynamique développé pour une startup innovante. Ce projet intègre une interface utilisateur intuitive, des animations fluides et une expérience utilisateur optimisée.
              </p>
              <a href="https://github.com/wiamerz/history">
                <button id="github" type="button" className='mb-2'>
                  <FaGithub />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden"
            onMouseEnter={() => handleMouseEnter(overlay2Ref)}
            onMouseLeave={() => handleMouseLeave(overlay2Ref)}
          >
            <img
              src={meteo}
              alt="Project 2"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />

            <div
              ref={overlay2Ref}
              className="absolute inset-0 bg-blue-900/90 rounded-lg p-4 text-white flex flex-col justify-between items-center text-center h-full"
            >
              <h3 className="text-lg font-bold mb-2">Application Météo</h3>
              <p className="text-gray-200 px-4">
                Application météo interactive développée avec HTML, CSS, JS et l'API OpenWeather. Fonctionnalités incluant la géolocalisation, alertes météo en temps réel, et visualisation des données par graphiques.
              </p>
              <a href="https://github.com/wiamerz/Weather-app">
                <button id="github" type="button" className='mb-2'>
                  <FaGithub />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden"
            onMouseEnter={() => handleMouseEnter(overlay3Ref)}
            onMouseLeave={() => handleMouseLeave(overlay3Ref)}
          >
            <img
              src={portfolio}
              alt="Project 3"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />

            <div
              ref={overlay3Ref}
              className="absolute inset-0 bg-blue-900/90 rounded-lg p-4 text-white flex flex-col justify-between items-center text-center h-full"
            >
              <h3 className="text-lg font-bold mt-2">Portfolio Personnel</h3>
              <p className="text-gray-200 px-4">
                Portfolio professionnel conçu avec React.js et Tailwind CSS. Présentation interactive de mes projets avec animations personnalisées, dark mode, et design responsive.
              </p>
              <a href="https://github.com/wiamerz/portfolio-with-react">
                <button id="github" type="button" className='mb-2'>
                  <FaGithub />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;