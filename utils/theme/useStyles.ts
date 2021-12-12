import { StyleSheet } from "react-native";

/**
 * Given the return value of `makeStyles()`, returns the properly computed
 * `NamedStyles`. 
 * 
 * @param fn Function that returns NamedStyles.
 * @param props Any props to pass to fn.
 * @returns NamedStyles
 */
const useStyles = <
    T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
    P extends Record<string, unknown>,
    >(fn: (props?: P) => T, props?: P) => fn(props);

export {
    useStyles
};
