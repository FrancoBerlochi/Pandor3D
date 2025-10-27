const OrderSummaryCard = () => {
  return (
    <div className=" flex flex-col">
      <div className="flex flex-col border-1 border-gray-200 rounded-2xl mx-2 shadow-xl">
        <h3 className="text-xl font-semibold mt-4 ml-4">Proceso de Pedido</h3>
        <ul className="pl-8 mt-8 mb-16">
          <li className="flex mb-6 gap-3">
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
              class="lucide lucide-circle-check-icon lucide-circle-check text-cyan-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <div className="flex flex-col">
              <p className="font-semibold">1. Enviá tu solicitud</p>
              <p className="text-gray-600">
                Completá el formulario con los detalles
              </p>
            </div>
          </li>
          <li className="flex mb-6 gap-3">
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
              class="lucide lucide-circle-check-icon lucide-circle-check text-cyan-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <div className="flex flex-col">
              <p className="font-semibold">2. Recibí el presupuesto</p>
              <p className="text-gray-600">Te contactamos en 24-48hs</p>
            </div>
          </li>
          <li className="flex mb-6 gap-3">
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
              class="lucide lucide-circle-check-icon lucide-circle-check text-cyan-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <div className="flex flex-col">
              <p className="font-semibold">3. Confirmá el pedido</p>
              <p className="text-gray-600">Aprobá el diseño y precio</p>
            </div>
          </li>
          <li className="flex gap-3">
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
              class="lucide lucide-circle-check-icon lucide-circle-check text-cyan-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <div className="flex flex-col">
              <p className="font-semibold">4. Recibí tu producto</p>
              <p className="text-gray-600">Entrega en 5-10 días hábiles</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center border-1 border-cyan-500 rounded-2xl mt-8 mx-2 bg-blue-100">
        <h3 className="mt-6 text-xl font-semibold">¿Necesitás ayuda?</h3>
        <p className="text-gray-600 text-md text-center mt-6">
          Estamos disponibles para responder a cualquier consulta que surga.
        </p>
        <a
          href={`https://wa.me/telnumber?text=Prueba%20prueba`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center my-6 border-1 border-cyan-500 rounded-md w-60 text-cyan-500 py-2 hover:bg-cyan-500 hover:text-white transition-colors duration-300"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default OrderSummaryCard