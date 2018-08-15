const path = require('path');
const { storyLoader } = require('vue-storybook');

module.exports = (storybookBaseConfig, configType) => {

  // add vue-storybook loader
  storybookBaseConfig.module.rules[1].options = {
    loaders: {
      story: storyLoader,
    }
  };

  // add sass loaders
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  return storybookBaseConfig;

};
