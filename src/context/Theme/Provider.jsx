import { useState, useEffect } from "react";
import { ThemeContext } from ".";
import { THEME_KEY } from "@/mocks";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const loadedTheme = localStorage.getItem(THEME_KEY);
    if (loadedTheme) {
      setTheme(loadedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem(THEME_KEY, updatedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
