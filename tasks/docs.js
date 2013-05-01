//generate Bootstraped's docs

module.exports = function (grunt) {
  'use strict';

  var fs = require('fs'),
    hogan = require('hogan.js'),
    prod  = false,//process.argv[2] == 'production',
    title = 'Bootstrap';

  /**
   * Custom task to generate Bootstrap documentation
   */
  grunt.registerTask('docs', 'Compile Bootstrap Docs to HTML', function () {
    


    var layout, pages;

    // compile layout template
    layout = fs.readFileSync(__dirname + '/../docs/templates/layout.mustache', 'utf-8');
    layout = hogan.compile(layout, { sectionTags: [{o:'_i', c:'i'}] });

    // retrieve pages
    pages = fs.readdirSync(__dirname + '/../docs/templates/pages');

    // iterate over pages
    pages.forEach(function (name) {

      if (!name.match(/\.mustache$/)) return;

      var page = fs.readFileSync(__dirname  + '/../docs/templates/pages/' + name, 'utf-8')
        , context = {};

      context[name.replace(/\.mustache$/, '')] = 'active';
      context._i = true;
      context.production = prod;
      context.title = name
        .replace(/\.mustache/, '')
        .replace(/\-.*/, '')
        .replace(/(.)/, function ($1) { return $1.toUpperCase() });

      if (context.title == 'Index') {
        context.title = title;
      } else {
        context.title += ' · ' + title;
      }

      page = hogan.compile(page, { sectionTags: [{o:'_i', c:'i'}] });
      page = layout.render(context, {
        body: page
      })

      fs.writeFileSync(__dirname + '/../docs/' + name.replace(/mustache$/, 'html'), page, 'utf-8');
    });

     

  });

};
