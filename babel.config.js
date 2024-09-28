// babel.config.js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          styles: './src/styles',
          context: './src/context',
          services: './src/services',
        },
      },
    ],
  ],
};
// babel.config.js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          styles: './src/styles',
          context: './src/context',
          services: './src/services',
        },
      },
    ],
  ],
};
