import git from "../assets/github.png"
import HomeCard from "../components/HomeCard";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { topCero } from "../index";

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
        class="lucide lucide-printer-icon lucide-printer text-cyan-500"
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
        class="lucide lucide-zap-icon lucide-zap text-cyan-500"
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
        class="lucide lucide-package-icon lucide-package text-cyan-500"
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
        class="lucide lucide-message-circle-icon lucide-message-circle text-cyan-500"
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
  return (
    <div id="inicio">
      {header}
      <main className="fadeIn">
        <section className="flex justify-between h-[100vh] items-center">
          <div className="flex flex-col ml-60 h-[50%] justify-center mb-20 logo">
            <h1 className="text-8xl font-semibold">PANDOR3D</h1>
            <div className="w-120 border-l-4 border-[#5bacf6] pl-4 mt-4">
              <h2 className="text-2xl font-semibold">
                Impresiones por stock y a pedido
              </h2>
              <p className="mt-3 text-gray-700 text-xl">
                Contáctame para poder tener esa impresión que deseas al alcance
                de tu mano
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <Link
                to="/productos"
                className="py-2 px-6 rounded-2xl bg-[#5bacf6] text-white hover:opacity-90"
              >
                Ver Productos
              </Link>
              <Link
                to="personalizar"
                className="py-2 px-6 rounded-2xl bg-white text-[#5bacf6] border-1 border-[#5bacf6] hover:brightness-95"
              >
                Personalizar
              </Link>
            </div>
          </div>
          <div className="mr-60 mb-20 pandor">
            <img src={git} alt="" />
          </div>
        </section>
        <section className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-16 text-center">
            ¿Por qué elegir PANDOR3D?
          </h2>
          <article className="flex justify-between mx-24">
            {cardsToShow}
          </article>
        </section>
        <section className="border-2 border-blue-200 rounded-xl my-50 flex justify-center mx-auto w-[90vw] shadow-2xs">
          <div className=" flex flex-col justify-center items-center py-16">
            <h2 className="text-4xl font-semibold">
              ¿Tenés un diseño en mente?
            </h2>
            <p className="text-gray-600 text-xl mt-8">
              Convertimos tus ideas en realidad. Contactanos y hablemos sobre tu
              proyecto personalizado.
            </p>
            <Link
              to="personalizar"
              className="mt-8 bg-cyan-500 text-white rounded-2xl px-4 py-2 hover:opacity-90"
              onClick={topCero}
            >
              Personalizá tu diseño
            </Link>
          </div>
        </section>
      </main>
      <footer className="w-full ">
        <div className="border-1 border-gray-300 flex gap-20 py-12 justify-around pr-100">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">PANDOR3D</h3>
            <p className="text-gray-600">
              impresiones 3D de calidad para dar vida a tus diseños
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Enlaces</h3>
            <a
              href=""
              className="text-gray-600 hover:text-cyan-500 hover:opacity-70"
            >
              Productos
            </a>
            <a
              href=""
              className="text-gray-600 hover:text-cyan-500 hover:opacity-70"
            >
              Personalizar
            </a>
            <a
              href=""
              className="text-gray-600 hover:text-cyan-500 hover:opacity-70"
            >
              Contacto
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Contacto</h3>
            <p className="text-gray-600">Email: pandor3d@gmail.com</p>
            <p className="text-gray-600">WhatsApp: +54 numero de sergio</p>
          </div>
        </div>
        <p className="text-center my-6 text-gray-700">
          © 2025 PANDOR3D. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default HomePage