/*
var myVariable;
myVariable = 'Kim';
myVariable = 'Park';

var newVariable = 'Lee';

function sayHi(){
	console.log('Hello JS!');
}


function getSum(a, b){
	return a+b;
}

const result = getSum('1','2');
console.log(result);

// Callback function
function isEnd(value, cb){
console.log(value);

cb(value + ' now!!'); // excute cb function
}

isEnd('Take a break', function(data){
console.log(data+', OK!');
}
);

var btn = document.querySelector('button');
btn.onclick = function(){
	alert('Ouch! Stop poking me!');
}
// document.querySelector('button').onclick = function(){alert('');}

//$(function(){alert('jQuery works!')});
*/
$(function(){
	
	var apiKey = "AIzaSyDpcyngA0lUi8ekOCihBsjDmmIj54OKPJ4";
	var apiYoutube = "https://www.googleapis.com/youtube/v3/search";
	
	$('form').submit(function(ev) {
		ev.preventDefault();	// 전송 막음
	
		var query = $('#query').val();
		
		//console.log(query);
		
		search(query);
		})
		function search(query) {
			$.get(
				apiYoutube, 
				{ // data
					part : 'snippet',
					q : query,
					type : 'video',
					maxResults : 5,
					key : apiKey
				},
				function(data) { // 성공
					console.log(data);
					$('#results').empty();
					$.each(data.items, function(index, item){
						var newItem = buildItem(item);
						$('#results').append(newItem);
					})
					
				}
			);
		}
		/*
		<li class="item">
          <a href="http://www.youtube.com/watch?v=e3Nl_TCQXuw" target="_blank">
          <h3>Beauty and the Beast – US Official Final Trailer</h3>
          <div class="image-wrapper">
            <img src="https://i.ytimg.com/vi/e3Nl_TCQXuw/hqdefault.jpg">
          </div>
          <div class="description">
            <small>By <span class="channel-title">Disney Movie Trailers</span> on <time>2017-01-31T02:44:39.000Z</time></small>
            <p>The final trailer for Beauty and the Beast is here On March 17, rediscover a tale as old as time. Get your tickets now at BeOurGuest.com -- Disney's “Beauty ...</p>
          </div>
          </a>
        </li>
		*/
		var buildItem = function(item) {
			var videoId = item.id.videoId;
			var thumbnail = item.snippet.thumbnails.high.url;
			var title = item.snippet.title;
			var description = item.snippet.description;
			
			console.log('=============빵긋===============');
			console.log(videoId, thumbnail, title, description);
			
			var newItem = `
			<li class="item">
				<a href="http://www.youtube.com/watch?v=${videoId}" target="_blank">
				<h3>${title}</h3>
				<div class="image-wrapper">
					<img src=${thumbnail}>
				</div>
				<div class="description">
					${description}
				</div>
				</a>
			</li>
		`;
		return newItem;
		}
});










