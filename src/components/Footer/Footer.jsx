import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className="flex footer flex-col h-auto w-full bg-black  text-white">
      
      <div className="details flex flex-col lg:flex-row flex-grow justify-between items-center p-5 space-y-5 lg:space-y-0">
        
        <div className="contact w-full lg:w-[33%] flex flex-col items-center justify-center space-y-3">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-bronze-start to-bronze-end text-2xl font-bold">
            Contact
          </h1>
          <div className="phone flex items-center">
            <FaPhoneAlt className="text-2xl m-2 text-blue-500" />
            <h1>+91 75695 94275</h1>
          </div>
          <div className="mail flex items-center">
            <MdOutlineMail className="text-2xl m- text-red-500" />
            <h1>tonetaless04@gmail.com</h1>
          </div>
        </div>

       
        <div className="address w-full lg:w-[33%] flex flex-col items-center justify-center space-y-2">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-bronze-start to-bronze-end text-2xl font-bold ">
            Address
          </h1>
          <h1 className="text-sm">Greenfield Business Hub</h1>
          <h1 className="text-sm">Block C, 3rd Floor, 22 Park Avenue</h1>
          <h1 className="text-sm">Springfield, CA 90210</h1>
        </div>

        
        <div className="socialmedia w-full lg:w-[33%] flex flex-col items-center justify-center space-y-3">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-bronze-start to-bronze-end text-2xl font-bold">
            Social Media
          </h1>
          <div className="flex items-center space-x-3">
            <h1>Follow Us On</h1>
            <a href="https://www.instagram.com/tonetaless/"> <FaInstagram className="text-2xl text-pink-500" /> </a>
          </div>
          <div className="flex items-center space-x-3">
            <h1>Connect with us</h1>
            <a href="https://www.linkedin.com/in/bhanu-prasad-5a9022145/"> <CiLinkedin className="text-2xl text-blue-500" /></a>
          </div>
        </div>
      </div>

      
      <div className="flex items-end justify-evenly p-5 h-[15%] w-full">
        <div className="text-5xl lg:text-9xl flex justify-evenly text-transparent bg-clip-text bg-gradient-to-r from-bronze-start to-bronze-end font-bold space-x-4 ">
          {Array.from("ToneTales").map((letter, index) => (
            <div  key={index}>{letter}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
