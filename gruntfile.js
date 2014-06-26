module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            },
            ff: {
                src: ['ff/*.js'],
                dest: 'dist/ff.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> \n\nBuilt by FastForward\nwww.fastforwardinnovation.com\n\n<%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'],
                    'dist/ff.min.js': ['<%= concat.ff.dest %>']

                }
            }
        },
        sass: {
            dist: {
                options: {
                    compass: true,
                    style: 'expanded',
                    lineNumbers: true
                },
                files: {
                    'css/styles.css': 'sass/styles.scss'
                }
            }
        },
        watch: {
            //files: ['js/*.js', 'ff/*.js', '**/*.scss'],
            //tasks: ['default'],
            options: { livereload: true },
            js: {
                files: ['js/*.js', 'ff/*.js'],
                tasks:[]
                // uncomment below for production
                //tasks: ['concat', 'uglify']
            },
            sass: {
                options: {
                    livereload: false
                },
                files: ['**/*.scss'],
                tasks: ['sass']
            },
            css: {
                files: ['css/styles.css']
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat', 'uglify', 'sass']);
};
