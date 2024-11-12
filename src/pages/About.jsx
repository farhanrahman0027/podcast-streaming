import micicon from "../assets/images/micicon.svg";
import aboutitem1 from "../assets/images/aboutitem1.svg";
import aboutitem2 from "../assets/images/aboutitem2.svg";
import aboutitem3 from "../assets/images/aboutitem3.svg";
import teambg from "../assets/images/teambg.svg";
import tmember1 from "../assets/images/tmember1.svg";
import tmember2 from "../assets/images/tmember2.svg";
import tmember3 from "../assets/images/tmember3.svg";
import tmember4 from "../assets/images/tmember4.svg";
import Teamcard from "../components/Teamcard";
import sponsorlogo1 from "../assets/images/sponsorlogo1.png";
import episode1 from "../assets/images/episode1.svg";
import episode2 from "../assets/images/episode2.svg";
import episode3 from "../assets/images/episode3.svg";
import Card from "../components/Episodelist";



const teamData = [
  { imgsource: tmember1, name: "Jerome Bell", position: "Founder & CEO" },
  { imgsource: tmember2, name: "Robert Mill", position: "Cofounder" },
  { imgsource: tmember3, name: "Rehab Walls", position: "Producer" },
  { imgsource: tmember4, name: "Steve Winston", position: "Editor" },
];

const About = () => {
  return (
    <div className="px-16 py-20">
      {/*Header section */}
      <div className="grid grid-cols-2 py-20">
        <div className=" flex flex-col gap-8 w-2/3 ml-20 mt-20">
          <h1 className="text-4xl font-bold text-gray-900">
            About podcstr Podcast
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button className="px-2 w-1/2 py-2 bg-blue-700 text-white">
            subscribe Now!
          </button>
        </div>
        <div>
          <img src={micicon} alt="" />
        </div>
      </div>

      {/*items */}
      <div className="py-24 grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-4 justify-center">
          <img src={aboutitem1} alt="" className="w-24 " />
          <h1 className="font-bold">500+ Podcast</h1>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <img src={aboutitem2} alt="" className="w-20 " />
          <h1 className="font-bold">24M Veiws</h1>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center -mt-6">
          <img src={aboutitem3} alt="" className="w-20 " />
          <h1 className="font-bold">600K Subs</h1>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.{" "}
          </p>
        </div>
      </div>

      {/* About Our Team */}

      <div className="py-20 flex gap-12">
        <div className="bg-green-500 w-32 h-1 mt-64"></div>
        <div className="flex flex-col gap-12">
          <div className=" text-3xl w-1/3 font-bold ">
            <h1>A few words about our team</h1>
          </div>
          <div>
            <img src={teambg} alt="" />
          </div>
          <div className=" flex justify-between items-center gap-8">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              eget condimentum enim libero ultricies amet odio fringilla. Ut
              nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
              eget in ut integer viverra sed. Penatibus tortor consequat,
              habitasse non nisl.
            </p>

            <p className="">
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
              Mus cras lacus tellus morbi viverra suspendisse ornare. Sit
              volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
            </p>
          </div>
        </div>
        <div className="bg-purple-500 w-20 h-1 mt-40"></div>
      </div>

      {/*Meet our Team */}
      <div className=" py-20 px-16">
        <h1 className="text-3xl font-bold "> Meet Our Team</h1>

        <div className="grid grid-cols-4 gap-6">
          {teamData.map((teamdata, index) => (
            <Teamcard
              key={index}
              imgsource={teamdata.imgsource}
              name={teamdata.name}
              position={teamdata.position}
            />
          ))}
        </div>
      </div>

      {/*Our Sponsors */}

      <div className="flex flex-col gap-12">
        <div className="text-4xl font-bold ">
          <h1>Our Sponsors</h1>
        </div>

        <div className="grid grid-cols-3 ">
          <div className="bg-violet-100 flex justify-center h-2/3 w-[80%]">
            <img src={sponsorlogo1} alt="" />
          </div>
          <div className="bg-violet-100 flex justify-center h-2/3 w-[80%]">
            <img src={sponsorlogo1} alt="" />
          </div>
          <div className="bg-violet-100 flex justify-center h-2/3 w-[80%]">
            <img src={sponsorlogo1} alt="" />
          </div>
          <div className="bg-violet-100 flex justify-center h-2/3 w-[80%]">
            <img src={sponsorlogo1} alt="" />
          </div>
          <div className="bg-violet-100 flex justify-center h-2/3 w-[80%]">
            <img src={sponsorlogo1} alt="" />
          </div>
          <div className="bg-blue-700 text-white h-2/3 w-[80%] px-8 py-6 flex flex-col gap-8">
            <h1 className="text-xl w-1/2">Become a Sponsor</h1>
            <a href="" className="text-slate-50"> Contact now</a>
          </div>


        </div>
      </div>

       {/*recent episodes */}

       <div className="md:mt-24  mt-8">
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
    </div>
  );
};

export default About;
