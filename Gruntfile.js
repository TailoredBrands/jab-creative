module.exports = function(grunt) {
  var hljs = require('highlight.js');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    csssplit: {
    dist: {
      src: ['dist/assets/css/app.css'],
      dest: 'dist/assets/css/app.css',
      options: {
          maxSelectors: 4095,
          maxPages: 3,
          suffix: '_page_'
      }
    },
  },  
    assemble: {
      options: {
        flatten: false,
        assets: 'dist/assets/',
        data: ['src/data/*.json'],
        marked: {
          gfm: true,
          sanitize: false,
          highlight: function(code, lang) {
            if (lang === undefined) lang = 'bash';
            if (lang === 'html') lang = 'xml';
            if (lang === 'js') lang = 'javascript';
            return '<div class="code-container">' + hljs.highlight(lang, code).value + '</div>';
          }
        }
      },
      dist: {
        options: {
          partials: ['src/includes/**/*.html'],
          helpers: ['src/helpers/*.js'],
          layout: 'src/layouts/default.html'
        },
        expand: true,
        cwd: 'src/pages/',
        src: '**/*.html',
        dest: 'dist/'
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss', 'bower_components/slick-carousel/slick', 'bower_components/foundation-datepicker/css', 'bower_components/foundation-icon-fonts']
      },
      dist: {
        options: {
          // outputStyle: 'compressed'
          outputStyle: 'expanded',
          comments: true
        },
        files: {
          'dist/assets/css/app.css': 'src/assets/scss/app.scss'
        }        
      }
    },

    copy: {
      dist: {
        files: [
          {expand:true, cwd: 'src/assets/', src: ['**/*','!{scss,js}/**/*'], dest: 'dist/assets/', filter:'isFile'},
          {expand:true, cwd: 'bower_components/modernizr/', src: 'modernizr.js', dest: 'dist/assets/js', filter:'isFile'},
          {expand:true, cwd: 'bower_components/foundation-icon-fonts/', src: '*.{eot,ttf,woff,svg}', dest: 'dist/assets/css', filter:'isFile'},
          {expand:true, cwd: 'bower_components/slick-carousel/slick/fonts/', src: '*.{eot,ttf,woff,svg}', dest: 'dist/assets/css', filter:'isFile'}
        ]
      }
    },

    uglify: {
      dist: {
        mangle: false,
        files: {
          'dist/assets/js/all.js': ['bower_components/slick-carousel/slick/slick.js', 'bower_components/foundation-datepicker/js/foundation-datepicker.js', 'bower_components/foundation/js/foundation.js', 'bower_components/jquery-zoom/jquery.zoom.js', 'src/assets/js/*']
        }
      }
    },

    clean: ['dist/'],

    browserSync: {
        bsFiles: {
            src : 'dist/**/*'
        },
        options: {

            watchTask: true,
            server: {
                baseDir: "dist/"
            }
        }
    },

    watch: {
      grunt: { 
        files: ['Gruntfile.js'],
        tasks: ['build'] 
      },

      sass: {
        files: 'src/assets/scss/**/*.scss',
        tasks: ['sass', 'csssplit']
      },

      copy: {
        options: {cwd: 'src/assets/'},
        files: ['**/*','!{scss,js}/**/*'],
        tasks: ['copy']
      },

      uglify: {
        options: {cwd: 'src/assets/js'},
        files: ['**/*.js'],
        tasks: ['uglify']
      },

      assemble_all: {
        files: ['src/{includes,layouts}/**/*.html'],
        tasks: ['assemble'],
        // options: {livereload:true}
      },

      assemble_pages: {
        files: ['src/pages/**/*.html'],
        tasks: ['newer:assemble'],
        // options: {livereload:true}
      }
    }
  });

  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-csssplit');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-browser-sync');
  
  
  grunt.registerTask('build', ['clean','sass','csssplit','uglify','assemble','copy']);
  grunt.registerTask('default', ['build','browserSync','watch']);
}
