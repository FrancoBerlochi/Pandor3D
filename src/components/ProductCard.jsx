import { useState, useEffect } from "react";

const ProductCard = ({ img, tittle, price }) => {
  const [amount, setAmount] = useState(1)
  const [order, setOrder] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  const handleChange = (e) => {
    setAmount(parseInt(e.target.value))
  }
  
  useEffect(() => {
      localStorage.setItem("products", JSON.stringify(order));
  }, [order]);
  
  const orderStorage = () => {
    const local = JSON.parse(localStorage.getItem("products")) || [];
    setOrder([...local]);

    const orderToStorage = {
      img: img,
      title: tittle,
      price: price,
      amount: amount
    }

    setOrder((prev) => {
      const existing = prev.find((p) => p.title === tittle);
      if (existing) {
        return prev.map((p) =>
          p.title === tittle ? { ...p, amount: p.amount + amount } : p
        );
      }

      return [...prev, orderToStorage];
    });
  }

  return (
    <div className="group w-[30vw] h-[75vh] flex flex-col fadeIn border-1 border-red-200 overflow-hidden">
      <img
        src={img}
        alt=""
        className="w-full h-[55vh] object-cover  group-hover:scale-105 overflow-hidden"
      />
      <h2 className="text-2xl mt-8">{tittle}</h2>
      <div className="flex justify-between mx-2">
        <p className="text-cyan-500 mt-4 text-2xl">$ {price}</p>
        <input
          type="number"
          name="cantidad"
          min="1"
          value={amount}
          onChange={handleChange}
          className="w-20 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <button className="col-span-2 bg-cyan-500 text-white rounded-2xl py-2 cursor-pointer hover:bg-white hover:text-cyan-500 hover:border-1 hover:border-cyan-500 transition-colors duration-300" onClick={orderStorage}>
          Agregar Pedido
        </button>
        <button className="border-1 border-cyan-500 text-cyan-500 rounded-2xl py-2 cursor-pointer hover:bg-cyan-200 hover:text-cyan-700 transition-colors duration-300">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}

export default ProductCard;