import React from "react";
import sponsorlogo from "../assets/images/sponsorlogo.png";
const Sponsors = () => {
  return (
    <div className="px-16 py-20  z-10 relative">
      <div className="bg-blue-700 px-12 py-10 ">
        <h1 className="flex justify-center text-3xl font-semibold text-white mt-18">
          Our Sponsors
        </h1>
        <div className="grid grid-cols-5">
          <img src={sponsorlogo} alt="Sponsor 1"  />
          <img src={sponsorlogo} alt="Sponsor 2" />
          <img src={sponsorlogo} alt="Sponsor 3" />
          <img src={sponsorlogo} alt="Sponsor 4" />
          <img src={sponsorlogo} alt="Sponsor 5" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
