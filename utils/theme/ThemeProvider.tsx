import React from 'react';
import { createContext, useContext } from "react";
import { StyleSheet } from 'react-native';
import { DefaultTheme, Theme } from "./Themes";

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
    const {
        theme = DefaultTheme,
        children
    } = props;

    return (
        <ThemeContext.Provider
            value={{
                theme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
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

/**
 * Generates a function to be used in conjunction with the useStyles hook. 
 * 
 * N.B.: The function can only be used with the useStyles hook because the returned function itself uses a hook.
 * 
 * @param styles List of styles that can be used by StyleSheet.create() that can be themified and modified with custom props.
 * @returns A function to generate themified styles with optional custom props.
 */
const makeStyles = <
    T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
    P extends Record<string, unknown>,
    >(styles: T | ((theme: Theme, props?: P) => T)) => (props?: P): T => {
        const { theme } = useTheme();

        const computedStyles = typeof styles === 'function' ? styles(theme, props) : styles;

        return StyleSheet.create(computedStyles);
    }

const useStyles = <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(fn: () => T) => fn();

export {
    makeStyles,
    ThemeConsumer,
    ThemeContext,
    ThemeProvider,
    ThemeProviderProps,
    useStyles,
    useTheme,
};
