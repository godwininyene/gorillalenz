
function testing(event){
	// let target = event.target.hash

	let link = event.target.closest('.side-nav__link');
	let target = link.hash;

	if(target){
		event.preventDefault();
		let targetPage =  document.querySelector(target);
		targetPage.classList.toggle('toggle-menu');
	}
	
}


// document.querySelector('.side-nav__list').addEventListener('click', function(e){
// 	testing(e);
// });



$(document).ready(function(){

	// Variables 
	$navIcon = $(".js-navicon");

	$('.side-nav__link').click(function(){
		let target = this.hash;

		if(target){
			event.preventDefault();
			let dropdownMenu =  $(target)
			dropdownMenu.slideToggle(500);
		}
	});


	/** Click event on navigation icon for mobile menu */
	$navIcon.click(function(){
		// Toggle navigation
		$('.side-nav').slideToggle(1000);

		// Toggle navigation icon
		if($navIcon.hasClass('fa-navicon')){
			$navIcon.removeClass('fa-navicon');
			$navIcon.addClass('fa-close');
		}else{
			$navIcon.addClass('fa-navicon');
			$navIcon.removeClass('fa-close');
		}
	});
	
});