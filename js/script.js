$('.carusel').slick({
	arrows: true,
	dots: false,
	dotsClass: "my-dots",
	nextArrow: '.slick-next',
	prevArrow: '.slick-prev',
	// draggable: false,
	// swipe: false
});

function Length() {
	var path0 = document.querySelector('#logo0');
	var path1 = document.querySelector('#logo1');
	var path2 = document.querySelector('#logo2');
	var path3 = document.querySelector('#logo3');
	var path4 = document.querySelector('#logo4');
	var path5 = document.querySelector('#logo5');
	var path6 = document.querySelector('#logo6');
	var path7 = document.querySelector('#logo7');
	var path8 = document.querySelector('#logo8');
	var len0 = Math.round(path0.getTotalLength());
	var len1 = Math.round(path1.getTotalLength());
	var len2 = Math.round(path2.getTotalLength());
	var len3 = Math.round(path3.getTotalLength());
	var len4 = Math.round(path4.getTotalLength());
	var len5 = Math.round(path5.getTotalLength());
	var len6 = Math.round(path6.getTotalLength());
	var len7 = Math.round(path7.getTotalLength());
	var len8 = Math.round(path8.getTotalLength());
	alert("0 " + len0 + "1 " + len1 + "2 " + len2 + "3 " + len3 + "4 " + len4 + "5 " + len5
	+ "6 " + len6 + "7 " +len7 + "8" + len8);
};

		$(document).ready(function(){
		$(".et-hero-tabs-container").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
		});
		});
