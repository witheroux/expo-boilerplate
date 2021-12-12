import { StyleSheet } from "react-native";
import { useTheme } from "./ThemeProvider";
import { Theme } from "./Themes";

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

export {
    makeStyles,
};
