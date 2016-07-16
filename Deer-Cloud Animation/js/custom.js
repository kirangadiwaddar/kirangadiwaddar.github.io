// Custom js

$(document).ready(function(){

	$('.button-night').click(function(){
		$('body').removeClass('day-view')
		$('body').addClass('night-view');
	});

	$('.button-day').click(function(){
		$('body').removeClass('night-view');
		$('body').addClass('day-view');
	});

});