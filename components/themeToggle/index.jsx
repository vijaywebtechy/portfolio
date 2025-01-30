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
      className="toggle-container border-gray-200 rounded-full flex items-center p-1"
      onClick={toggleSwitch}
    >
      <div className="toggle-handle rotateInfinite">
        {theme === "dark" ? (
          <Moon size={24} strokeWidth={1.5} />
        ) : (
          <Sun size={24} strokeWidth={1.5} />
        )}
      </div>
    </button>
  );
}

export default ThemeToggle;
