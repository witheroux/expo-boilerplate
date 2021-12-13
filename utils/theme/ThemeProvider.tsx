import React, { createContext, useContext } from 'react';
import { DefaultTheme, Theme } from './Themes';

/**
 * Props for the Theme Provider
 */
interface ThemeProviderProps {
  theme?: Theme;
}

/**
 * Theme context for this application.
 */
const ThemeContext = createContext({
  theme: DefaultTheme,
});

/**
 * Theme provider for this application.
 */
const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { theme = DefaultTheme, children } = props;

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Theme consumer for this application;
 */
const ThemeConsumer = ThemeContext.Consumer;

/**
 * Hook to facilitate usage of ThemeContext in a single import.
 *
 * @returns Theme from the ThemeContext
 */
const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeConsumer, ThemeContext, ThemeProvider, ThemeProviderProps, useTheme };
