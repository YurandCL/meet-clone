import { createContext, useState, useEffect } from 'react';

import Storage from 'storage';

const ThemeContext = createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const switchTheme = (theme) => {
    setTheme(theme);
    Storage.saveThemeMode(theme);
  };

  useEffect(() => {
    Storage.getThemeMode() && setTheme(Storage.getThemeMode());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
