import { FaStar } from "react-icons/fa6";

const Ratingstar = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} className="text-yellow-300" size={24} />
      ))}
    </div>
  );
};

export default Ratingstar;
