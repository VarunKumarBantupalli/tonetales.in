import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import drums from '../../assets/svgs/drums.svg';
import guitar from '../../assets/svgs/guitar.svg';
import flute from '../../assets/svgs/flute.svg';
import laugh1 from '../../assets/svgs/laugh1.svg';
import mic from '../../assets/svgs/mic.svg';
import music from '../../assets/svgs/music.svg';
import sitar from '../../assets/svgs/sitar.svg';
import laugh2 from '../../assets/svgs/laugh2.svg';

import logo from '../../assets/images/other_images/landing.png';

const imgData = [
  { id: 1, img: guitar },
  { id: 2, img: drums },
  { id: 3, img: flute },
  { id: 4, img: laugh1 },
  { id: 5, img: mic },
  { id: 6, img: music },
  { id: 7, img: sitar },
  { id: 8, img: laugh2 },
];

function Landing() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.title', {
      opacity: 1,
      scale: 1.2,
      duration: 1,
      delay: 0.3,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative h-[80vh] md:h-screen w-full flex flex-col items-center justify-evenly text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-2]"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      
      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div>

      <div className="flex flex-col items-center relative">
        <h4 className="text-gray-300 text-xl md:text-2xl font-bold mb-4">Welcome to</h4>
        <h1 className="title text-white opacity-0 text-4xl md:text-8xl font-bold mb-8">
          ToneTales
        </h1>
        <h2 className="text-lg md:text-2xl text-gray-300 font-bold mb-4 text-center">
          "Where artistry meets opportunity!"
        </h2>
        <h2 className="text-lg md:text-2xl text-gray-300 font-bold mb-4 text-center">
          "Let us bring your events to life with unforgettable performances."
        </h2>
      </div>
    </div>
  );
}

export default Landing;
