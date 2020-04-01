$(document).ready(function() {
	$('.menu-burger').on('click', function() {
		$(this).toggleClass('open');
		$('.navigation').toggleClass('open');	
	});

	$('.navigation .nav-link').on('click', function() {
		$('.menu-burger').removeClass('open');
		$('.navigation').removeClass('open');	
	});

	$('nav a[href*="#"]').on('click', function() {
		$('html', 'body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		}, 2000);
	});

	$('#up').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 2000);	
	});

	AOS.init({
		easing: 'ease',
		duration: 1800
	});
});