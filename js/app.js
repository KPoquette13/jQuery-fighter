$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-action').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-action').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},		//value, desired end value
			500, 					//time taken
			function(){				//callback for after finished
				$(this).hide();
				$(this).css('left', '580px');
			}
		);
	})
	.mouseup(function(){
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(e){
		if( e.keyCode == 88){
			$('.ryu-action').hide();
			$('.ryu-posing').show();
		}
	}).keyup(function(e){
		if(e.keyCode == 88){
			$('.ryu-posing').hide();
			$('.ryu-still').show();
		}
	});
	
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
