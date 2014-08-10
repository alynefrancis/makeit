var buildIt = {};

buildIt.key = 'AIzaSyB9t4PqEHx8asymkjwLeKNJUln-vRmmGiY';

buildIt.init = function(concat) {
	// buildIt.changeDisplay();
	buildIt.getVideo(concat);
	buildIt.getSong();
},

buildIt.changeDisplay = function(){
	$("body").addClass('changeLayout');
};

buildIt.getVideo = function(concat){
	console.log('making video');
	console.log('CONCAT from getVideo :' + concat);
	$.ajax({
	    url: 'https://www.googleapis.com/youtube/v3/search',	    
	    type: 'GET',
	    data: {
	      key: buildIt.key,
	      format: 'jsonp',
	      q: concat,
	      part: "snippet",
		  type: "video",
		  videoEmbeddable: "true",
		  maxResults: 2,
		  // order: "viewCount"
		  order: 'relevance'
		  // order: 'rating'
	    },
	    dataType: 'jsonp',
	    success: function(result){
	    	console.log(result);
	    	console.log(result.items[0].id.videoId);
	    	// var finalOutput = result.items[0].id.videoId; 
	    	buildIt.showVideo(result.items[0].id.videoId);
	    	// $('#tryAgain').on("click", function(){
	    	// 	buildIt.showVideo(result.items[1].id.videoId);	
	    	// 	console.log('try again was clicked');
	    	// 	console.log(result.items[1].id.videoId);
	    	
	    	// })
	    },
	  }); /*$ajax*/
}, /*getVideo*/

buildIt.showVideo = function(watch){
	console.log('show video its getting ' + watch);
	$('#video_container').html('<object width="100%" height="500px"><param name="movie" value="https://www.youtube.com/v/'+watch+'?version=3"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/'+watch+'?version=3" type="application/x-shockwave-flash" width="100%" height="500px" allowscriptaccess="always" allowfullscreen="true"></embed></object>');
},

buildIt.getSong = function(songConcat){
	console.log('song');
	console.log('CONCAT FROM getSong :' + songConcat);
	$.ajax({
	     url: 'https://www.googleapis.com/youtube/v3/search', 
	    type: 'GET',
	    data: {
	      key: buildIt.key,
	      format: 'jsonp',
	      q: songConcat,
	      part: "snippet",
		  type: "video",
		  videoEmbeddable: "true",
		  maxResults: 3,
		  // order: "viewCount"
		  order: 'relevance'
		  // order: 'rating'
	    },
	    dataType: 'jsonp',
	    success: function(result){
	    	console.log(result);
	    	console.log(result.items[0].id.videoId);
	    	var finalOutput = result.items[0].id.videoId;
	    	buildIt.showSong(result.items[0].id.videoId);	   
	    },
	  }); /*$ajax*/
}, /*getVideo*/

buildIt.showSong = function(song){
	console.log('showsongIsGetting ' + song);
	$('#music_container').html('<object height="350" width="425"><param name="movie" value="http://www.youtube.com/v/OdT9z-JjtJk" /><embed height="350" src="http://www.youtube.com/v/' + song + 'type="application/x-shockwave-flash" width="425"></embed></object>');

},


$(document).ready(function(){

$("#submit").on("click", function(e) {
	e.preventDefault();

	var userChoice = $("#search").val();
	console.log(userChoice);
	var concat = 'how to make'+ userChoice;
	console.log(concat);
	$(' span.song_title').html(userChoice)
	buildIt.init(concat);
	buildIt.changeDisplay();

});

$("#listen").on("click", function(e) {
	console.log('listen was clicked')
	e.preventDefault();
	var userChoice = $("#search").val();
	console.log(userChoice);
	var songConcat = userChoice +'song';
	console.log(songConcat);
	buildIt.init(songConcat);
	// if (finalOutput == 'undefined') {
	// 	alert('sorry no inspirational music exists for this project')
	// }
	
});




})

