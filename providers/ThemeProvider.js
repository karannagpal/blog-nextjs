import { themes, ThemeContext } from 'context/ThemeContext';
import { useState, useMemo, useContext } from 'react';

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
  };

  const themeAPI = useMemo(() => {
    return { currentTheme, toggleTheme };
  }, [currentTheme, toggleTheme]);

  return <ThemeContext.Provider value={themeAPI}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
