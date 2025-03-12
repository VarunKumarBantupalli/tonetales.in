import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaInstagram, FaArrowRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import poster from '../../assets/images/other_images/midhunam.jpg'
import latest from '../../assets/svgs/new.svg'

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Band = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.from(imageRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 1.5,
    })
      .from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
      }, '-=1')
      .from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
      }, '-=0.8')
      .from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6');
  }, []);

  return (
    <div className="min-h-[80vh] w-full   py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full" ref={imageRef}>
            <div className="relative group">
              <div className="absolute -inset-1 "></div>
              <div className="relative">
                <img 
                  src={poster}
                  alt="Band Midhunam"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl transform transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 w-full space-y-8" ref={contentRef}>
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
              {/* Logo & Title */}
              <div ref={titleRef} className="space-y-4">
                <div className="inline-block">
                  <div className="relative group cursor-pointer">
                    <div className="absolute -inset-1 bg-gradient-to-r from-bronze-start to-bronze-end rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                    <h1 className="flex relative px-7 py-4 bg-black rounded-lg text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-start to-amber-end">
                      Band Midhunam <img className='mx-2 h-12 w-12 filter  ' src={latest} alt="" />
                    </h1>
                    
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  Experience the real music with Band Midhunam. 
                  A unique blend of melodies and pops .
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/band_midhunam/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition duration-300"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-bronze-start to-bronze-end rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative p-3 bg-black rounded-full">
                      <FaInstagram className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                </a>
                <span className="text-gray-400">Follow us on Instagram</span>
              </div>

              {/* CTA Buttons */}
              <div ref={buttonRef} className="flex flex-col space-y-4">
                <button
                 onClick={() => navigate('/contactus') } 
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-bronze-start to-bronze-end rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
                  <SlCalender className="w-5 h-5" />
                  <span>Book Now</span>
                  <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-bronze-start to-bronze-end opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Band;