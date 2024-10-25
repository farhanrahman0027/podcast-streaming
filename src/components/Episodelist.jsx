import React from "react";
import { IoMdMic } from 'react-icons/io';
import { CgPlayButtonO } from "react-icons/cg";

const Card = ({ imageSrc, title, description }) => {
    return (
      <div className="relative p-4 shadow-lg rounded-lg bg-white">
        <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg" />
        {/* Overlay Icon */}
        
        <h2 className="mt-4 text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        {/* Listen Now Button */}
        <div className="mt-4 flex gap-2">
       
          <a href="#" className="text-blue-600 font-semibold flex justify-center items-center hover:underline">
          <CgPlayButtonO className="text-blue-600 text-3xl"/>
            Listen Now
          </a>
        </div>
      </div>
    );
  };
  
  export default Card;


