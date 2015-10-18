module.exports = function(grunt) {
	grunt.initConfig({
		// Watch task config

	   compass: {
	    dist: {
	      options: {
	        sassDir: 'css',
	        cssDir: 'css',
	        environment: 'production'
	      }
	     }
   	 },

   	 watch: {
	      css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
	   },

		browserSync: {
			dev: {
				bsFiles: {
					src: [ '*.html' , 'css/*.css']
				},
				options: {
					watchTask: true,
					server: 	'./'
				}
			}
		}

	});
  // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');


    // define default task
	 grunt.registerTask('default', ['browserSync', 'watch']);
};