import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Artists() {
  const location = useLocation();
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  
  if (location.pathname === '/login') {
    return null;
  }

  const cardsData = [
    { 
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80",
      title: "Rock Bands",
      description: "Experience electrifying performances from top rock bands"
    },
    { 
      image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80",
      title: "Stand-up Comedy",
      description: "Laugh out loud with hilarious stand-up comedians"
    },
    { 
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
      title: "Open Mic Events",
      description: "Discover new talent at our open mic nights"
    },
    { 
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
      title: "Live Music",
      description: "Immerse yourself in live musical performances"
    },
    { 
      image: "https://media.istockphoto.com/id/1324006497/photo/music-controller-dj-mixer-in-a-nightclub-at-a-party.jpg?s=612x612&w=0&k=20&c=AyXSZEWy3lHb7hKUfh9FXAsZGAO_p838uVaAlFbWa9k=",
      title: "DJ Nights",
      description: "Dance the night away with our featured DJs"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAllArtists = () => {
    const artistsSection = document.getElementById('all-artists-section');
    if (artistsSection) {
      artistsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[80vh]  py-20 relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-start to-amber-end text-transparent bg-clip-text">
            Discover Amazing Artists
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From electrifying bands to hilarious comedians, find the perfect entertainment for your event.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="relative group">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll('left')}
              className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Cards Container */}
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-8 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[400px] group/card relative"
              >
                <div className="relative h-[500px] rounded-xl overflow-hidden">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-bronze-start to-bronze-end rounded-xl blur opacity-25 group-hover/card:opacity-75 transition duration-1000" />
                  
                  {/* Card Content */}
                  <div className="relative h-full bg-gray-900 rounded-xl overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Card Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover/card:-translate-y-2">
                      <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-start to-amber-end">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {card.description}
                      </p>
                      <button onClick={() => navigate('/booking')} className="px-4 py-2 bg-gradient-to-r from-bronze-start to-bronze-end rounded-lg font-medium text-white hover:from-bronze-start hover:to-bronze-end transition duration-300 transform hover:scale-105 flex items-center gap-2">
                        Explore <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Artists Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/booking') } 
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-bronze-start to-bronze-end rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>View All Artists</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-bronze-start to-bronze-end opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Artists;