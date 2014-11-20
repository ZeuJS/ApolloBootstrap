"use strict";
var less = require('less');
var path = require('path');
var fs = require('fs');

var lessPath = path.resolve(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'less'));
var file = path.resolve(path.join(lessPath, 'bootstrap.less'));
var parser = new(less.Parser)({
  paths: [lessPath],
  filename: 'bootstrap.less'
});


module.exports = function(services) {
  var bootstrapTemplate = services.findById('apolloTemplates').findById('bootstrap');
  var less = require('less');

  fs.readFile(file, function (err, less) {
    if (err) throw err;
    parser.parse(less.toString('utf8'), function (e, tree) {
      var css = tree.toCSS({
        compress: true
      });
      var outputCss = path.resolve(path.join(bootstrapTemplate.path, 'public', 'css', 'bootstrap.css'));
      fs.writeFile(outputCss, css, function (err) {
        if (err) throw err;
        console.log('Bootstrap.css generated');
      });
    });
  });

};