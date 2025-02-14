import React, { useEffect, useRef } from "react";
import enaa from "../media/homePic-removebg-preview (1).png";
import { gsap } from "gsap";

const Home = ({ isDarkMode }) => {
  const titleRef = useRef(null); 

  useEffect(() => {
    const text = "Full-stack Developer"; 
    let letters = text.split(""); // Split text into letters
    let timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 }); 

    function animateTyping() {
      titleRef.current.innerHTML = ""; // Clear the text
      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = 0; // Start hidden
        titleRef.current.appendChild(span);

        timeline.to(span, { opacity: 1, duration: 0.1, ease: "power3.out" }, index * 0.1);
      });
      
      timeline.to(titleRef.current.children, { opacity: 0, duration: 0.05, stagger: 0.05, ease: "power3.in" }, "+=1");
    }

    animateTyping();

    return () => timeline.kill(); 
  }, []);

  return (
    <section
      id="home"
      className={`flex items-center justify-center min-h-screen ${
        isDarkMode ? "bg-blue-gray-900 text-white" : "bg-blue-100 text-black"
      }`}
    >
      <div className="w-5/12 text-center -mt-8">
        <h2 ref={titleRef} className="text-5xl font-bold"></h2> {/* Empty initially */}
        <h3 className="text-2xl text-blue-400 mt-2">Wiame Ramzi</h3>
      </div>
      <img
        src={enaa}
        width={100}
        height={100}
        className="w-4/12 ml-4"
        alt="Profile"
      />
    </section>
  );
};

export default Home;