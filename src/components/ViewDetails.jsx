import { useContext, useEffect } from "react";
import { ViewDetailsContext } from "../context/ViewDetailsContext";

const ViewDetails = () => {
  const { details, setDetails } = useContext(ViewDetailsContext)
  const {data} = useContext(ViewDetailsContext)
  const handleOpen = ()=> setDetails(!details)

  useEffect(() => {
    document.body.classList.toggle("no-scroll", details);
    return () => document.body.classList.remove("no-scroll");
  }, [details]);
  
  return (
    <div
      className="fixed inset-0 bg-[#3335] flex justify-center items-center z-20"
      onClick={handleOpen}
    >
      <div
        className="flex border-2 bg-[#def] dark:bg-[#555] w-[60vw] h-[60vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={data.img}
          className="w-[30vw] bg-white"
          alt="producto"
        />
        <div className="flex flex-col mt-20 ml-20 mr-20 dark:text-white">
          <h3 className="text-4xl mb-8 font-semibold">{data.title}</h3>
          <p className="text-2xl mb-10 text-cyan-500 dark:text-[hsl(41,98%,51%)]">{data.size} cm</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            voluptate quasi, nemo cumque eos, officiis error non optio libero
            doloribus inventore cupiditate. Distinctio quasi odio id eius
            voluptate doloribus provident?
          </p>
          <button
            className="p-4 hover:bg-red-500 text-white text-xl bg-red-400 w-[10vw] rounded-3xl self-end mt-auto mb-20 cursor-pointer"
            onClick={handleOpen}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;