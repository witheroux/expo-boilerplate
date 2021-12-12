# Expo - Typescript Boilerplate (Work-in-progress)

This is a simple Expo app boilerplate built upon the Blank (Typescript) managed workflow. The purpose is to facilitate development by including useful features like theming, linting, navigation, state management and i18n.

## Getting started

This is a simple managed expo project and as such, it uses the usual expo scripts.

```sh
npm run start # Starts the development server
npm run android # Starts the development server and opens on android
npm run ios # Starts the development server and opens on an iOS simulator
npm run web # Starts the development server and opens on the web
```

## Development 

### Linting

A script has been added to lint the code to ensure consistency in the code. 

```sh
npm run lint
```

It is implemented using eslint and prettier. Check `.eslintrc` and `.prettierrc` for more details on the rules that are applied. Linting is run automatically through a pre-commit hook to guarantee code consitency.

### Aliases
Aliases have been defined to facilitate the path structure. The various aliases can be found in `tsconfig.json` and `babel.config.js`.

## TODO

- [x] Basic Navigation
- [x] Basic Theming
- [ ] Linting (Prettier and eslint configs)
- [ ] State management? (Redux, React-Query, something else?)
- [ ] Data-fetching (React-Query, something else?)
- [ ] i18n (i18-next?)
- [ ] Testing