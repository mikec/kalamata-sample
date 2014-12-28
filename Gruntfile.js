module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        exec: {
            create_db: 'createdb kalamata_sample',
            create_db_user: 'createuser kalamata_sample_user',
            drop_db: 'dropdb kalamata_sample',
            drop_user: 'dropuser kalamata_sample_user',
            knex_migrate: 'knex migrate:latest',
            knex_seed: 'knex seed:run'
        },

        express: {
            server: {
                options: {
                    script: 'server/main.js',
                    port: 9999
                }
            }
        },

        watch: {
            server: {
                files: ['server/**'],
                tasks: [ 'express']
            }
        }

    });

    grunt.registerTask('setup', [
        'exec:create_db',
        'exec:create_db_user',
        'exec:knex_migrate',
        'exec:knex_seed'
    ]);

    grunt.registerTask('teardown', [
        'exec:drop_db',
        'exec:drop_user'
    ]);

    grunt.registerTask('default', [
        'express',
        'watch'
    ]);

}