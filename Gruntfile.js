module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      uses_defaults: ['shadejs/**/*.js'],      
    },
    // Test with Busterjs
    buster: {
      test: {
        config: 'buster.js'
      },
      server: {
        port: 1111
      }
    },
    // Karma config
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        runnerPort: 9999,
        singleRun: true,
      }
    },
    // Zip everything up
    compress: {
      target: {
        files: {
          'build/zip/<%= pkg.name %>.v<%= pkg.version %>.zip': ['shadejs/src/**.js']
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'build/minified/minified-<%= pkg.name %>.v<%= pkg.version %>.js': ['shadejs/src/**.js']
        }
      }
    },
    // Configure the copy task to move files from the development to production folders
    copy: {
      target: {
        files: {
          'build/': ['shadejs/src/**']
        }
      }
    },

  
  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-buster');
  grunt.loadNpmTasks('grunt-karma');

  // Define your tasks here
  grunt.registerTask('default', ['jshint', 'compress', 'uglify', 'copy']);

};