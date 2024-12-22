"use client";

import { THEME_KEY } from "@/mocks";
import { useEffect, useState } from "react";
import { ThemeContext } from ".";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const setBackground = (theme) =>
    document.body.style.setProperty(
      "background",
      theme === "light" ? "#fff" : "#333",
    );

  useEffect(() => {
    const loadedTheme = localStorage.getItem(THEME_KEY);
    if (loadedTheme) {
      setTheme(loadedTheme);
      setBackground(loadedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    setBackground(updatedTheme);
    localStorage.setItem(THEME_KEY, updatedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
