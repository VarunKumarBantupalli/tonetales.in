import React, { useEffect, useState } from 'react';


const Clients = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    
    const imageImports = import.meta.glob('../../assets/images/client_logos/*.{png,jpg,jpeg,webp}');

    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.keys(imageImports).map((key) =>
          imageImports[key]().then((module) => module.default)
        )
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <div className=" w-full max-w-8xl mx-auto p-4   ">
      <div className="text-center mt-4 flex justify-center items-center p-4">
        <h1
         className="text-transparent bg-clip-text bg-gradient-to-r from-bronze-start to-bronze-end text-4xl font-bold">
          Our Clients</h1>
      </div>

      <div className="w-full overflow-hidden md:h-[80%]">
        <div className="flex justify-center items-center animate-scrollfast md:animate-scroll whitespace-nowrap">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              
              className="
                h-36 mx-2 inline-block    // Default height for small screens
                sm:h-24                  // Slightly larger on small screens
                md:h-36 
                lg:h-48                  // Larger heights for medium and large screens
                xl:h-56                  // For very large screens
                max-h-56                 // Max height across all sizes (prevents oversized images)
                object-cover             // Maintain image aspect ratio
                rounded-full
                px-4
                py-2
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
