import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pic from "../media/pic.jpeg";

gsap.registerPlugin(ScrollTrigger);

const About = ({ isDarkMode }) => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Kill any existing scroll triggers to prevent duplicates
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%", 
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false, 
        smooth: true,
        scrub: false, 
      }
    });

    
    tl.set([imgRef.current, textRef.current], {
      opacity: 0,
    });

    
    tl.fromTo(imgRef.current, 
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
      }
    )
    .fromTo(textRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
      },
      "-=0.8" 
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section
      id="about"
      className={`p-12 ${isDarkMode ? 'bg-blue-gray-900' : 'bg-blue-100'} rounded-lg mx-4 overflow-hidden`}
    >
      <h2 className={`text-4xl font-bold border-b-2 border-blue-400 inline-block pb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        About me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-6 mt-6 space-y-6 md:space-y-0">
        <div className="w-60 flex-shrink-0">
          <img
            ref={imgRef}
            src={pic}
            alt="Wiame Ramzi"
            className="w-full rounded-xl shadow-lg border-4 border-blue-400"
          />
        </div>
        <div ref={textRef} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
          <p className="mb-4">
            Wiame Ramzi is a dedicated full-stack developer with a background in physics and energy. 
            Currently pursuing expertise in web development, she has a strong foundation in coding, 
            software development, and problem-solving. Passionate about technology and innovation, 
            Wiame is eager to build efficient, scalable applications.
          </p>
          <p className="mb-4">
            Her journey began with a license in Physics specializing in Energy, 
            where she developed analytical and computational skills, including experience with MATLAB. 
            Transitioning into the digital field, she enrolled in an intensive development training program 
            to master front-end and back-end technologies.
          </p>
          <p>
            Wiame has worked on projects ranging from task management systems to dynamic web applications, 
            showcasing her ability to design, develop, and optimize software solutions. She is skilled in React.js,
            JavaScript, jQuery, and UI/UX design with tools like Figma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;