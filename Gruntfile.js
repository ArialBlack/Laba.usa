module.exports = function(grunt) {

    grunt.registerTask('svgmin_icons', 'Optimiser for SVG Icons', function() {
        grunt.config.set('svgmin', grunt.config.get('svgmin_icons'));
        grunt.task.run('svgmin');
    });
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        clean: {
            sprite: {
                src: ['icons-svg/compressed']
            }
        },
        
        svgmin_icons: {
            options: {
                plugins: [
                    { removeDimensions: true },
                    { removeTitle: true },
                    { removeAttrs: { attrs: 'fill' } }
                ]
            },
            base: {
                expand: true,
                cwd: 'icons-svg',
                src: ['*.svg'],
                dest: 'icons-svg/compressed'
            }
        },

        svgstore: {
            icons: {
                options: {
                    prefix : 'icon-',
                },
                files: {
                    'images/svg-icons-sprite.svg': ['icons-svg/compressed/*.svg']
                },
            },
            logos: {
                files: {
                    'images/svg-images-sprite.svg': 'img-svg/*.svg'
                }
            }
        },

        
        less: {
            development: {
                options: {
                    paths: ['less'],
                    compress: false,
                    cleancss: true,
                    dumpLineNumbers: 'comments'
                },
                files: {
                    'css/style.css': 'less/style.less'
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
                dest: '/js/min/'
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
            
            svgstore: {
                files: [
                    'icons-svg/*.svg',
                    'img-svg/*.svg'
                ],
                tasks: ['svgmin_icons', 'svgstore', 'clean:sprite']
            },
            
            less: {
                files: [
                    'less/**/*.less'
                ],
                tasks: ['less', 'postcss']
            },

            minified: {
                files: [
                    '/js/main.js'
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
              src: 'css/style.css'
            }
        }

    });

    // load npm modules
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-minified');

    // register tasks
    grunt.registerTask('default', ['clean', 'svgmin_icons', 'svgstore', 'clean:sprite', 'less', 'postcss', 'minified', 'watch']);
};
