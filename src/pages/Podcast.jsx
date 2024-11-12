import youtubeicon from "../assets/images/youtubeicon.svg";
import podbgimg from "../assets/images/podbgimg.svg";
import Card from "../components/Episodelist";
import episode1 from "../assets/images/episode1.svg";
import episode2 from "../assets/images/episode2.svg";
import episode3 from "../assets/images/episode3.svg";
import ctaimg from "../assets/images/ctaimg.svg";
import ctaicon from "../assets/images/ctaicon.svg"

const Podcast = () => {
  return (
    <div className="">
      {/*Header section */}
      <div
        style={{
          backgroundImage: `url(${podbgimg})`,
          backgroundSize: "cover",
        }}
        className="h-[100vh] flex  items-center "
      >
        <div className="bg-blue-700 relative opacity-[80%] flex flex-col gap-4 py-16 px-12 w-1/2 ml-20 mt-20">
          <div className="bg-green-600 w-[14px] h-[432px] absolute  top-0 left-0 "></div>
          <p className="text-white font-semibold">Featured</p>
          <h1 className="text-xl text-white font-bold w-2/3">
            A UX Case Study on Creating a Studious Environment{" "}
          </h1>
          <p className="text-white">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon
          </p>
          <a href="" className="flex gap-2 items-center mt-12">
            <img src={youtubeicon} alt="" />
            <p className="text-white">Listen Now</p>
          </a>
        </div>
      </div>

      {/*recent episodes */}

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

      {/*All Episodes */}

      <div className="md:mt-24 px-16 mt-8">
        <div className="md:flex justify-between items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">All Podcasts</h1>
            <div className="flex gap-4 mt-16">
              <button className="px-8 p-2 rounded-full bg-white border-2 text-gray-500 hover:bg-blue-600 hover:text-white  ">
                All Podcasts
              </button>
              <button className="px-8 p-2 rounded-full bg-white border-2 text-gray-500 hover:bg-blue-600 hover:text-white  ">
                StartUp
              </button>
              <button className="px-8 p-2 rounded-full bg-white border-2 text-gray-500 hover:bg-blue-600 hover:text-white  ">
                Marketing
              </button>
              <button className="px-8 p-2 rounded-full bg-white border-2 text-gray-500 hover:bg-blue-600 hover:text-white  ">
                Business
              </button>
            </div>
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
    </div>
  );
};

export default Podcast;
