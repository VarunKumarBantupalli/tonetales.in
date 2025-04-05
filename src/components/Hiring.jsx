import React from 'react';
import { Music, Palette, HeartHandshake } from 'lucide-react';

import { FaInstagram, FaArrowRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Hiring = () => {
  const handleApply = () => {
    // Replace with your actual Google Form URL
    window.open('https://forms.gle/v5WGLyGZoKejqMYt9', '_blank');
  };

  return (
    <div className="min-h-screen   py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Hiring Poster */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
                alt="Music Studio"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ">
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    We're Hiring Artists!
                  </h2>
                  <div className="flex gap-4">
                    <Palette className="w-8 h-8 text-lg font-medium text-white " />
                    <Music  className="w-8 h-8 text-lg font-medium text-white " />
                    <HeartHandshake  className="w-8 h-8 text-lg font-medium text-white "/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Description and CTA */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Join the ToneTales Family
              </h1>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  We're looking for passionate artists who want to be part of a unique
                  platform that bridges the gap between artistic expression and holistic
                  wellness spaces.
                </p>
                <p>
                  At ToneTales, we believe in the transformative power of art and its
                  ability to create healing environments. Our mission is to connect
                  talented artists with holistic venues, creating harmonious spaces
                  that inspire and heal.
                </p>
                <div className="flex flex-col space-y-4">
                  <h3 className="font-semibold text-gray-800">What we offer:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Collaborative opportunities with wellness centers</li>
                    <li>Platform to showcase your artistic vision</li>
                    <li>Community of like-minded creative souls</li>
                    <li>Flexible engagement opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-6">


              <button
                onClick={handleApply}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-bronze-start to-bronze-end rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
                <SlCalender className="w-5 h-5" />
                <span>Apply</span>
                <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-bronze-start to-bronze-end opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>


              <p className="text-sm text-gray-500">
                Join us in creating spaces that inspire and heal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;