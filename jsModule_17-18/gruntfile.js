module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/jquery.color-2.1.0.js', 'js/jquery.jcarousel.js', 'js/script.js'],
        dest: 'build/js/script.main.js',
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/js/script.main.min.js': ['build/js/script.main.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        resetoundingPrecision: -1
      },
      target: {
        files: {
          'build/css/style.main.min.css': ['css/*.css']
        }
      }
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'build/img'                  // Destination path prefix
        }]
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['css/*.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false,
        }
      },
      img: {
        files: ['img/*'],
        tasks: ['imagemin'],
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'imagemin', 'watch']);

};
// module.exports = function(grunt) {

//   // Project configuration.
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
//     concat: {
//       dist: {
//         src: ['js/*.js'],
//         dest: 'js/production.js',
//       },
//       dist: {
//         src: ['css/reset.css', 'css/*.css'],
//         dest: 'build/css/production.css',
//       },
//     },
//     uglify: {
//       options: {
//         mangle: false
//       },
//       build: {
//         src: 'build/js/production.js',
//         dest: 'build/js/production.min.js'
//       },
//     },
//     cssmin: {
//       options: {
//         shorthandCompacting: false,
//         roundingPrecision: -1
//       },
//       target: {
//         files: {
//           'build/css/production.min.css': ['build/css/production.css']
//         }
//       }
//     }
//   });

//   // Load the plugin that provides the "uglify" task.
//   grunt.loadNpmTasks('grunt-contrib-concat');
//   grunt.loadNpmTasks('grunt-contrib-uglify');
//   grunt.loadNpmTasks('grunt-contrib-cssmin');
//   // Default task(s).
//   grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

// };