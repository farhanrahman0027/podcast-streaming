import subsicon from "../assets/images/subsicon.svg";
import wave from "../assets/images/wave.png";
const Subscribe = () => {
  return (
    <div className="relative bg-blue-600 flex justify-between items-center" >
      {/* Left Icon */}
      <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
        <img src={subsicon} alt="" className="w-20" />
      </div>

      {/* Main Content */}
      <div className="mt-10 py-12 flex-grow">
        <h1 className="text-white text-2xl text-center">
          Receive new episodes in your inbox.
        </h1>
        <div className="py-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="bg-white px-4 py-2 text-gray-400 rounded-l-md"
          />
          <button className="bg-green-400 px-4 py-2 text-white rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Icon */}
      <div className="absolute right-20 bottom-10 ">
        <img src={subsicon} alt="" className="w-10" />
      </div>
      
    </div>
    
    
  );
};

export default Subscribe;
