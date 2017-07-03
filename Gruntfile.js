module.exports = function(grunt){
//  wywyływanie prostych tasków
//  grunt.registerTask('speak',function(){
//    console.log("i'm speaking");
//  });
//  grunt.registerTask('siema',function(){
//    console.log("mowie siema");
//  });
//  
//  grunt.registerTask('default',['speak','siema']);
 
  
//  grunt.initConfig({
////============łączenie plików
//    concat: {
//      js: {
//        src: ['js/main.js', 'js/main2.js'],
//        dest: 'prod/js/mainP.js',
//      },
//      css: {
//        src: ['css/style.css', 'css/style2.css'],
//        dest: 'prod/css/style.css',
//      },      
//    },
////  ----------------pilnowanie plików podczas zapisu
//    watch: {
//    js: {
//        files: ['js/**/*.js'],
//        tasks: ['concat'],
//      },
//    css: {
//        files: ['css/**/*.css'],
//        tasks: ['concat'],
//      },        
//    },
//    
////    min: {
////      dist:{
////        src: 'css/style.css',
////        dest:'prod/css/style.min.css'
////      },
////    },
//    
//    
//    
//  });
//
//  grunt.loadNpmTasks('grunt-contrib-concat');
//  grunt.loadNpmTasks('grunt-contrib-watch');
//  
//  //grunt.registerTask('min','min');
//  //grunt.registerTask('default',['concat','watch','min']);
     
//};
  //-----------------------------min CSS i JS -----------------------
    grunt.initConfig({
      cssmin: {
          target: {
            files: {
              'prod/css/style.min.css': 'prod/css/style.css'
            }
          }
        },
      uglify: {
        my_target: {
          files: {
            'prod/js/mainP.min.js': 'prod/js/mainP.js'
          }
        }
      }      
      });
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['cssmin','uglify']);  
};