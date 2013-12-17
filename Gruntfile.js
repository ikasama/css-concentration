module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    stylus: {
      compile: {
        options: {
        },
        files: {
          'css/css-concentration.css': ['styl/*.styl']
        }
      }
    },

    watch: {
      stylus: {
        files: ['styl/*.styl'],
        tasks: ['stylus']
      }
    }

  });

};
