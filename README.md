# Expo - Typescript Boilerplate (Work-in-progress)
This is a simple Expo app boilerplate built upon the Blank (Typescript) managed workflow. The purpose is to facilitate development by including useful features like theming, linting, navigation, state management and i18n.

## Getting started
This is a simple managed expo project and as such, it uses all the usual expo scripts you expect.

```sh
npm run start # Starts the development server
npm run android # Starts the development server and opens on android
npm run ios # Starts the development server and opens on an iOS simulator
npm run web # Starts the development server and opens on the web
```

## Development 
### Aliases
Aliases have been defined to facilitate the path structure. The various aliases can be found in `.eslintrc`, `tsconfig.json` and `babel.config.js`.

### Theming
This boilerplate provides a set of theming utilities to help with customizing styles based on a provided Theme.

#### Using ThemeProvider
The `<ThemeProvider />` expects to be provided a theme which can then be used through the `makeStyles()` function and `useStyles()` hook.

```tsx
// App.tsx
import { useColorScheme } from 'react-native';
import { ThemedView } from '@components/ThemedView';
import { DarkTheme, LightTheme, ThemeProvider } from '@utils/theme';

const App: React.FC = () => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : LightTheme;

    return (
        <ThemeProvider theme={theme}>
            <ThemedView title="Title"/>
        </ThemeProvider>
    );
}
```

#### Using themed styles
The `makeStyles()` function returns a function to provide to the `useStyles()` hook in order to generate the `NamedStyles` to use within components. 

```tsx
// ThemedView.tsx
import { Text, View } from 'react-native';
import { makeStyles, Theme, useStyles } from '@utils/theme';

interface ThemedViewProps {
    title: string;
}

const ThemedView: React.FC<ThemedViewProps> = (props) => {
    const { title } = props;
    const { text, view } = useStyles(styles);

    return (
        <View style={view}>
            <Text style={text}>{title}</Text>
        </View>
    );
}

const styles = makeStyles((theme: Theme) => ({
    text: {
        color: theme.colors.text,
        fontSize: 20,
    },
    view: {
        textAlign: 'center',
    }
}));

export default ThemedView;
```

### Navigation
This boilerplate uses [React Navigation](https://reactnavigation.org/) as a its navigation library. It uses a main native stack navigator with a group within it with modals.

### Linting
A script has been added to lint the code to ensure consistency in the code. 

```sh
npm run lint
```

It is implemented using eslint and prettier. Check `.eslintrc` and `.prettierrc` for more details on the rules that are applied. Linting is run automatically through a pre-commit hook to guarantee code consitency.

### i18n
This boilerplate provides a set of internationalization/localization utilities to help with translations. This is done through the [i18n-js](http://i18njs.com/) library but could easily be replaced with just about anything.

#### Using TranslationProvider
The `<TranslationProvider />` expects to be provided a locale which can be used to translate text in the app.

```tsx
// App.tsx
import { locale } from 'expo-localization';
import { Text, View, useColorScheme } from 'react-native';
import { TranslatedItem } from '@components/TranslatedItem';
import { TranslationProvider } from '@utils/i18n';

const App: React.FC = () => {
    return (
        <TranslationProvider locale={locale}>
            <TranslatedItem />
        </TranslationProvider>
    );

}
```

#### Translating text
The `useTranslation()` hook returns a way to update the locale with the `setLocale()` function and a way to get a translation from the `translate()` function.

```tsx
// TranslatedItem.tsx
import { Text } from 'react-native';
import { useTranslation } from '@utils/i18n';

const TranslatedItem: React.FC = () => {
    const { translate } = useTranslation();

    return <Text>{translate('my-translation-key')}</Text>;
}

export default TranslatedItem;
```

### State Management
TODO

### Data-Fetching
TODO

### Testing
TODO

#### CI
TODO

## TODO

- [x] Basic Navigation
- [x] Basic Theming
- [x] Linting (Prettier and eslint configs)
- [x] i18n (i18-next?)
- [ ] Testing
- [ ] State management/Data-fetching? (Redux/Saga, React-Query, something else?)