import Header from "../components/Header";
import { useState } from "react";
import { Link } from "react-router-dom";

const Custom = () => {
  const header = <Header></Header>;

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    cantidad: 1,
    descripcion: "",
    archivos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, archivos: e.target.files });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.nombre == "") {
      console.error("agregue un nombre");
      return;
    } else if (!validateEmail(formData.email)) {
      console.error("email no valido");
      return;
    } else if (formData.telefono == "" || formData.telefono.length > 11) {
      console.error("teléfono inválido");
      return;
    } else if (formData.cantidad <= 0) {
      console.error("ponga una cantidad");
      return;
    } else if (formData.descripcion == "") {
      console.error("agregue una descripción");
      return;
    }

    alert("Solicitud enviada ✅");
  };

  return (
    <div id="inicio">
      {header}
      <main className="flex flex-col pt-35 mx-auto h-screen w-[60vw]">
        <div className="flex flex-col">
          <h1 className="text-6xl font-semibold">Pesonalizar Pedido</h1>
          <h2 className="text-xl text-gray-600">
            Contanos sobre tu proyecto y te ayudaremos a hacerlo realidad.
          </h2>
          <div className="grid grid-cols-3 w-[60vw] mt-15">
            <div className="col-span-2 border-1 border-gray-200 rounded-2xl mx-2 p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-semibold mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Juan Pérez"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="juan@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="+54 9 11 12345678"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Cantidad</label>
                  <input
                    type="number"
                    name="cantidad"
                    min="1"
                    value={formData.cantidad}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Descripción del Proyecto
                  </label>
                  <textarea
                    name="descripcion"
                    placeholder="Describí tu proyecto en detalle: dimensiones, color, material preferido, uso previsto, etc."
                    value={formData.descripcion}
                    onChange={handleChange}
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Subir Archivos (Opcional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-sky-400 transition">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".stl,.obj,.png,.jpg"
                      className="hidden"
                      id="fileUpload"
                    />
                    <label
                      htmlFor="fileUpload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 mb-2 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                      <p className="text-gray-500">
                        Arrastrá tus archivos aquí o hacé click para seleccionar
                      </p>
                      <p className="text-sm text-gray-400">
                        STL, OBJ, PNG, JPG (máx. 10MB)
                      </p>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-sky-500 text-white font-semibold py-2 rounded-lg hover:bg-sky-600 transition"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
            <div className=" flex flex-col">
              <div className="flex flex-col border-1 border-gray-200 rounded-2xl mx-2 shadow-xl">
                <h3 className="text-xl font-semibold mt-4 ml-4">
                  Proceso de Pedido
                </h3>
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
                      <p className="text-gray-600">
                        Entrega en 5-10 días hábiles
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center border-1 border-cyan-500 rounded-2xl mt-8 mx-2 bg-blue-100">
                <h3 className="mt-6 text-xl font-semibold">
                  ¿Necesitás ayuda?
                </h3>
                <p className="text-gray-600 text-md text-center mt-6">
                  Estamos disponibles para responder a cualquier consulta que
                  surga.
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
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </main>
    </div>
  );
};

export default Custom;
