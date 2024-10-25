import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="z-10 px-6 md:px-20 lg:px-24 py-4 fixed w-full bg-white shadow-lg">
      {/* Navbar container */}
      <div className="flex justify-between items-center w-ull">
        {/* Logo */}
        <h1 className="text-xl font-semibold">podcstr</h1>

        {/* Mobile Menu Toggle */}
        <button onClick={handleToggle} className="text-xl md:hidden focus:outline-none">
          {isToggled ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Desktop Navigation & Signup Button */}
        <div className="hidden md:flex justify-between items-center">
          {/* Navigation Links */}
          <ul className="flex justify-center gap-8 ">
          <NavLink to="/"><li className="hover:text-blue-500 cursor-pointer">Home</li></NavLink>
            <NavLink to="/podcast"><li className="hover:text-blue-500 cursor-pointer">Podcasts</li></NavLink>
            <NavLink to="/host"><li className="hover:text-blue-500 cursor-pointer">Host</li></NavLink>
            <NavLink to="/about"><li className="hover:text-blue-500 cursor-pointer">About</li></NavLink>
            <NavLink to="/blog"><li className="hover:text-blue-500 cursor-pointer">Blog</li></NavLink>
            <NavLink to="/contact"><li className="hover:text-blue-500 cursor-pointer">Contact</li></NavLink>
          </ul>
        </div>
        {/* Signup Button */}
        <div className="bg-blue-500 text-white hidden md:flex font-semibold border rounded-md py-2 px-3">
            
          <NavLink to="/signup"><button>Sign Up</button></NavLink>
          </div>
      </div>

      {/* Mobile Menu */}
      {isToggled && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center gap-4">
            <li>Podcasts</li>
            <li>Host</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="bg-blue-500 text-white mt-8 w-full flex justify-center font-semibold border rounded-md py-2">
            <button>Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
