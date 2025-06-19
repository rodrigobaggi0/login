import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./theme";

// Criação do contexto
const ThemeContext = createContext();

// Provedor do tema
export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  const toggleTheme = () => {
    setThemeName((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("app-theme", newTheme);
      return newTheme;
    });
  };

const themeObject = themeName === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ theme: themeName, toggleTheme }}>
      <StyledThemeProvider theme = {themeObject}>
      {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useTheme = () => useContext(ThemeContext);