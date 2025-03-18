import React, { useEffect, useRef } from 'react';
import { Phone, Mail, Instagram, Linkedin, ShoppingBag, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);
  const letterContainerRef = useRef(null);
  const letters = Array.from("ToneTales");

  useEffect(() => {
    if (footerRef.current && letterContainerRef.current) {
      // Animate footer sections
      gsap.from(footerRef.current.querySelectorAll('.footer-section'), {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'top center',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      });

      // Animate letters with a wave effect
      gsap.from(letterContainerRef.current.children, {
        scrollTrigger: {
          trigger: letterContainerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse'
        },
        y: 120,
        rotation: 15,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  }, []);

  const socialLinks = [
    {
      name: 'Band Midhunam',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/band_midhunam/',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Merchandise',
      icon: <ShoppingBag className="w-5 h-5" />,
      isInternal: true,
      url: '/shop',
      color: 'hover:text-yellow-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/tonetaless/',
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/bhanu-prasad-5a9022145/',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <footer 
      ref={footerRef} 
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {/* Contact Section */}
          <div className="footer-section space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight text-center sm:text-left">Get in Touch</h2>
            <div className="space-y-4">
              <a 
                href="tel:+917569594275" 
                className="flex items-center group p-2 -ml-2 rounded-lg transition-colors duration-200 hover:bg-gray-800/50"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 text-sm">Call us at</p>
                  <p className="text-gray-200 group-hover:text-white">+91 75695 94275</p>
                </div>
              </a>
              
              <a 
                href="mailto:tonetaless04@gmail.com" 
                className="flex items-center group p-2 -ml-2 rounded-lg transition-colors duration-200 hover:bg-gray-800/50"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 text-sm">Email us at</p>
                  <p className="text-gray-200 group-hover:text-white">tonetaless04@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight text-center sm:text-left">Quick Links</h2>
            <div className="space-y-3">
              {socialLinks.slice(0, 2).map((link, index) => (
                link.isInternal ? (
                  <Link
                    key={index}
                    to={link.url}
                    className={`group flex items-center p-2 -ml-2 rounded-lg transition-all duration-200 hover:bg-gray-800/50 ${link.color}`}
                  >
                    <div className="flex items-center justify-center w-10 h-10">
                      {link.icon}
                    </div>
                    <span className="ml-3 text-gray-300 group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center p-2 -ml-2 rounded-lg transition-all duration-200 hover:bg-gray-800/50 ${link.color}`}
                  >
                    <div className="flex items-center justify-center w-10 h-10">
                      {link.icon}
                    </div>
                    <span className="ml-3 text-gray-300 group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-section space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight text-center sm:text-left">Connect With Us</h2>
            <div className="space-y-3">
              {socialLinks.slice(2).map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center p-2 -ml-2 rounded-lg transition-all duration-200 hover:bg-gray-800/50 ${link.color}`}
                >
                  <div className="flex items-center justify-center w-10 h-10">
                    {link.icon}
                  </div>
                  <span className="ml-3 text-gray-300 group-hover:text-white transition-colors duration-200">
                    {link.name}
                  </span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Name Animation */}
        <div 
          ref={letterContainerRef} 
          className="relative mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 md:gap-x-4">
            {letters.map((letter, index) => (
              <div
                key={index}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-700 hover:from-gray-400 hover:to-gray-600 cursor-default transform hover:scale-110 transition-all duration-300"
                style={{ 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.1))'
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ToneTales. All rights reserved.
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-30" />
    </footer>
  );
}

export default Footer;