import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from '@nav/Root';
import { DarkTheme, LightTheme, ThemeProvider } from '@utils/theme';

const App = () => {
  const systemScheme = useColorScheme();
  // TODO (William): Get theme for stored settings.
  // const storedScheme = useStoredScheme();

  const systemTheme = systemScheme === 'dark' ? DarkTheme : LightTheme;
  // const storedTheme = storedScheme === 'dark' ? DarkTheme : LightTheme;
  // const theme = storedScheme ? storedTheme : systemTheme;

  return (
    <ThemeProvider theme={systemTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
