$(function() {

	$('.flipper').hover(function() {
		/* Muestra mensaje */
		$(this).find('.flipimg').stop().animate({'top':'-50px'}, 200, function(){});
	}, function() {
		/* Oculta Mensaje */
		$(this).find('.flipimg').stop().animate({'top':'0px'}, 200, function(){});
	});

});