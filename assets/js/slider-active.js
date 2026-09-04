(function ($) {
	"use strict";

	////brand-slider
	let tp_brand_slide = new Swiper(".px-about-brand-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 2000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_text_slide = new Swiper(".px-text-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 40,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 3000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});
	
	////brand-slider
	let tp_brand_3_slide = new Swiper(".px-brand-3-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 3000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_text_6_slide = new Swiper(".px-text-6-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_text_7_slide = new Swiper(".px-text-7-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 20000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_text_slide_2 = new Swiper(".px-text-slider-active-2", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 40,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_gallery_active = new Swiper(".px-gallery-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_footer_3_active = new Swiper(".px-footer-3-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});


	//// Brand slider
	let tp_testimonial_slide = new Swiper(".px-testimonial-active", {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 200,
		autoplay: true,
		pagination: {
			el: ".px-testimonial-dot",
			clickable: true,
		}
	});

	let testimonial_active = new Swiper('.ar-testimonial-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		spaceBetween: 0,
		speed: 1000,
		navigation: {
			prevEl: '.ar-testimonial-prev',
			nextEl: '.ar-testimonial-next',
		},
		pagination: {
			el: '.swiper-pagination-progress',
			type: 'progressbar',
		},
		on: {
			init: function () {
				let swiper = this;
				let fraction = document.querySelector('.swiper-pagination-fraction');
				if (fraction) {
					let totalSlides = swiper.slides.length - swiper.loopedSlides * 2; 
					fraction.innerHTML = `<span class="current">${swiper.realIndex + 1}</span><span class="total">${totalSlides}</span>`;
				}
			},
			slideChange: function () {
				let swiper = this;
				let fraction = document.querySelector('.swiper-pagination-fraction');
				if (fraction) {
					let current = fraction.querySelector('.current');
					if (current) {
						current.textContent = swiper.realIndex + 1;
					}
				}
			}
		}
	});

	//portfolio-slider
	var showcase = new Swiper('.px-pd-2-active', {
		slidesPerView: 3,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 20,
		speed: 1000,
		pagination: {
			el: ".px-pd-2-dot",
			clickable: true,
		},
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	//service-slider-active
	let tp_service_6 = new Swiper ('.px-service-6-active', {
		direction: 'vertical',
		effect: 'slide',
		slidesPerView: 3,
		loop: true,
		autoplay: {
			delay: 1000,
			reverseDirection: false,
			disableOnInteraction: false,
		},
	})

	//hero-slider-active
	var slider = new Swiper ('.px-hero-2-top-active', {
		slidesPerView: 1,
		centeredSlides: true,
		loop: true,
		loopedSlides: 3,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var thumbs = new Swiper ('.gallery-thumbs', {
		slidesPerView: 3,
		spaceBetween: 10,
		centeredSlides: true,
		loop: true,
		slideToClickedSlide: true,
	});
	slider.controller.control = thumbs;
	thumbs.controller.control = slider;


	//portfolio-slider
	var showcase = new Swiper('.px-pd-4-slider-active', {
		slidesPerView: 3,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 30,
		speed: 1000,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	//------postbox-slider-----//
	var postbox_active = new Swiper('.postbox-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 20,
		speed: 1000,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			}
		},
		a11y: false,

		// Navigation arrows
		navigation: {
			prevEl: '.postbox-arrow-prev',
			nextEl: '.postbox-arrow-next',
		},

	});

	if ($("#in-blog-list-search").length > 0) {
	window.addEventListener('click', function (e) {
		if (document.getElementById('in-blog-list-search').contains(e.target)) {
			$(".in-blog-list-search-input").toggleClass("active");
		}
		else {
			$(".in-blog-list-search-input").removeClass("active");
		}
	});
}


	// update-js-here


	// 02. tp-brand-slide-active
	var tp_brand_slider= new Swiper(".tp-text-slide-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		allowTouchMove: false,
		spaceBetween: 80,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});


	// px-fade-gallery-active (edge-to-edge fade in/out image slider, after FAQ)
	if (document.querySelector('.px-fade-gallery-active')) {
		var tp_fade_gallery = new Swiper('.px-fade-gallery-active', {
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			speed: 1500,
			loop: true,
			allowTouchMove: false,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
		});
	}

	// tp-portfolio-mix-slider
	if (document.querySelector('.tp-portfolio-mix-slider')) {
		var tp_portfolio_mix_slider = new Swiper('.tp-portfolio-mix-slider', {
			loop: false,
			modules: [SwiperGL],
			speed: 1200,
			effect: "gl",
			mousewheel: true,
			navigation: {
				nextEl: '.tp-portfolio-mix-button-next',
				prevEl: '.tp-portfolio-mix-button-prev',
			},
			pagination: {
				el: '.tp-portfolio-mix-pagination',
				clickable: true,
			},
		});
	}

})(jQuery);