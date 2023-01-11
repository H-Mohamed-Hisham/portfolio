import React, { useState, useEffect } from "react";

type ThemeProp = "light" | "dark";
type ThemeContextProp = { theme: ThemeProp; toggleTheme: () => void };

const ThemeContext = React.createContext<ThemeContextProp>(
  {} as ThemeContextProp
);

const ThemeProvider: React.FC<any> = ({ children }) => {
  
  const [theme, setTheme] = useState<ThemeProp>("light");

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(darkMediaQuery.matches ? 'dark' : 'light')
    darkMediaQuery.addEventListener('change', (e) => {
      setTheme(e.matches ? 'dark' : 'light')
    });
  }, [])
  
  
  const toggleTheme = () => {
    const name = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', name)
    setTheme(name)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext }