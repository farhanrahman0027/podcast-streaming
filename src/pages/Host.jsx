import hostpic1 from "../assets/images/hostpic1.svg";
import applepodcasticon from "../assets/images/applepodcasticon.png";
import googlepodcasticon from "../assets/images/googlepodcasticon.png";
import soundcloud from "../assets/images/soundcloud.png";
import spotify from "../assets/images/spotify.png";
import dreamimg from "../assets/images/dreamimg.svg";
import achieveicon1 from "../assets/images/achieveicon1.svg";
import achieveicon2 from "../assets/images/achieveicon2.svg";
import achieveicon3 from "../assets/images/achieveicon3.svg";
import achieveicon4 from "../assets/images/achieveicon4.svg";
import ctaimg from "../assets/images/ctaimg.svg";
import ctaicon from "../assets/images/ctaicon.svg"
import Card from "../components/Episodelist";
import episode1 from "../assets/images/episode1.svg";
import episode2 from "../assets/images/episode2.svg";
import episode3 from "../assets/images/episode3.svg";

const Host = () => {
  return (
    <div className="py-20">
      {/*header section */}

      <div className="py-18 px-24 flex justify-center">
        <div className="flex justify-center items-center">
          <div className="bg-blue-600 w-4 h-1 -mt-80 "></div>
          <div className="bg-green-600 w-4 h-1 -mb-60 "></div>
          <img src={hostpic1} alt="" className=" h-[90vh] mt-20  " />
        </div>
        <div className="flex flex-col gap-6 mt-20 pt-14 w-1/4  ">
          <p className="text-blue-600">About The Host</p>
          <h1 className="text-xl font-semibold">
            Hey there, I’m Andrew Jonson and welcome to my Podcast
          </h1>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <button className="bg-blue-600 px-4 py-2 w-36 text-white">
            Know more
          </button>
        </div>
        <div className="bg-green-600 w-8 absolute right-20 bottom-0 h-1 "></div>
      </div>

      {/*Brands */}
      <div className="flex  justify-between gap-5 px-16 mt-20">
        <h1 className="text-xl font-semibold">Podcast Available On</h1>
        <a href="" className="flex ml-4 gap-2">
          <img src={applepodcasticon} alt="" className="w-8" />
          <p className="font-semibold">Apple Podcast</p>
        </a>
        <a href="" className="flex gap-2">
          <img src={googlepodcasticon} alt="" className="w-8" />
          <p className="font-semibold">Google Podcast</p>
        </a>
        <a href="" className="flex gap-2">
          <img src={soundcloud} alt="" className="w-8" />
          <p className="font-semibold">SOUNDCLOUD</p>
        </a>
        <a href="" className="flex gap-2">
          <img src={spotify} alt="" className="w-8" />
          <p className="font-semibold">Spotify</p>
        </a>
      </div>

      {/*Dream section */}

      <div className="px-16 mt-20 grid grid-cols-2 justify-between ">
        <div className="flex flex-col gap-4 mt-20 py-24">
          <h1 className=" text-2xl font-bold w-2/3 ">
            A small story about a big dream —{" "}
          </h1>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon
          </p>
          <p className="font-semibold">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and{" "}
          </p>
          <div className="bg-purple-600 w-10 h-1 ml-[100%] "></div>
        </div>
        <div
          className=" h-[80vh] flex justify-start items-end ml-14 w-full"
          style={{
            backgroundImage: `url(${dreamimg})`,
            backgroundSize: "cover",
          }}
        >
          {/* <img src={dreamimg} alt="" className="" /> */}

          <div className="bg-blue-600 flex gap-2 justify-center text-center items-center w-44 px-4 py-2 -ml-12  ">
            <p className="bg-green-500 w-1 h-4"></p>
            <p className="bg-green-500 w-1 h-6"></p>
            <p className="bg-white w-1 h-6"></p>
            <p className="bg-green-500 w-1 h-5"></p>
            <p className="bg-green-500 w-1 h-10"></p>
            <p className="bg-white w-1 h-6"></p>
            <p className="bg-green-500 w-1 h-4"></p>
            <p className="bg-green-500 w-1 h-4"></p>
            <p className="bg-green-500 w-1 h-6"></p>
            <p className="bg-white w-1 h-4"></p>
            <p className="bg-green-500 w-1 h-4"></p>
            <p className="bg-green-500 w-1 h-4"></p>
            <p className="bg-green-500 w-1 h-2"></p>
          </div>
        </div>
      </div>

      {/*Journey */}

      <div className="py-20 px-16 flex justify-between">
        <div className="bg-green-500 w-10 h-1"></div>
        {/*left content */}

        <div className="flex flex-col gap-5 mt-28  w-1/2">
          <h1 className="text-2xl font-bold w-3/5">
            My origins On Youtube in 2008
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget
            condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi
            augue porta aliquet commodo. Fermentum auctor lacus eget in ut
            integer viverra sed. Penatibus tortor consequat, habitasse non nisl.
          </p>
          <p className="">
            <b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
              lacus tellus morbi viverra suspendisse ornare.
            </b>{" "}
            Sit volutpat, volutpat ut netus malesuada enim penatibus non
            aliquet.
          </p>
        </div>

        {/*right content */}
        <div className="flex flex-col gap-5 w-1/2 mt-24 p-4 ml-12">
          <h1 className="text-2xl font-bold">
            From tech journalist, to Vlogger and YouTuber
          </h1>
          <p>
            <b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
              lacus tellus morbi viverra suspendisse ornare.
            </b>
            Sit volutpat, volutpat ut netus malesuada enim penatibus non
            aliquet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget
            condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi
            augue porta aliquet commodo. Fermentum auctor lacus eget in ut
            integer viverra sed. Penatibus tortor consequat, habitasse non nisl.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget
            condimentum enim libero ultricies ame\
          </p>
        </div>
        <div className="bg-purple-500 w-10 h-1"></div>
      </div>

      {/*Achievements */}

      <div className="grid grid-cols-4 gap-4 px-16 mt-20">
        <div className="bg-blue-600 flex flex-col justify-center items-center py-10 px-2 mt-20">
          <img src={achieveicon1} alt="" className=" w-28" />
          <p className="text-4xl text-white mt-14 font-semibold">500+</p>
          <p className="text-3xl text-white mt-6 font-semibold">Podcasts</p>
        </div>

        <div className="bg-blue-600 flex flex-col justify-center items-center py-10 px-2 mb-20">
          <img src={achieveicon2} alt="" className=" w-28" />
          <p className="text-4xl text-white mt-14 font-semibold">24M</p>
          <p className="text-3xl text-white mt-6 font-semibold">Veiw</p>
        </div>

        <div className="bg-blue-600 flex flex-col justify-center items-center py-10 px-2 mt-20">
          <img src={achieveicon3} alt="" className=" w-28" />
          <p className="text-4xl text-white mt-14 font-semibold">600K</p>
          <p className="text-3xl text-white mt-6 font-semibold">Subscribers</p>
        </div>

        <div className="bg-blue-600 flex flex-col justify-center items-center py-10 px-2 mb-20">
          <img src={achieveicon4} alt="" className=" w-28" />
          <p className="text-4xl text-white mt-14 font-semibold">24M</p>
          <p className="text-3xl text-white mt-6 font-semibold">Veiw</p>
        </div>
      </div>

      {/*Call to action */}

      <div
        style={{
          backgroundImage: `url(${ctaimg})`,
          backgroundSize: "cover",
        }}
        className="mt-20  justify-between items-center flex  h-[80vh]  w-full "
      >
        <div className="flex flex-col gap-6   ml-28  w-2/5">
          <h1 className="text-4xl text-white font-bold ">
            Become The Hero Of Your Own Story
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
            lacus tellus morbi viverra suspendisse ornare. Sit volutpat,
            volutpat ut netus malesuada enim penatibus non aliquet.
          </p>
          <button className="bg-transparent px-4 py-2 text-white w-32 border-2">Contact Us</button>
        </div>
        <div className=" realtive mt-[40%] ">
          <img src={ctaicon} alt="" className="bg-blue-700 px-5 py-4 w-[45vh]"/>
        </div>
      </div>


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
    </div>
  );
};

export default Host;
