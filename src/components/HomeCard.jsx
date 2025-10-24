const HomeCard = ({icon, tittle, text }) =>
{ 
  return (
    <div className="flex flex-col w-[20vw] gap-8 border-2 border-gray-200 py-6 px-6 rounded-2xl shadow-2xs hover:border-cyan-200">
      <div className="w-10 h-10 bg-cyan-100 items-center flex justify-center rounded-xl">{icon}</div>
      <h3 className="text-xl font-semibold">{tittle}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  )

}

export default HomeCard;