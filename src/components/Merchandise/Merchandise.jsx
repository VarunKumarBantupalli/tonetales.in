import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import logo from '../../assets/images/main_logo/white_logo.png'

const Merchandise = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
    })
    
    .from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
    }, '-=0.8')
    .from(contentRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
    }, '-=0.8');
  }, []);

  return (
    <div className="min-h-screen w-full text-white relative overflow-hidden">

      
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-full mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
             
          <img ref={imageRef} src={logo} alt="" />

            <div className=" text-center text-4xl">
              <div ref={titleRef}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-bronze-start to-bronze-end text-transparent bg-clip-text">
                  Merch Drop
                  
                  Coming Soon
                </h1>
              </div>
              
              <div ref={contentRef} className="space-y-8">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  Get ready for exclusive ToneTales merchandise. Be the first to know when we launch our collection of unique designs and limited edition items.
                </p>




              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;