import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import darkLogo from "../assets/logoDark.png"
import { topCero } from "../index";
import ThemeBtn from "./ThemeBtn";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Header = () => {
  const themeBtn = <ThemeBtn></ThemeBtn>
  const { isDark } = useContext(ThemeContext);

  return (
    <header className="dark:bg-[#3a3a3a] dark:text-white dark:fadeIn dark:transition-all dark:duration-100 flex justify-between py-3 dark:border-gray-800 border-b-1 border-gray-300 items-center fadeIn fixed w-full bg-white z-20">
      <div className="gap-2 flex ml-8 items-center">
        <a href="#inicio" className="w-[3vw] logo">
          <img src={isDark ? darkLogo : logo} alt="Logo" />
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
        {themeBtn}
      </nav>
      <Link
        to="/contacto"
        className="dark:bg-[hsl(41,95%,50%)] mr-8 bg-cyan-500 text-white py-2 px-4 rounded-xl hover:opacity-90"
      >
        Contacto
      </Link>
    </header>
  );
};

export default Header;
