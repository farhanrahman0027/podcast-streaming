import React from "react";
import pic1 from "../assets/images/pic1.svg";
import pic2 from "../assets/images/pic2.svg";
import episode1 from "../assets/images/episode1.svg";
import episode2 from "../assets/images/episode2.svg";
import episode3 from "../assets/images/episode3.svg";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { IoLogoYoutube } from "react-icons/io";
import Card from "../components/Episodelist";
import Testimonialcard from "../components/testimonialcard";
import testimonial1 from "../assets/images/testimonial1.svg";
import testimonial2 from "../assets/images/testimonial2.svg";
import testimonial3 from "../assets/images/testimonial3.svg";
import Subscribe from "../components/Subscribe";
import article1 from "../assets/images/article1.svg";
import article2 from "../assets/images/article2.svg";
import Newscard from "../components/Newscard";



function Homepage() {
  const articles = [
    {
      type: "first",
      heading: "Read our articles & news",
      linkText: "See More",
      imgSrc: "",
    },
    {
      type: "regular",
      heading: "Getting the first 100 customers for your business",
      news: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
      linkText: "Read Now",
      imgSrc: article1,
    },
    {
      type: "regular",
      heading:
        "Apparently we had reached a great height in the atmosphere, ...",
      news: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
      linkText: "Read Now",
      imgSrc: article2,
    },
  ];
  return (
    <div className="py-16 md:py-24 px-6 ">
      {/* Header Section */}
      <div className="mt-12 md:mt-28 space-y-6 md:w-3/5 md:px-24">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Become The Hero Of Your Own Story
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>

        {/* Email input and subscribe button */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 md:items-center">
          <input
            type="email"
            placeholder="Enter Your Email Id"
            className="px-4 py-2 border-2 border-blue-200 w-full md:w-96 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="py-2 px-6 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Who is it for Section */}
      <div className="md:flex gap-20">
        <div className="mt-16 md:mt-28 md:w-3/5 ml-20 ">
          <div className="flex justify-between items-center gap-16 md:gap-full">
            <div className="w-6 h-1 md:w-8 md:h-2 bg-purple-500"></div>
            <div className="w-10 h-1 md:w-14 md:h-2 bg-purple-500"></div>
          </div>
          <div className="mt-10 md:mt-18">
            <h1 className=" text-2xl md:text-4xl font-bold">
              A podcast for makers and entrepreneurs
            </h1>
            <p className="mt-6">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
          </div>
          <div className="w-10 h-1 md:w-14 md:h-2 bg-green-400 mt-6 md:mt-12"></div>
        </div>

        <div className="hidden md:block ">
          <div className="bg-blue-500  w-full mt-40 flex space-x-1 ">
            <div className="w-10 h-1 md:w-14 md:h-2 bg-green-400 mt-6 md:mt-12"></div>
            <div className="w-10 h-1 md:w-14 md:h-2 bg-green-400  mt-40 "></div>
            <img src={pic1} alt="" className=" ml-16 w-60" />
            <div className="w-10 h-1 md:w-14 md:h-2 bg-green-400 mt-6 md:mt-12"></div>
            <div className="w-10 h-1 md:w-14 md:h-2 bg-green-400  mt-40 "></div>
          </div>
        </div>
      </div>

      {/*How it began */}
      <div className="flex mt-20">
        {/* Left Section for larger screens */}
        <div className="relative flex ">
          {/* Image as background */}
          <img src={pic2} alt="YouTube origins" className=" " />

          {/* Overlay div */}
          <div className="absolute right-[-20px] bottom-12 bg-blue-500 text-xl py-2 px-4 mt-20 md:mt-32 flex justify-between items-center gap-2  ">
            <IoLogoYoutube className="text-green-500 text-[28px] md:text-[32px]" />
            <h1 className="text-white font-semibold">350+ Videos</h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3">
          <div className="flex justify-end mr-20">
            <div className="w-10 h-1 md:w-14 md:h-2 bg-green-400 mt-6 md:mt-12"></div>
          </div>
          <div className="mt-6 md:mt-8 ml-20 ">
            <h1 className="text-xl md:text-2xl w-1/3 font-bold">
              My origins on <span className="text-blue-600">YouTube</span> in
              2008
            </h1>
            <p className="mt-2  w-1/2 md:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
              lacus tellus morbi viverra suspendisse ornare. Sit volutpat,
              volutpat ut netus malesuada enim penatibus non aliquet.
            </p>
          </div>
        </div>
      </div>

      {/*Recent Episodes */}

      <div className="md:mt-24 px-16 mt-8">
        <div className="md:flex justify-between items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Recent Episodes</h1>
            <p className="mt-2 md:mt-8 md:w-[60%]">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black.
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-6 md:mt-0 md:pt-28 flex justify-center md:justify-end">
            <button className="bg-blue-700 text-white md:py-3 py-2 px-6 md:px-8">
              See All Episodes
            </button>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              imageSrc={episode1}
              title="Ep 1: How to build a world-class business brand"
              description="Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum."
            />
            <Card
              imageSrc={episode2}
              title="Ep 2: Getting the first 100 customers for your business"
              description="Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum."
            />
            <Card
              imageSrc={episode3}
              title="Ep 3: Should I raise money for my startup, or not?"
              description="Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum."
            />
          </div>
        </div>
      </div>

      {/*testimonials */}

      <div className="mt-28 px-16">
        <div className="md:flex justify-between items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">
              What our listeners say
            </h1>
            <p className="mt-2 md:mt-8 md:w-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
              lacus tellus morbi viverra suspendisse ornare. Sit volutpat,
              volutpat ut netus malesuada enim penatibus non aliquet.
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-6 md:mt-0 md:pt-28 flex gap-4 justify-center md:justify-end">
            <a href="">
              <HiArrowSmLeft className="bg-blue-600 text-green-500 text-3xl rounded-full" />
            </a>
            <a href="">
              <HiOutlineArrowSmRight className="bg-blue-600 text-green-500 text-3xl rounded-full" />
            </a>
          </div>
        </div>

        <div className="mt-20">
          <div className=" grid grid-cols-3 gap-8">
            <Testimonialcard
              imgsource={testimonial1}
              name="eve madien"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat."
            />
            <Testimonialcard
              imgsource={testimonial2}
              name="Ash Benfred"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. "
            />
            <Testimonialcard
              imgsource={testimonial3}
              name="Ryan Smith"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat."
            />
          </div>
        </div>
      </div>

      {/*Subscribe */}

      <div className="py-20 px-16">
        <Subscribe />
      </div>

      {/*Articles and News */}

      <div className="py-20 px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Newscard
              key={index}
              type={article.type}
              heading={article.heading}
              news={article.news}
              linkText={article.linkText}
              imgSrc={article.imgSrc}
            />
          ))}
        </div>
      </div>

      {/*sponsorship */}
    
      {/*footer*/}

      
    </div>
  );
}

export default Homepage;
