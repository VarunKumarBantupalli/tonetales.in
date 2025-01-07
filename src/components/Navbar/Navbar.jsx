import React from 'react';
import logo from '../../assets/images/main_logo/tonetales.png';
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center  bg-black   h-[10vh] px-4 md:px-8 lg:px-12 w-full">
        {/* Logo Section */}
        <div className="left  h-[100%] items-center flex justify-center">
          <img src={logo} alt="Logo" className="h-[80%] w-auto object-cover rounded-full border-2 shadow-md" />
        </div>

        {/* Navigation Section */}
        <div className="right items-center flex justify-center space-x-6 text-white text-sm md:text-base
                         ">
          <h1 className="hover:scale-125 hover:text-white cursor-pointer text-gray-500 font-bold">
            About
          </h1>
          <h1 className="hover:scale-125 hover:text-white cursor-pointer text-gray-500 font-bold">
            Merchandise
          </h1>          
            <div className="hover:text-white cursor-pointer text-amber "><CgProfile size={24} /></div>
          

        </div>
      </div>
    </>
  );
}

export default Navbar;
