import React, { useEffect, useState } from "react";
import { CgProfile, CgMenu, CgClose } from "react-icons/cg";
import { auth } from "../../authentication/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import new_logo from "../../assets/images/main_logo/white_logo.png";
import { Phone, ShoppingBag } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <nav className="bg-black w-full h-[10vh] px-4 md:px-8 lg:px-12 flex items-center justify-between relative">
      {/* Logo Section */}
      <div className="h-full flex items-center">
        <img 
          onClick={() => navigate('/')} 
          src={new_logo} 
          alt="Logo" 
          className="h-[80%] w-auto object-cover rounded-full shadow-md hover:cursor-pointer hover:opacity-90 transition-opacity" 
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <div onClick={() => navigate('/contactus')} className="group flex items-center">
          <Phone className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
          <span className="hidden md:block ml-2 text-gray-300 group-hover:text-white font-bold">Contact Us</span>
        </div>
        
        <div onClick={() => navigate('/shop')} className="group flex items-center">
          <ShoppingBag className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
          <span className="hidden md:block ml-2 text-gray-300 group-hover:text-white font-bold">Merchandise</span>
        </div>

        {/* Authentication Section */}
        {user ? (
          <div className="flex items-center gap-3">
            <span className="hidden md:block text-yellow-400">{`Welcome, ${user.email.split("@")[0]}`}</span>
            <button 
              onClick={handleLogout}
              className="bg-transparent hover:bg-white border-2 border-white text-white hover:text-black px-4 py-1.5 rounded-md transition-all duration-300 text-sm font-medium"
            >
              Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={() => { navigate('/login'); setMenuOpen(false); }}
            className="text-gray-300 hover:text-white transition-colors p-1"
          >
            <CgProfile className="h-6 w-6" />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;