import { ColorValue } from 'react-native';

/**
 * Theme options for the application.
 */
interface Theme {
  colors: {
    background: ColorValue;
  };
}

/**
 * Shared theme options for the Light and Dark theme.
 */
const SharedTheme: Partial<Theme> = {};

/**
 * Dark theme options for the application.
 */
const DarkTheme: Theme = {
  ...SharedTheme,
  colors: {
    background: '#333333',
  },
};

/**
 * Light theme options for the application.
 */
const LightTheme: Theme = {
  ...SharedTheme,
  colors: {
    background: '#f1f1f1',
  },
};

/**
 * Default theme for the application. Reference to LightTheme.
 */
const DefaultTheme = LightTheme;

export { DarkTheme, DefaultTheme, LightTheme, SharedTheme, Theme };
