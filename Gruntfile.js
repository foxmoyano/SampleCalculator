module.exports = function(grunt) {
    const nombreDist = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      clean: ['dist', 'build'],
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
        all: ['js/*.js'],
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
      uglify: {
        /*js1: {
          src: 'js/app.js',
          dest: 'build/app.min.js'
        },*/
        js2: {
          src: 'bower_components/angular/angular.js',
          dest: 'build/angular.min.js'
        }
      },
      concat: {
        options: {
          separator: ';'
        },
        dist: {
          src: ['build/angular.min.js', 'app.min.js'],
          dest: `dist/app.full.${nombreDist}.min.js`
        }
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-dom-munger');    
  
    grunt.registerTask('default', ['jshint', 'clean', 'cssmin', 'uglify', 'concat', 'dom_munger', 'htmlmin']);    
  };
  