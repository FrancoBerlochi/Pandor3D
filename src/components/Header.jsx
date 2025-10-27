import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { topCero } from "../index";

const Header = () => {
  return (
    <header className="flex justify-between py-3 border-b-1 border-gray-300 items-center fadeIn fixed w-full bg-white ">
      <div className="gap-2 flex ml-8 items-center">
        <a href="#inicio" className="w-[3vw] logo">
          <img src={logo} alt="Logo" />
        </a>
        <a
          href="#inicio"
          className="text-2xl font-semibold pandor hover:opacity-70"
        >
          Pandor3D
        </a>
      </div>
      <nav className="flex gap-10">
        <Link to="/" className="anchor relative" onClick={topCero}>
          Inicio
        </Link>
        <Link to="/productos" className="anchor relative" onClick={topCero}>
          Productos
        </Link>
        <Link to="/personalizar" className="anchor relative" onClick={topCero}>
          Personalizar
        </Link>
        <Link to="/pedidos" onClick={topCero} className="anchor relative">
          Pedidos
        </Link>
      </nav>
      <Link
        to="/contacto"
        className="mr-8 bg-cyan-500 text-white py-2 px-4 rounded-xl hover:opacity-90"
      >
        Contacto
      </Link>
    </header>
  );
};

export default Header;
