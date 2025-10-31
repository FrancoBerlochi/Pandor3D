import git from "../assets/github.png"
import HomeCard from "../components/HomeCard";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { topCero } from "../index";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import linke from "../assets/linkedin.png"

const homeCards = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-printer-icon lucide-printer text-cyan-500 dark:text-orange-400"
      >
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
        <rect x="6" y="14" width="12" height="8" rx="1" />
      </svg>
    ),
    tittle: "Alta Calidad",
    text: "Impresiones 3D de alta fidelidad con los mejores materiales de impresión",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-zap-icon lucide-zap text-cyan-500 dark:text-orange-400"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
    tittle: "Entrega Rápida",
    text: "Tiempos de producción optimizados para que recibas tu pedido en tiempo y forma",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-package-icon lucide-package text-cyan-500 dark:text-orange-400"
      >
        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
        <path d="M12 22V12" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <path d="m7.5 4.27 9 5.15" />
      </svg>
    ),
    tittle: "Stock Disponible",
    text: "Productos predefinidos o personalizados según tus necesidades",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-message-circle-icon lucide-message-circle text-cyan-500 dark:text-orange-400"
      >
        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      </svg>
    ),
    tittle: "Asesoramiento",
    text: "Te ayudamos a elegir el mejor producto para tu proyecto",
  },
];

const HomePage = () => {
  const cardsToShow = homeCards.map((homeCard) => (
    <HomeCard
      key={homeCard.id}
      icon={homeCard.icon}
      tittle={homeCard.tittle}
      text={homeCard.text} />
  ));
  const header = <Header></Header>
  const { isDark } = useContext(ThemeContext);
  return (
    <div id="inicio" className="">
        {header}
      <main className="dark:bg-[#333] pb-20 dark:fadeIn dark:transition-all dark:duration-100">
        <section className="flex justify-between h-[100vh] items-center">
          <div className="flex flex-col ml-60 h-[50%] justify-center mb-20 logo">
            <h1 className="text-8xl font-semibold dark:text-white">PANDOR3D</h1>
            <div className="w-120 border-l-4 border-[#5bacf6] pl-4 mt-4 dark:border-[hsl(41,98%,51%)]">
              <h2 className="text-2xl font-semibold dark:text-white">
                Impresiones por stock y a pedido
              </h2>
              <p className="mt-3 text-gray-700 text-xl dark:text-gray-300">
                Contáctame para poder tener esa impresión que deseas al alcance
                de tu mano
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <Link
                onClick={topCero}
                to="/productos"
                className="py-2 px-6 rounded-2xl bg-[#5bacf6] text-white hover:opacity-90 dark:bg-[hsl(41,98%,51%)]"
              >
                Ver Productos
              </Link>
              <Link
                to="personalizar"
                className="py-2 px-6 rounded-2xl bg-white text-[#5bacf6] border-1 border-[#5bacf6] hover:brightness-95 dark:bg-[#3a3a3a] dark:border-[hsl(41,98%,51%)] dark:text-[hsl(41,98%,51%)]"
              >
                Personalizar
              </Link>
            </div>
          </div>
          <div className="mr-60 mb-20 pandor dark:bg-orange-400 dark:rounded-[50%]">
            <img src={isDark ? linke : git} alt="" />
          </div>
        </section>
        <section className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-16 text-center dark:text-white">
            ¿Por qué elegir PANDOR3D?
          </h2>
          <article className="flex justify-between mx-24 ">
            {cardsToShow}
          </article>
        </section>
        <section className="border-2 border-blue-200 dark:border-[hsl(41,98%,70%)] rounded-xl mt-30 flex justify-center mx-auto w-[90vw] shadow-2xs">
          <div className=" flex flex-col justify-center items-center py-16">
            <h2 className="text-4xl font-semibold dark:text-white">
              ¿Tenés un diseño en mente?
            </h2>
            <p className="text-gray-600 text-xl mt-8 dark:text-gray-300">
              Convertimos tus ideas en realidad. Contactanos y hablemos sobre tu
              proyecto personalizado.
            </p>
            <Link
              to="personalizar"
              className="mt-8 bg-cyan-500 dark:bg-[hsl(41,98%,51%)] text-white rounded-2xl px-4 py-2 hover:opacity-90"
              onClick={topCero}
            >
              Personalizá tu diseño
            </Link>
          </div>
        </section>
      </main>
      <footer className="w-full dark:bg-[#333]">
        <div className="border-1 border-gray-300 flex gap-20 py-12 justify-around pr-100 dark:border-gray-300">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold dark:text-white">PANDOR3D</h3>
            <p className="text-gray-600 dark:text-gray-300">
              impresiones 3D de calidad para dar vida a tus diseños
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold dark:text-white">Enlaces</h3>
            <Link
              onClick={topCero}
              to="/productos"
              className="text-gray-600 hover:text-cyan-500 hover:opacity-70 dark:text-gray-300 dark:hover:text-[hsl(41,98%,70%)]"
            >
              Productos
            </Link>
            <Link
              onClick={topCero}
              to="/personalizar"
              className="text-gray-600 hover:text-cyan-500 hover:opacity-70 dark:text-gray-300 dark:hover:text-[hsl(41,98%,70%)]"
            >
              Personalizar
            </Link>
            <Link
              onClick={topCero}
              to="/contacto"
              className="text-gray-600 hover:text-cyan-500 hover:opacity-70 dark:text-gray-300 dark:hover:text-[hsl(41,98%,70%)]"
            >
              Contacto
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold dark:text-white">Contacto</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Email: pandor3d@gmail.com
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              WhatsApp: +54 numero de sergio
            </p>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-700 dark:text-gray-300">
          © 2025 PANDOR3D. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default HomePage