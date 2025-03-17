import React, { useEffect, useRef } from 'react';
import { Phone, Mail, Instagram, Linkedin, ShoppingBag } from 'lucide-react';
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
      gsap.from(footerRef.current.querySelectorAll('.footer-section'), {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'top center',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from(letterContainerRef.current.children, {
        scrollTrigger: {
          trigger: letterContainerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });
    }
  }, []);

  const socialLinks = [
    {
      name: 'Band Midhunam',
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      url: 'https://www.instagram.com/band_midhunam/'
    },
    {
      name: 'Merchandise',
      icon: <ShoppingBag className="w-6 h-6 text-yellow-500" />,
      isInternal: true,
      url: '/shop'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      url: 'https://www.instagram.com/tonetaless/'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
      url: 'https://www.linkedin.com/in/bhanu-prasad-5a9022145/'
    }
  ];

  return (
    <footer ref={footerRef} className="bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Section */}
          <div className="footer-section space-y-4">
            <h2 className="text-gray-200 text-lg md:text-xl font-bold">Contact</h2>
            <div className="space-y-3">
              <a href="tel:+917569594275" className="flex items-center justify-center md:justify-start group">
                <Phone className="w-5 h-5 text-blue-500 mr-3 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors">+91 75695 94275</span>
              </a>
              <a href="mailto:tonetaless04@gmail.com" className="flex items-center justify-center md:justify-start group">
                <Mail className="w-5 h-5 text-red-500 mr-3 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors">tonetaless04@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section space-y-4">
            <h2 className="text-gray-200 text-lg md:text-xl font-bold">Quick Links</h2>
            <div className="space-y-3">
              {socialLinks.slice(0, 2).map((link, index) => (
                link.isInternal ? (
                  <Link
                    key={index}
                    to={link.url}
                    className="flex items-center justify-center md:justify-start group hover:translate-x-2 transition-transform"
                  >
                    <span className="text-gray-400 group-hover:text-gray-200 transition-colors mr-3">
                      {link.name}
                    </span>
                    {link.icon}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start group hover:translate-x-2 transition-transform"
                  >
                    <span className="text-gray-400 group-hover:text-gray-200 transition-colors mr-3">
                      {link.name}
                    </span>
                    {link.icon}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-section space-y-4">
            <h2 className="text-gray-200 text-lg md:text-xl font-bold">Social Media</h2>
            <div className="space-y-3">
              {socialLinks.slice(2).map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start group hover:translate-x-2 transition-transform"
                >
                  <span className="text-gray-400 group-hover:text-gray-200 transition-colors mr-3">
                    {link.name}
                  </span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Title */}
        <div ref={letterContainerRef} className="mt-10 py-6">
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
            {letters.map((letter, index) => (
              <div
                key={index}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 hover:text-gray-700 cursor-default transform hover:scale-110 transition-transform"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
