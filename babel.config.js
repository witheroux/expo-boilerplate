module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './components',
            '@constants': './constants',
            '@nav': './nav',
            '@screens': './screens',
            '@services': './services',
            '@utils': './utils',
          },
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
