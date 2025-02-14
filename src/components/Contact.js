import React, { useState } from "react";
import { Link} from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    telephone: "",
    message: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  // New telephone validation function
  const validateTelephone = (phone) => {
    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if the number has 10 digits (typical for most countries)
    // You can modify this based on your specific requirements
    if (cleanPhone.length === 10) {
      return true;
    }
    
    // Check if it's an international number (with country code)
    // Allows for numbers between 11-15 digits
    if (cleanPhone.length >= 11 && cleanPhone.length <= 15) {
      return true;
    }
    
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
    setShowSuccess(false); // Hide success message when user starts typing again
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = "Phone number is required";
      isValid = false;
    } else if (!validateTelephone(formData.telephone)) {
      newErrors.telephone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Process form submission here
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "", telephone: ""});
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className={`p-12 rounded-lg mx-4 ${isDarkMode ? 'bg-blue-gray-900' : 'bg-blue-100'}`}
    >
      <h2
        className={`text-4xl font-bold border-b-2 inline-block pb-2 mb-6 ${isDarkMode ? 'text-white' : 'text-black'} border-blue-400`}
      >
        Contact me
      </h2>
      
      <div className="flex flex-wrap gap-8">
        {/* Left Column - Contact Info */}
        <div className="w-full md:w-4/12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MdOutlineAlternateEmail className="text-blue-400 text-xl" />
              <p className="text-blue-400 text-lg">wiameramzi@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400 text-xl" />
              <p className="text-blue-400 text-lg">0717859643</p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-7/12">
          {showSuccess && (
            <div className="mb-4 p-4 bg-green-500 text-white rounded-lg shadow-md animate-fade-in">
              Message sent successfully! Thank you for contacting us.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className={`w-full p-3 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'} text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-2 border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                className={`w-full p-3 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'} text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-2 border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input 
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Your phone number" 
                className={`w-full p-3 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'} text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.telephone ? 'border-2 border-red-500' : ''}`}
              />
              {errors.telephone && (
                <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>
              )}
            </div>
            <div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                rows="4"
                className={`w-full p-3 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'} text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.message ? 'border-2 border-red-500' : ''}`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Send
            </button>
            <Link to="/MainPage">
              <button className ="bg-blue-200 p-2 m-2 rounded-3xl">Main Page</button>
            </Link>
          </form>
        </div>
      </div>
    </section>


  );
};




export default Contact;