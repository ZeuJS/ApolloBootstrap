"use strict";
var path = require('path');
var fs = require('fs');

module.exports = function(services) {
  var bootstrapTemplate = services.findById('apolloTemplates').findById('bootstrap');

  var bootstrapFromPath = path.resolve(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist'));
  var jqueryFromPath = path.resolve(path.join(__dirname, '..', 'node_modules', 'jquery', 'dist'));
  var bootstrapToPath = path.resolve(path.join(bootstrapTemplate.path, 'public', 'bootstrap'));
  var jqueryToPath = path.resolve(path.join(bootstrapTemplate.path, 'public', 'jquery'));
  fs.unlink(bootstrapToPath, function() {
    fs.symlinkSync(bootstrapFromPath, bootstrapToPath, 'dir');
  });
  fs.unlink(jqueryToPath, function() {
    fs.symlinkSync(jqueryFromPath, jqueryToPath, 'dir');
  });
};