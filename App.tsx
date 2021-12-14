import React from 'react';
import { locale as deviceLocale } from 'expo-localization';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from '@nav/Root';
import { DarkTheme, LightTheme, ThemeProvider } from '@utils/theme';
import { TranslationProvider } from '@utils/i18n';

const App = () => {
  // TODO (William): Get stored settings.
  const systemScheme = useColorScheme();
  // const storedScheme = useStoredScheme();

  const systemTheme = systemScheme === 'dark' ? DarkTheme : LightTheme;
  // const storedTheme = storedScheme === 'dark' ? DarkTheme : LightTheme;
  // const theme = storedScheme || systemTheme;

  const systemLocale = deviceLocale;
  // const storedLocale = useStoredLocale();
  // const locale = storedLocale || systemLocale;

  return (
    <ThemeProvider theme={systemTheme}>
      <TranslationProvider locale={systemLocale}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </TranslationProvider>
    </ThemeProvider>
  );
};

export default App;
