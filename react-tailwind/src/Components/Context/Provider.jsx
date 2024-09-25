import React, { useState } from 'react';
import ThemeContext from './ContextAPI';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Manage the theme state

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
