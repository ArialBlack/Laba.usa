module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        
        less: {
            development: {
                options: {
                    paths: ['less'],
                    compress: false,
                    cleancss: true,
                    dumpLineNumbers: 'comments'
                },
                files: {
                    '../css/style.css': 'less/style.less'
                }
            }
        },

        bake: {
            your_target: {
                options: {
                   // Task-specific options go here.
                },

                files: {
                    "../index.html": "index.html"
               }
            }
        },


        minified : {
            files: {
                src: [
                    //'/bower_components/jquery/dist/jquery.js',
                    //'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js',
                    //'/bower_components/fullpage.js/vendors/jquery.easings.min.js',
                    //'/bower_components/fullpage.js/jquery.fullPage.js',
                    //'/bower_components/bootstrap/js/modal.js',
                    '/js/*.js'
                ],
                dest: '../js/min/'
            },
            options : {
                sourcemap: true,
                allinone: false,
                //dest_filename: '/js/package.js'
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            bake: {
                files: [
                    'index.html',
                    'htm/*.html'
                ],
                tasks: ['bake']
            },


            less: {
                files: [
                    'less/**/*.less'
                ],
                tasks: ['less', 'postcss']
            },

            minified: {
                files: [
                    '../js/main.js'
                ],
                tasks: ['minified']
            }

        },
        
        postcss: {
            options: {
              processors: [
                require('autoprefixer')({browsers: ['last 2 versions', 'ie 10']}),
              ]
            },
            dist: {
              src: '../css/style.css'
            }
        }

    });

    // load npm modules
    grunt.loadNpmTasks('grunt-bake');
    //grunt.loadNpmTasks('grunt-svgmin');
    //grunt.loadNpmTasks('grunt-svgstore');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-minified');

    // register tasks
    grunt.registerTask('default', ['bake', 'less', 'postcss', 'minified', 'watch']);
};
