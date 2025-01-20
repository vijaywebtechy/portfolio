import { useTheme } from "next-themes";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="toggle-container border-2 border-gray-200 rounded-full flex items-center p-2"
      onClick={toggleSwitch}
    >
      <div className="toggle-handle">
        {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      </div>
    </button>
  );
}

export default ThemeToggle;
