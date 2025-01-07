import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import clients from '../../assets/svgs/clients.svg';
import clock from '../../assets/svgs/clock.svg';
import stats from '../../assets/svgs/newstats.svg';

const statsData = [
  {
    img: clients,
    title: 'Trusted by 35+ Clients',
    description: '"Building enduring partnerships with over 35 satisfied clients, delivering excellence and tailored solutions that exceed expectations."',
  },
  {
    img: stats,
    title: '200+ Successful Shows',
    description: '"Experience the magic of 200+ shows brought to life with creativity, precision, and an unwavering commitment to quality."',
  },
  {
    img: clock,
    title: '6000+ Hours of Dedication',
    description: '"Over 6000 hours devoted to turning ideas into impactful results, ensuring every detail contributes to success."',
  },
];

function Stats() {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardsRef.current.forEach((card, index) => {
            const children = card.children;
            gsap.fromTo(
              children,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, delay: index * 0.2, stagger: 0.1 }
            );
          });
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col justify-around bg-black items-center w-full py-10">
      {/* Title */}
      <div ref={titleRef} className="title text-black bg-black overflow-hidden mb-8">
        <div className="relative w-full h-16 flex items-center justify-center">
          <div className="animate-scroll whitespace-nowrap">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-bronze-start to-bronze-end text-2xl sm:text-3xl lg:text-4xl font-bold">
              Milestones That Define Us
            </h1>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-wrap justify-center gap-6 items-center p-4">
        {statsData.map((stat, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card flex flex-col bg-gray-900 items-center justify-evenly h-auto md:min-h-[30vh] w-[90%] sm:w-[70%] md:w-[45%] lg:w-[30%] rounded-xl shadow-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img src={stat.img} alt={stat.title} className="h-20 w-20 mb-4" />
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-bronze-start to-bronze-end text-lg md:text-xl font-bold text-center mb-2">
              <u>{stat.title}</u>
            </h1>
            <p className="text-gray-400 font-medium text-sm md:text-base text-center px-2">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
