


const Teamcard = ({imgsource,name,position}) => {
  return (
    <div className="flex flex-col gap-4 p-2 rounded-md shadow-md">

        <img src={imgsource} alt="" className="w-full object-cover " />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg">{position}</p>

      </div>
  )
}

export default Teamcard
