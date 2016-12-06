module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        express: {
            server: {
                options: {
                    script: 'server.js',
                    port: 9999
                }
            }
        },

        watch: {
            server: {
                files: ['server.js'],
                tasks: [ 'express']
            }
        }

    });

    grunt.registerTask('default', [
        'express',
        'watch'
    ]);

}
