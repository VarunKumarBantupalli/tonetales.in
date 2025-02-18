import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="flex footer flex-col h-auto w-full  ">
      
      <div className="details flex flex-col lg:flex-row flex-grow justify-between items-center p-5 space-y-5 lg:space-y-0">
        
        <div className="contact w-full lg:w-[33%] flex flex-col items-center justify-center space-y-3">
          <h1 className="text-gray-400 fond-bold text-4xl">
            Contact
          </h1>
          <div className="phone flex items-center">
            <FaPhoneAlt className="text-2xl m-2 text-blue-500" />
            <h1 className='text-slate-500 text-xl my-2'>+91 75695 94275</h1>
          </div>
          <div className="mail flex items-center">
            <MdOutlineMail className="text-2xl m- text-red-500" />
            <h1 className='text-slate-500 text-xl my-2' >tonetaless04@gmail.com</h1>
          </div>
        </div>

       
        <div className="links w-full lg:w-[33%] flex flex-col items-center justify-center space-y-2">
          <h1 className="text-gray-400 fond-bold text-4xl ">
            Quick Links
          </h1>
          <div className="flex items-center space-x-3">
            <h1 className='text-slate-500 text-xl my-2'>Band Midhunam</h1>
            <a href="https://www.instagram.com/band_midhunam/"> <FaInstagram className="text-2xl text-pink-500" /> </a>
          </div>
       

         <div className="flex items-center space-x-3">
            <h1 className='text-slate-500 text-xl my-2'>Merchandise</h1>
            <Link to='/shop'> <IoCartOutline className="text-2xl text-yellow-500" /> </Link>
          </div>
          
        </div>

        
        <div className="socialmedia w-full lg:w-[33%] flex flex-col items-center justify-center space-y-3">
          <h1 className="text-gray-400 fond-bold text-4xl">
            Social Media
          </h1>
          <div className="flex items-center space-x-3">
            <h1 className='text-slate-500 text-xl my-2'>Follow Us On</h1>
            <a href="https://www.instagram.com/tonetaless/"> <FaInstagram className="text-2xl text-pink-500" /> </a>
          </div>
          <div className="flex items-center space-x-3">
            <h1 className='text-slate-500 text-xl my-2'>Connect with us</h1>
            <a href="https://www.linkedin.com/in/bhanu-prasad-5a9022145/"> <CiLinkedin className="text-2xl text-blue-500" /></a>
          </div>
        </div>
      </div>

      
      <div className="flex items-end justify-evenly p-5 h-[15%] w-full">
        <div className="
        text-5xl lg:text-9xl flex justify-evenly text-gray-800 font-bold space-x-4 ">
          {Array.from("ToneTales").map((letter, index) => (
            <div  key={index}>{letter}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
