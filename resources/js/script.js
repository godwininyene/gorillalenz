
$(document).ready(function(){
	let responsive ={
		320:{
			items:1
		},
		900:{
			items: 2
		},
		1024:{
			items: 3
		}
	};

	/* For Variables */
	$mainNav = $("#main-nav");
	$navIcon = $(".js-navicon");
	$toggleCollapse = $(".toggle-collapse");

	/* For the Sticky Navigation */
	$('.js-section-about').waypoint(function(direction){
		if(direction == 'down'){
			$('.header').addClass('no-curve');
			$('#main-nav').addClass('sticky');
		}else{
			$('#main-nav').removeClass('sticky');
			$('.header').removeClass('no-curve');
		}
	}, {
		offset: '60px;'
	});


	/** Click event on navigation icon for mobile menu */
	$navIcon.click(function(){
		// Toggle navigation
		$mainNav.toggleClass("collapse");

		// $('.nav__menu').toggleClass("collapse-mobile-menu");

		// Toggle navigation icon
		if($navIcon.hasClass('fa-navicon')){
			$navIcon.removeClass('fa-navicon');
			$navIcon.addClass('fa-close');
		}else{
			$navIcon.addClass('fa-navicon');
			$navIcon.removeClass('fa-close');
		}
	});


	/* Scroll To booking section*/
	$('.booking-btn').click(function(){
		$('html, body').animate({scrollTop: $('.section-booking').offset().top}, 3000);
	});

	

	// Owl-carousel for popular books
	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplayTimeout:3000,
		dots: false,
		nav:true,
		navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
		responsive:responsive
	});

	// Animation on scroll Instances
	AOS.init();


});
