import React, { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full  flex flex-col items-center py-10">
     

      {/* Instagram Embed */}
      <blockquote
        className="instagram-media w-full max-w-6xl"
        data-instgrm-permalink="https://www.instagram.com/tonetaless/"
        data-instgrm-version="14"
        data-width="100%"
        data-height="auto"
        style={{
          background: 'transparent',
          border: 'none',
        }}
      >
        {/* Placeholder for Instagram Posts */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-900 rounded-lg shadow-lg">
          {/* Simulating Instagram Posts */}
          {Array.from({ length: 3 }, (_, idx) => (
            <div
              key={idx}
              className="aspect-square bg-gray-700 rounded-lg"
            ></div>
          ))}
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
