import {createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark');
  };



  //Here we are setting the theme of the body to the theme state value so that the body theme changes when the theme state changes 
  useEffect(() => {
    document.body.className = theme
    // console.log(document.body);
    
  }, [theme]);


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );

};