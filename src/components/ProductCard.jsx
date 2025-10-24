const ProductCard = ({img, tittle, price}) => {
  return (
    <div className="group w-[30vw] h-[75vh] flex flex-col fadeIn border-1 border-red-200 overflow-hidden">
      <img
        src={img}
        alt=""
        className="w-full h-[55vh] object-cover  group-hover:scale-105 overflow-hidden"
      />
      <h2 className="text-2xl mt-8">{tittle}</h2>
      <p className="text-cyan-500 mt-4 text-2xl">$ {price}</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <button className="col-span-2 bg-cyan-500 text-white rounded-2xl py-2 cursor-pointer hover:bg-white hover:text-cyan-500 hover:border-1 hover:border-cyan-500 transition-colors duration-300">
          Agregar al carrito
        </button>
        <button className="border-1 border-cyan-500 text-cyan-500 rounded-2xl py-2 cursor-pointer hover:bg-cyan-200 hover:text-cyan-700 transition-colors duration-300">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}

export default ProductCard;