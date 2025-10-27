import Header from "../components/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import OrderSummaryCard from "../components/OrderSummaryCard";

const Custom = () => {
  const header = <Header></Header>;
  const orderSummaryCard = <OrderSummaryCard></OrderSummaryCard>;

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    cantidad: 1,
    descripcion: "",
    archivos: [],
  });

  const handleChange = (e) => {
    console.log(formData.archivos == "");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, archivos: Array.from(e.target.files) });
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
                  <div
                    id="dropDiv"
                    className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-sky-400 transition"
                  >
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".stl,.obj,.png,.jpg"
                      className="text-transparent absolute z-10 inset-0 cursor-pointer"
                      id="fileUpload"
                    />
                    {formData.archivos == "" ? (
                      <div className="cursor-pointer flex flex-col items-center">
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
                          Arrastrá tus archivos aquí o hacé click para
                          seleccionar
                        </p>
                        <p className="text-sm text-gray-400">
                          STL, OBJ, PNG, JPG (máx. 10MB)
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-4">
                        {formData.archivos.map((img, index) => (
                          <img
                            key={index}
                            src={URL.createObjectURL(img)}
                            alt={`img-${index}`}
                            className="w-30 h-30"
                          />
                        ))}
                      </div>
                    )}
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
            {orderSummaryCard}
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
