module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
   		dist: {
   			files: {
   				'css/style.css' : 'css/style.scss'
   			}
   		}
  	},
  	watch: {
  		css: {
  			files: ['css/*.scss'],
  			tasks: ['sass', 'autoprefixer']
  		},
  		options: {
  			livereload: true
  		}
  	}, 
  	connect: {
  		server: {
  			options: {
  				port: 9002,
  				base:''
  			}
  		}
  	},
  	autoprefixer: {
  		options: {
  			browsers: ['last 5 versions', 'ie 7', 'ie 8', 'ie 9']
  		},
  		no_dest: {
  			src: 'css/style.css'
  		}

  	}
 });
// closes grunt initConfig
 


 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-autoprefixer');

// grunt connect (or more verbosely, grunt connect:server) will start a static web server at http://localhost:9001/, with its base path set to the www-root directory relative to the gruntfile, and any tasks run afterwards will be able to access it.



 // Default task(s).
 grunt.registerTask('default', ['sass', 'autoprefixer', 'connect', 'watch']);
};
// on the grunt website it says there is 'sass' in the square brackets above 