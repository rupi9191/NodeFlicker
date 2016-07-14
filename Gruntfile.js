module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['css']
        },
        files: {
          'app/css/style.css': 'app/css/app/app.less',
          'app/css/vendor.css': 'app/css/vendor/*.less'
        }
      }
     
    }
  });

// load node packages
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less:development']);

};