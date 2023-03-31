module.exports = function(grunt) {
    const nombreDist = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      clean: {
        init: ['dist', 'build'],
        tmp: ['app.full.min.js'],
        build: ['build']
      },
      dom_munger:{
        read: {
          options: {
            read:[
              {selector:'script[data-concat!="false"]',attribute:'src',writeto:'appjs'},
              {selector:'link[rel="stylesheet"][data-concat!="false"]',attribute:'href',writeto:'appcss'}
            ]
          },
          src: 'index.html'
        },
        update: {
            options: {
              remove: ['script[data-remove!="false"]','link[data-remove!="false"]'],
              prepend: [
                {selector:'body',html:'<script src="app.full.'+ nombreDist +'.min.js"></script>'}
              ],
              append: [
                {selector:'head',html:'<link rel="stylesheet" href="style.full.'+ nombreDist +'.min.css">'}
              ]
            },
          src:'index.html',
          dest: 'build/index.html'
        }
      },  
      jshint: {
        all: ['js/app.js'],
        options: {
          'esversion': 6,
        }        
      },      
      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            'dist/index.html': 'build/index.html'
          }
        }
      },
      cssmin: {
        build: {
          src: 'css/style.css',
          dest: `dist/style.full.${nombreDist}.min.css`
        }
      },
      copy: {
        main: {
          files: [
            {
              src: 'app.full.min.js',
              dest: `dist/app.full.${nombreDist}.min.js`
            }    
          ]
        }
      },
      uglify: {
        js: {
          src: 'build/app.full.min.js',
          dest: `dist/app.full.${nombreDist}.min.js`
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-dom-munger');    
  
    grunt.registerTask('default', ['clean:init', 'jshint', 'copy', 'cssmin', 'dom_munger', 'htmlmin', 'clean:build', 'clean:tmp']);
  };
  
  