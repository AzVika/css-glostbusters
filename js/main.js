$(document).ready(function () {
	const nMenuBtn = $('.m-menu-btn');
	const nMenu = $('.m-menu');
	const searchBtn = $('.search-btn');
	const searchInput = $('.search-input');
	const tab = $('.tab');

	function toggleMenu () {
		nMenu.toggleClass('active');
		nMenuBtn.toggleClass('active');
		$('body').toggleClass('no-scroll');
	}

	nMenuBtn.on('click', toggleMenu);
	searchBtn.on('click', function () {
		toggleMenu ();
		searchInput.focus();
	});

	tab.on('click', function () {
		tab.removeClass('active');
		$(this).toggleClass('active');

		let activeTabContent = $(this).attr("data-target");
		$(".tabs-content").removeClass('visible');
		$(activeTabContent).toggleClass('visible');
	});


	var mySwiper = new Swiper('.swiper-container', {
	    spaceBetween: 25,
	    loop: true,
	    // slidesPerView: 4,
	    autoplay: {
		  delay: 5000,
		},
	    breakpoints: {
	    	992: {
	    		slidesPerView: 4,
	    	},
	    	768: {
	    		slidesPerView: 2,
	    	},
	    	576: {
	    		slidesPerView: 1,
	    		navigation: {
	    			nextEl: '.btn-next'
	    		}
	    	}
	    }
	});
});