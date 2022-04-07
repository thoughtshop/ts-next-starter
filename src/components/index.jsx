/**
 * !!Only works when used in a Webpack Build!!\
 * Use the webpack's context function to expose the files in the folder.\
 *_.keys()_ method exposes the relative filepaths for us to iterate through
 */
const requireModule = require.context('./', false, /\.js$/);

const modules = {};

requireModule.keys().forEach((fileName) => {
  //exit if we iterate on this file
  if (fileName === './index.js') return;

  //convert filepath into export name
  const moduleName = fileName.replace(/(\.\/|\.js)/g, '');

  //populate modules object with default export
  modules[moduleName] = requireModule(fileName).default;
});

module.exports = modules;
