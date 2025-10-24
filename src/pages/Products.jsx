import Header from "../components/Header";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { topCero} from "../index";

const Products = () => {
  const products = [
    {
      id: 1,
      img: "src/assets/github.png",
      tittle: "T-Rex esqueleto",
      price: 10,
    },
    {
      id: 2,
      img: "url",
      tittle: "b",
      price: 10,
    },
    {
      id: 3,
      img: "url",
      tittle: "c",
      price: 10,
    },
    {
      id: 4,
      img: "url",
      tittle: "d",
      price: 10,
    },
    {
      id: 5,
      img: "url",
      tittle: "e",
      price: 10,
    },
    {
      id: 6,
      img: "url",
      tittle: "f",
      price: 10,
    },
    {
      id: 7,
      img: "url",
      tittle: "g",
      price: 10,
    },
    {
      id: 8,
      img: "url",
      tittle: "h",
      price: 10,
    },
    {
      id: 9,
      img: "url",
      tittle: "i",
      price: 10,
    },
    {
      id: 10,
      img: "",
      tittle: "j",
      price:10,
    }
  ];

  const handleCharge = () => { 
    setCount((prev) => prev + 3);
    setTimeout(() => {
      window.scrollBy({
        top: 300, 
        behavior: "smooth", 
      });
    }, 100);
  }

  const [count, setCount] = useState(6);
  const header = <Header></Header>;
  return (
    <div id="inicio">
      {header}
      <main className="">
        <div className="flex flex-col pt-32 ml-12">
          <h1 className="text-6xl mb-4">Nuestros Productos</h1>
          <h2 className="text-xl text-gray-600 mb-16">
            Explorá nuestra colección de impresiones 3D
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-12">
          {products.slice(0, count).map((prod) => (
            <ProductCard
              key={prod.id}
              img={prod.img}
              tittle={prod.tittle}
              price={prod.price}
            />
          ))}
        </div>
        {count < products.length && (
          <div className="flex justify-center mt-12">
            <button
              className="px-4 py-2 rounded-2xl bg-orange-400 text-white hover:opacity-80 cursor-pointer"
              onClick={handleCharge}
            >
              Cargar más
            </button>
            
          </div>
        )}
        <section className="border-2 border-blue-200 rounded-xl my-40 flex justify-center mx-auto w-[90vw] shadow-2xs">
          <div className=" flex flex-col justify-center items-center py-16">
            <h2 className="text-4xl font-semibold">
              ¿No encontrás lo que buscás?
            </h2>
            <p className="text-gray-600 text-xl mt-8 w-220 text-center">
              Podemos imprimir cualquier diseño que tengas en mente. Contactanos
              para un presupuesto personalizado
            </p>
            <Link
              to="../personalizar"
              className="mt-8 bg-cyan-500 text-white rounded-2xl px-4 py-2 hover:opacity-90"
              onClick={topCero}
            >
              Solicitá tu diseño
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
