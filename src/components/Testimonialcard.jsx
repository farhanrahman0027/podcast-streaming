import Ratingstar from "./ratingstar"



const Testimonialcard = ({imgsource,name,description}) => {

  return (
    <div className="relative   ">
      <div className="  grid grid-cols-2">
      <img src={imgsource} alt="" className='rounded-full ' />
      <div className=" text-[20px]">
      <h1 className='text-black font-semibold'>{name}</h1>
        <Ratingstar rating={5} />
      </div>
      </div>
      <div className="">
        <p className='text-black-600 py-12'>{description}</p>
      <div className="bg-blue-600 absolute bottom-0  w-full h-2 "></div>
      </div>
    </div>
  )
}

export default Testimonialcard
