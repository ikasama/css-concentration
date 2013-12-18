module.exports = function(grunt) {

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
    },

    play: {
      fanfare: {
        file: 'node_modules/grunt-play/sounds/fanfare.mp3'
      }      
    }


  });

  grunt.loadNpmTasks('grunt-play');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('fanfare', 'play');

};
