import React, { useEffect } from 'react';
import gsap from 'gsap';

function Info() {
  useEffect(() => {
    const scrambleText = (selector, text, chars = 'XO') => {
      const element = document.querySelector(selector);
      const letters = text.split('');
      element.innerHTML = '';

      // Split the text into individual characters and wrap each in a span
      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        element.appendChild(span);
      });

      // Animate each span to create a scramble effect
      const spans = element.querySelectorAll('span');
      gsap.fromTo(
        spans,
        {
          opacity: 0,
          y: (index) => gsap.utils.random(-50, 50),
          x: (index) => gsap.utils.random(-50, 50),
          rotation: (index) => gsap.utils.random(-180, 180),
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          rotation: 360,
          duration: 0.1,
          stagger: 0.1,
          delay: 0.1,
          ease: 'power3.out',
        }
      );
    };

    // Apply scramble effect to the text elements
    scrambleText('.first-text', 'Welcome to ToneTales');
    scrambleText('.second-text', '"Where artistry meets opportunity!"');
    scrambleText('.third-text', 'Let us bring your events to life with unforgettable performances.');
  }, []);

  return (
    <div className="flex justify-center bg-black items-center  flex-col min-h-[50vh] w-full ">
      <h1 className="first-text text-3xl md:text-4xl lg:text-5xl  text-gray-600 font-bold mb-4 text-center  ">Welcome to ToneTales</h1>


      <h2 className="second-text text-lg md:text-2xl text-gray-600 font-bold mb-4 text-center">"Where artistry meets opportunity! We connect talented performers—singers, dancers, bands, and comedians—with vibrant venues like cafes, pubs, bars, and private events."</h2>
      <h1 className="third-text text-3xl md:text-2xl text-gray-600 font-bold mb-4 text-center">Let us bring your events to life with unforgettable performances."</h1>
      <button
        className="p-3 text-[#cd7f32] text-xl font-bold border-4 border-transparent rounded-xl hover:cursor-pointer hover:scale-105
         bg-gray-900">
        Join the Tale
      </button>


    </div>
  );
}

export default Info;
