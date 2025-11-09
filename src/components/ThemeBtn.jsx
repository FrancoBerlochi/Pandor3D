import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Sun, Moon } from "lucide-react";

const ThemeBtn = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleTheme = () => setIsDark(!isDark)
  
  return (
    <div
      className="flex justify-center items-center cursor-pointer"
      onClick={handleTheme}
    >
      {isDark ? (
        <Sun size={40} className="text-cyan-500 hover:opacity-55 hover:animate-spin" />
      ) : (
        <Moon size={40}className="text-orange-500 moon" />
      )}
    </div>
  );
}

export default ThemeBtn;