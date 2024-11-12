import React from "react";
import { NavLink } from "react-router-dom";
import applepodcasticon from "../assets/images/applepodcasticon.png";
import googlepodcasticon from "../assets/images/googlepodcasticon.png";
import soundcloud from "../assets/images/soundcloud.png";
import spotify from "../assets/images/spotify.png";
const footer = () => {
  return (
    <div className="relative bg-slate-900 text-white  mt-[-130px]">
      {/*Top content */}

      <div className="flex justify-between w-full  pt-40">
        <div className="ml-28 text-3xl font-semibold">
          <h2>Podcstr</h2>
        </div>
        <div className="grid grid-cols-3 gap-12 mr-56">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Pages</h3>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/podcast">Podcast</NavLink>
            <NavLink to="/host">Host</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Reach Us</h3>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Subscribe</h3>
            <a href="" className="flex gap-2">
              <img src={applepodcasticon} alt="" className="w-8"/>
              <p>Apple Podcast</p>
            </a>
            <a href="" className="flex gap-2">
              <img src={googlepodcasticon} alt="" className="w-8" />
              <p>Google Podcast</p>
            </a>
            <a href="" className="flex gap-2">
              <img src={soundcloud} alt="" className="w-8"/>
              <p>SOUNDCLOUD</p>
            </a>
            <a href="" className="flex gap-2">
              <img src={spotify} alt="" className="w-8"/>
              <p>Spotify</p>
            </a>
          </div>
        </div>
      </div>

      {/*bottom content */}
      <div className="flex  bg-blue-700 mt-40 justify-center text-center text-white ">
        <p> © Copyright podcstr 2024 </p>
      </div>
    </div>
  );
};

export default footer;
