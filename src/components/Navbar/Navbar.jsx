import React, { useEffect, useState } from "react";
import { CgProfile, CgMenu, CgClose } from "react-icons/cg";
import { auth } from "../../authentication/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import new_logo from "../../assets/images/main_logo/white_logo.png";

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
        <img onClick={() => navigate('/')}  src={new_logo} alt="Logo" className="h-[80%] w-auto object-cover rounded-full shadow-md hover:cursor-pointer" />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CgClose /> : <CgMenu />}
      </button>

      {/* Navigation Links */}
      <div className={`absolute md:static top-[10vh] left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center md:space-x-6 transition-transform ${menuOpen ? "block" : "hidden md:flex"}`}>
        <h1 onClick={() => { navigate('/contactus'); setMenuOpen(false); }} className="hover:scale-110 cursor-pointer text-gray-300 font-bold py-2 md:py-0">Contact Us</h1>
        <h1 onClick={() => { navigate('/shop'); setMenuOpen(false); }} className="hover:scale-110 cursor-pointer text-gray-300 font-bold py-2 md:py-0">Merchandise</h1>
      
        {/* Authentication Section */}
        {user ? (
          <div className="flex flex-col md:flex-row items-center gap-3 py-2 md:py-0">
            <div className="text-amber text-lg">{`Welcome, ${user.email.split("@")[0]}`}</div>
            <button 
              onClick={handleLogout}
              className="hover:bg-white transition duration-1000 hover:text-black border-2 border-white text-white px-4 py-2 rounded">
              Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={() => { navigate('/login'); setMenuOpen(false); }}
            className="text-gray-300 text-2xl p-2">
            <CgProfile />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
