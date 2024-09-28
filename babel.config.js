module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],  // Using Babel presets for modern JS and React
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
