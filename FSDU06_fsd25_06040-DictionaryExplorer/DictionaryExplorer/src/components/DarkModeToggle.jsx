import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeCOntext";

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-300 dark:bg-gray-700 rounded"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
