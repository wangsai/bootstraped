/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.

    clean: {
      build: ['build/']
    },

    copy: {
      assets: {
        files: [
         {expand: true, cwd: './', src: ['font/**'], dest: 'build/'}
        ]
      }
    },

    less: {
      development: {
        files: {
          "build/css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less",
          "build/css/<%= pkg.name %>-responsive.css": "less/responsive.less",
          "build/css/font-awesome-ie7.css": "less/font-awesome-ie7.less",
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "build/css/<%= pkg.name %>.min.css": "less/<%= pkg.name %>.less",
          "build/css/<%= pkg.name %>-responsive.min.css": "less/responsive.less",
          "build/css/font-awesome-ie7.min.css": "less/font-awesome-ie7.less",
        }
      }
    },


    //order is IMPORTANT!!!
    plugins: [
      'js/bootstrap-transition.js',
     'js/bootstrap-alert.js',
     'js/bootstrap-button.js',
     'js/bootstrap-carousel.js',
     'js/bootstrap-collapse.js',
     'js/bootstrap-dropdown.js',
     'js/bootstrap-modal.js',
     'js/bootstrap-tooltip.js',
     'js/bootstrap-popover.js',
     'js/bootstrap-scrollspy.js',
     'js/bootstrap-tab.js',
     'js/bootstrap-typeahead.js'
    ],

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['<%= plugins %>'],
        dest: 'build/js/<%= pkg.name %>.js'
      }
    },


    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },


    connect: {
        server: {
          options: {
            port: 9001,
            base: 'docs',
            keepalive: true
          }
        }
      },


    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },



  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Load local tasks
  grunt.loadTasks('tasks'); //docs task

  // Default task.
  grunt.registerTask('build', ['clean', 'copy', 'less', 'concat', 'uglify']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('doc', ['docs']);
  grunt.registerTask('server', ['connect']);

};
