module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        sassFiles: 'app/**/*.scss',

        sass: {
            dist: {
                files: {
                    'build/site.css': 'app/site.scss'
                }
            }
        },

        watch: {
            sass: {
                tasks: ['sass'],
                files: 'app/**/*.scss'
            }

        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');


    grunt.registerTask('dev', ['default', 'watch']);
    grunt.registerTask('default', ['sass']);

};