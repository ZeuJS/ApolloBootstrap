"use strict";

var path = require('path');

module.exports =
{
  uninstallable: false,
  services: [
  ],
  events: [
    {
      on: 'zeujs_chaos_ready',
      id: 'compileResources',
      call: require('./template/depsCompiler.js'),
    },
  ],
  configs: {
  },
  apolloTemplates: [
    {
      id: 'bootstrap',
      path: path.resolve(path.join(__dirname, 'template')),
      parent: 'base'
    }
  ],

};