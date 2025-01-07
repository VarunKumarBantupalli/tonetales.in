import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import windmill from '../../assets/svgs/windmill.svg';

import drums from '../../assets/svgs/drums.svg';
import guitar from '../../assets/svgs/guitar.svg';
import flute from '../../assets/svgs/flute.svg';
import laugh1 from '../../assets/svgs/laugh1.svg';
import mic from '../../assets/svgs/mic.svg';
import music from '../../assets/svgs/music.svg';
import sitar from '../../assets/svgs/sitar.svg';
import laugh2 from '../../assets/svgs/laugh2.svg';

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

    // Animate title scaling
    gsap.to('.title', {
      opacity: 1,
      scale: 1.2,
      duration: 1,
      delay: 0.3,
    });

    // Windmill animation
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        pin: true,
        trigger: '.pin-windmill',
        start: '50% 50%',
        end: 'bottom+=200% top',
      },
    });
    tl.to('.windmill', { rotate: 900 ,opacity: 0 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-evenly bg-black h-[80vh] md:h-screen w-full">
      {/* Top Scrolling Images */}
      <div className="w-full h-[15%] flex overflow-hidden py-4">
        <div className="flex space-x-4 animate-scroll">
          {imgData.map((data) => (
            <div key={data.id} className="flex-shrink-0">
              <img src={data.img} alt="" className="h-16 md:h-20 lg:h-24 animate-spin " />
            </div>
          ))}
        </div>
      </div>

      {/* Title and Windmill */}
      <div className="flex flex-col items-center relative">
        <h1 className="title text-transparent opacity-0 bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-4xl md:text-8xl font-bold mb-8">
          ToneTales
        </h1>
        <div className="pin-windmill">
          <img
            src={windmill}
            alt="Windmill"
            className="windmill h-20 md:h-32 lg:h-40"
          />
        </div>
      </div>

      {/* Bottom Scrolling Images */}
      <div className="w-full h-[15%] flex overflow-hidden py-4">
        <div className="flex space-x-4 animate-scroll">
          {imgData.map((data) => (
            <div key={data.id} className="flex-shrink-0">
              <img src={data.img} alt="" className="h-16 md:h-20 lg:h-24 animate-spin" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
