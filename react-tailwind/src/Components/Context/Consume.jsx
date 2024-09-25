import React, { useContext } from 'react';
import ThemeContext from './ContextAPI';

function ThemeToggler() {
  // Use the useContext hook to access the theme and toggleTheme from the context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{backgroundColor: theme === "light" ? "red" : "black"}}>
        
      <p>The current theme is: {theme}</p>
      <button onClick={toggleTheme} style={{color:"white"}}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
}

export default ThemeToggler;
