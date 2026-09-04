/***************************************************
==================== JS INDEX ======================
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);


	// PreLoader Js//
	const content = document.querySelector("body");
	const countText = document.querySelector(".loader__count .count__text");
	const countBdr = document.querySelector(".loader__wrapper > .count__bdr");

	function startLoader() {
		let t = 0;
		(function updateCount() {
			if (t < 100) {
				let increment = Math.floor(Math.random() * 10) + 1;
				t = Math.min(t + increment, 100);
				countText.textContent = t;
				countBdr.style.width = t + "%";
				let delay = Math.floor(Math.random() * 120) + 25;
				setTimeout(updateCount, delay);
			} else {
				hideLoader();
			}
		})();
	}

	function hideLoader() {
		gsap.to(".loader__count", {
			duration: 0.8,
			ease: "power2.in",
			y: "100%",
			delay: 0.5
		});

		gsap.to(".loader__wrapper", {
			duration: 0.8,
			ease: "power4.in",
			y: "-100%",
			delay: 0.7
		});

		setTimeout(() => {
			document.getElementById("loader").classList.add("loaded");
		}, 1600);
	}

	if ($('.count__text').length) {
		imagesLoaded(content, { background: true }, () => {
			startLoader();
		});
	}


	// Common Js//
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-height]").each(function () {
		$(this).css("height", $(this).attr("data-height"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	//  Nice Select Js//
	$('.px-select ').niceSelect();

	// Masonary Js//
	$('.grid').imagesLoaded(function () {
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-item',
			}
		});

		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	// magnificPopup img view //
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// magnificPopup video view //
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	// Counter Js //
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	// menu-last js
	$(".px-header-menu nav > ul > li").slice(-1).addClass("tp-menu-last");

	// mobile menu Js//
	let tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	let tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.submenu, .mega-menu').length != 0) {
		$(tpSideMenu).find('.submenu, .mega-menu').parent().append
		('<button class="tp-menu-close"><i class="fa-solid fa-plus"></i></button>');
	}
	let sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a, .tp-offcanvas-menu nav > ul li.has-dropdown > ul > li.menu-item-has-children > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$(this).siblings('.submenu, .mega-menu').slideToggle();
	});


	// Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			let target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 60
				}, 1500);
			}
		});
	}
	smoothSctoll();

	function back_to_top() {
	var btn = $('#back_to_top');
	var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	// ==========================
	// Open Handlers
	// ==========================
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-area, .tp-offcanvas-2-area, .body-overlay").addClass("opened");
	});

	$(".tp-search-open-btn").on("click", function () {
		$(".tp-search-area, .body-overlay").addClass("opened");
	});

	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});

	// ==========================
	// Close Handlers
	// ==========================
	$(".tp-offcanvas-close-btn, .tp-offcanvas-2-close-btn, .body-overlay").on("click", function () {
		$(".tp-offcanvas-area, .tp-offcanvas-2-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	// scroll wrapper //
	let tl = gsap.timeline();
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
	if ($('#smooth-wrapper').length && $('#smooth-content').length) {
		ScrollSmoother.create({
			smooth: 1.35,
			effects: true,
			smoothTouch: 0.15,
			ignoreMobileResize: true,
		});
	}

	////fade-class-active
	if ($(".px-fade-anim").length > 0) {
		gsap.utils.toArray(".px-fade-anim").forEach((item) => {
			let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
				tp_duration_value = item.getAttribute("data-duration") || 0.75,
				tp_fade_direction = item.getAttribute("data-fade-from") || "bottom",
				tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
				tp_delay_value = item.getAttribute("data-delay") || 0.15,
				tp_ease_value = item.getAttribute("data-ease") || "power2.out",
				tp_anim_setting = {
					opacity: 0,
					ease: tp_ease_value,
					duration: tp_duration_value,
					delay: tp_delay_value,
					x: (tp_fade_direction == "left" ? -tp_fade_offset : (tp_fade_direction == "right" ? tp_fade_offset : 0)),
					y: (tp_fade_direction == "top" ? -tp_fade_offset : (tp_fade_direction == "bottom" ? tp_fade_offset : 0)),
				};
			if (tp_onscroll_value == 1) {
				tp_anim_setting.scrollTrigger = {
					trigger: item,
					start: 'top 85%',
				};
			}
			gsap.from(item, tp_anim_setting);
		});
	}


	// hover reveal for image
	const hoverItem = document.querySelectorAll(".hover-reveal-item");

	function moveImage(e, hoverItem) {
		const item = hoverItem.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverItem.children[1]) {
			hoverItem.children[1].style.transform = `translate(${x}px, ${y}px)`;
		}
	}

	hoverItem.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveImage(e, item), 100);
		});
	});



	$('.px-accordion .px-accordion-item').on("click", function () {
		$(this).addClass('active').siblings().removeClass('active');
	});

	//  portfolio panel //
	gsap.matchMedia().add("(min-width: 1199px)", () => {
		let portfolio_panel = document.querySelectorAll('.px-portfolio-panel')
		portfolio_panel.forEach((section, index) => {
			gsap.set(portfolio_panel, {
				scale: 1,
			});
			tl.to(section, {
				scale: .8,
				scrollTrigger: {
					trigger: section,
					pin: true,
					scrub: 1,
					start: 'top 30px',
					end: "bottom 100%",
					endTrigger: '.px-portfolio-wrap',
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});

	$('.accordion-items').on("click", function () {
		$(this).toggleClass('faq-active').siblings().removeClass('faq-active');
	});

	//  portfolio panel //
	$('.px-service-2-item').hover(function () {
		let parentElement = $(this).closest('.px-service-2-element');
		parentElement.siblings('.px-service-2-element').removeClass('active');
		parentElement.addClass('active');
	});


	$('.px-hero-2-thumb').on('mouseenter', function () {
		let parentElement = $(this).closest('.px-hero-2-item');
		$('.px-hero-2-item').removeClass('active');
		parentElement.addClass('active');
	});

	gsap.utils.toArray(".portfolio-thumb").forEach((section, i) => {
		let img = section.querySelector('img');
		gsap.set(section, {
			scale: 0.2,
			rotateZ: 35,
			transformOrigin: "center center"
		});
		gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "top 80%",
				end: "top 20%",
				scrub: true,
				markers: false
			}
		})
			.to(section, {
				scale: 1,
				rotateZ: 0,
				ease: "power2.out",
				duration: 2
			})
			.to(img, {
				scale: 1,
				rotateZ: 0,
				ease: "power2.out",
				duration: 2
			}, "<");
	});

	//  portfolio panel //
	gsap.matchMedia().add("(min-width: 1199px)", () => {
		gsap.utils.toArray(['.hero-skew-anim', '.service-skew-anim']).forEach(section => {
			gsap.set(section, {
				willChange: "transform",
				opacity: 1,
				transform: "none",
				ease: "none",
			});
			gsap.to(section, {
				y: 180,
				scale: 0.95,
				rotateX: -50,
				transformOrigin: "center top",
				ease: "none",
				scrollTrigger: {
					trigger: section,
					start: "top top",
					end: "bottom top",
					scrub: true,
				}
			});
		});
	});

	// hover image-wrapper
	gsap.matchMedia().add("(min-width: 1199px)", () => {
		gsap.utils.toArray(['.about-skew-anim']).forEach(section => {
			gsap.set(section, {
				willChange: "transform",
				y: -180,
				scale: 0.95,
				opacity: 0,
				ease: "none",
			});
			gsap.to(section, {
				y: 0,
				scale: 1,
				opacity: 1,
				ease: "none",
				scrollTrigger: {
					trigger: section,
					start: "top center",
					end: "bottom 100%",
					transformOrigin: "center top",
					scrub: 1.2,
				}
			});
		});
		gsap.utils.toArray(['.brand-skew-anim']).forEach(section => {
			gsap.set(section, {
				willChange: "transform",
				y: -180,
				scale: 0.95,
				opacity: 0,
			});
			gsap.to(section, {
				y: 0,
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: section,
					start: "top center",
					end: "bottom 100%",
					transformOrigin: "center top",
					scrub: 3,
				}
			});
		});
	});

	//  hover image-wrapper
	const imageWrapper = document.querySelector(".px-project-6-img-wrap");
	const imageSlider = document.querySelector(".px-project-6-img-slider");
	const projects = gsap.utils.toArray(".px-project-6-item");

	if (imageWrapper && imageSlider && projects.length) {
		const projectCount = imageSlider.children.length;
		const movePercent = 100 / projectCount;

		// Hover events for project items
		projects.forEach((el) => {
			el.addEventListener("mouseenter", () => {
				gsap.to(imageWrapper, { opacity: 1, duration: 0.5, ease: "power2.out" });
			});

			el.addEventListener("mouseleave", () => {
				gsap.to(imageWrapper, { opacity: 0, duration: 0.5, ease: "power2.in" });
			});

			el.addEventListener("mousemove", () => {
				const indexNumber = el.dataset.indexNumber;
				gsap.to(imageSlider, {
					y: -(movePercent * indexNumber) + "%",
					duration: 0.6,
					ease: "power2.out",
				});
			});
		});


		// Cursor-follow + ghost trail
		const wrap = document.querySelector(".px-project-6-wrap");
		if (wrap) {
			wrap.addEventListener("mousemove", (e) => {
				const rect = wrap.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				// Clone for ghost effect
				const clone = imageWrapper.cloneNode(true);
				clone.style.position = "absolute";
				clone.style.pointerEvents = "none";
				clone.style.opacity = "0.4";
				clone.style.top = 0;
				clone.style.left = 0;
				clone.style.transform = `translate(-50%, -50%)`;
				wrap.appendChild(clone);

				gsap.set(clone, { x, y, scale: 0.9 });
				gsap.to(clone, {
					opacity: 0,
					scale: 1.2,
					duration: 0.6,
					ease: "power2.out",
					onComplete: () => clone.remove()
				});
				gsap.to(imageWrapper, {
					x,
					y,
					duration: 0.3,
					ease: "power3.out"
				});
			});
		}
	}

	// tp-project-6-inner
	$('.px-project-6-inner .px-project-6-item').on("mouseenter", function () {
		$(this).addClass('is-active').siblings().removeClass('is-active');
	}).on("mouseleave", function () {
		$(this).siblings().addClass('is-active');
	});


	imagesLoaded(".ripple-image img", { background: true }, () => {

		$(".ripple-image").each(function () {
			var $container = $(this);
			var $img = $container.find("img").first();
			var imgURL = $img.attr("src");

			$container.css({
				"background-image": "url(" + imgURL + ")",
				"background-size": "cover",
				"background-position": "center center"
			});

			$container.ripples({
				resolution: 400,
				perturbance: 0.03,
				imageUrl: imgURL
			});

			$img.hide();
		});

	});

	// tp-text-effect //
	class TextEffect {
		constructor(selector = ".text-effect") {
			if (typeof Splitting !== "undefined") Splitting();
			this.elements = document.querySelectorAll(selector);
			this.init();
		}

		getScrollTrigger(el, defaults) {
			return {
				trigger: el,
				start: el.dataset.start || defaults.start,
				end: el.dataset.end || defaults.end,
				scrub: el.dataset.scrub === "true" ? true : defaults.scrub,
				pin: el.dataset.pin === "true" ? true : defaults.pin
			};
		}

		applyEffect28(el) {
			const result = Splitting({ target: el, by: "chars" })[0];
			if (!result?.chars) return;

			const chars = result.chars;
			const half = Math.ceil(chars.length / 2);
			const tp = parseFloat(el.dataset.onScroll) || 1;

			chars.forEach((char, i) => {
				const pos = i < half ? i : half - Math.abs(Math.floor(chars.length / 2) - i) - 1;
				gsap.fromTo(char,
					{
						transformOrigin: "50% 100%", scale: 0.5,
						y: gsap.utils.mapRange(0, half, 0, 60, pos) * tp,
						rotation: (i < half ? gsap.utils.mapRange(0, half, -4, 0, pos)
							: gsap.utils.mapRange(0, half, 0, 4, pos)) * tp,
						filter: "blur(12px) opacity(0)"
					},
					{
						ease: "power2.inOut", y: 0, rotation: 0, scale: 1, filter: "blur(0px) opacity(1)",
						scrollTrigger: this.getScrollTrigger(el, { start: "top bottom+=40%", end: "top top+=15%", scrub: true, pin: false }),
						stagger: { amount: 0.15, from: "center" }
					});
			});
		}

		init() {
			this.elements.forEach(el => this.applyEffect28(el));
		}
	}
	// Auto init
	document.readyState === "loading" ?
		document.addEventListener("DOMContentLoaded", () => new TextEffect()) :
		new TextEffect();

	// Expose globally
	window.TextEffect = TextEffect;

	// handleDataSpeedAttr
	function handleDataSpeedAttr() {
		const elements = document.querySelectorAll("[data-speed], [data-speed-original]");
		elements.forEach(el => {
			if (!el.dataset.speedOriginal && el.dataset.speed) {
				el.dataset.speedOriginal = el.dataset.speed;
			}
			if (window.innerWidth < 1200) {
				// attribute remove
				el.removeAttribute("data-speed");
			} else {
				// original value restore
				if (el.dataset.speedOriginal) {
					el.setAttribute("data-speed", el.dataset.speedOriginal);
				}
			}
		});
	}
	handleDataSpeedAttr();
	window.addEventListener("resize", handleDataSpeedAttr);


	let mm = gsap.matchMedia();

	mm.add("(min-width: 1199px)", () => {
	// Common ScrollTrigger options
	const baseOptions = {
		scrub: 1,
		start: 'top 0%',
		end: 'bottom 80%',
		endTrigger: '.px-step-area',
		pinSpacing: false,
		markers: false,
	};

	// For px-step-item
	document.querySelectorAll('.px-step-item').forEach((item, i) => {
		gsap.to(item, {
		scrollTrigger: {
			trigger: item,
			pin: item,
			...baseOptions,
		}
		});
	});

	// For px-step-card with left/right rotation
	document.querySelectorAll('.px-step-card').forEach((card, i) => {
		let rotateValue = i % 2 === 0 ? -5 : 5;

		gsap.to(card, {
		rotate: rotateValue,
		scrollTrigger: {
			trigger: card,
			pin: card,
			...baseOptions,
			start: 'top 20%',
			end: 'bottom 80%'
		}
		});
	});
	});

	const $main_wrap = $('.px-offcanvas-2-area');
	const $hamburger = $('#hamburger-open-btn');
		$hamburger.on('click', function () {
			if ($main_wrap.hasClass('menu-open')) {
				$main_wrap.removeClass('menu-open-temp');
				$main_wrap.addClass('menu-open-temp');
				$main_wrap.removeClass('menu-open');
				setTimeout(() => {
				$main_wrap.removeClass('menu-open-temp');
				}, 2000);
			} else {
				$main_wrap.addClass('menu-open');
			}
		$hamburger.toggleClass('active');
	});



	if ($('.header-fixed').length > 0) {
		gsap.timeline({
			scrollTrigger: {
				trigger: ".header-fixed",
				start: "top top",
				end: "bottom top",
				scrub: 1,
				onUpdate: (self) => {
				const img = document.querySelector(".px-header-logo-anim");
				const header = document.querySelector(".header-fixed");

				const currentWidth = 100 - (89 * self.progress); 

				if (currentWidth <= 11.5) {
					header.classList.add("sticky-bg");
				} else {
					header.classList.remove("sticky-bg");
				}
				}
			}
		})
		.fromTo(".px-header-logo-anim",
			{ width: "100%" }, 
			{ width: "95px", ease: "power2.out" }
		);
	}


	gsap.matchMedia().add("(min-width: 992px)", () => {
		let tl_ser = gsap.timeline();
		let panels = document.querySelectorAll('.tp-inner-service-area')
		panels.forEach((section, index) => {
			tl_ser.to(section, {
				scrollTrigger: {
					trigger: '.tp-inner-service-area',
					pin: '.inner-service-1-left',
					scrub: 1,
					start: 'top 80px',
					end: "bottom 100%",
					endTrigger: '.tp-inner-service-area',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});


	if (document.querySelector(".tp-split")) {
	gsap.set(".tp-split", { opacity: 1 });
	document.fonts.ready.then(() => {
	let containers = gsap.utils.toArray(".tp-split-wrap");

	containers.forEach((container) => {
		let text = container.querySelector(".tp-split");
		let split = SplitText.create(text, {
		type: "words,lines",
		mask: "lines",
		linesClass: "line",
		autoSplit: true,
		});
		gsap.from(split.lines, {
		yPercent: 120,
		opacity: 0,
		stagger: 0.1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: container,
			start: "clamp(top center)",
			end: "clamp(bottom center)",
			scrub: true,
			markers: true,
		},
		});
	});
	});
	}



	// update-home-js-here

	// Portfolio Animation

	// Get Device width
	let device_width = window.innerWidth;

	if (device_width > 767) {
		const portfolioArea = document.querySelector(".bf-portfolio-sticky-area");
		const portfolioText = document.querySelector(".bf-portfolio-text-sticky");

		if (portfolioArea && portfolioText) {
			let portfolioline = gsap.timeline({
				scrollTrigger: {
					trigger: portfolioArea,
					start: "top center-=200",
					pin: portfolioText,
					end: "bottom bottom+=10",
					markers: false,
					pinSpacing: false,
					scrub: 1,
				}
			});

			portfolioline.to(portfolioText, { scale: 0.6, duration: 1 });
			portfolioline.to(portfolioText, { scale: 0.6, duration: 1 });
			portfolioline.to(portfolioText, { scale: 0.6, duration: 1 }, "+=2");

			gsap.to(portfolioText, {
			scrollTrigger: {
				trigger: portfolioArea,
				start: "top center-=100",
				end: "bottom bottom+=10",
				scrub: 1
			},
			});
		}
	}

	
	// tp-vimeo-video-perspective
	
	document.addEventListener("DOMContentLoaded", function() {
		const $projects = $(".project-item.project-style-3.hover-play");

		if ($projects.length === 0) return;

		$projects.css({
			perspective: "1500px",
			"transform-style": "preserve-3d",
			overflow: "visible",
		});

		function updateTransform() {
			if (window.innerWidth < 1024) {
			$projects.each(function () {
				const $inner = $(this).find(".project-item-inner");
				$inner.css({ transform: "none", transition: "none" });
				const $img = $inner.find(".bf-portfolio-post-thumbnail img");
				$img.css({ transform: "none", transition: "none" });
			});
			} else {
			const windowHeight = window.innerHeight;
			$projects.each(function () {
				const $project = $(this);
				const $inner = $project.find(".project-item-inner");

				if ($inner.length === 0) return;

				const rect = this.getBoundingClientRect();
				let percent = (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);
				percent = Math.max(-1, Math.min(percent, 1));

				const rotateX = 30 * -percent + 0.756;
				const scale = (0.996976 - 0.105 * Math.abs(percent)).toFixed(6);

				$inner.css({
				transform: `rotateX(${rotateX.toFixed(3)}deg) scale3d(${scale}, ${scale}, 1)`,
				transition:
					"transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
				"transform-style": "preserve-3d",
				"will-change": "transform, opacity",
				});

				const $img = $inner.find(".bf-portfolio-post-thumbnail img");
				if ($img.length) {
				const translateY = 20 * percent;
				$img.css({
					transform: `translateY(${translateY.toFixed(2)}px)`,
					transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
					"will-change": "transform",
				});
				}
			});
			}
		}

		let ticking = false;

		updateTransform();

		$(window).on("scroll resize", function () {
			if (!ticking) {
			window.requestAnimationFrame(() => {
				updateTransform();
				ticking = false;
			});
			ticking = true;
			}
		});
	});


	// portfolio animation start

	if ($('.bf-item-anime').length > 0) {
		mm.add("(min-width: 1200px)", () => {
			gsap.set('.bf-item-anime.marque', {
				x: '-23%'
			});

			gsap.timeline({
				scrollTrigger: {
					trigger: '.bf-hero-anime-area',
					start: '-100 10%',
					end: 'bottom 20%',
					scrub: true,
					invalidateOnRefresh: true
				}
			})
			.to('.bf-item-anime.marque', {
				x: '100%'
			});
		});
	}

	if ($('.bf-item-anime-md').length > 0) {
		mm.add("(min-width: 1200px)", () => {
			gsap.set('.bf-item-anime-md.marque', {
				x: '40%'
			});

			gsap.timeline({
				scrollTrigger: {
					trigger: '.bf-hero-anime-area',
					start: '-100 20%',
					end: 'bottom 20%',
					scrub: true,
					invalidateOnRefresh: true
				}
			})
			.to('.bf-item-anime-md.marque', {
				x: '-100%'
			});
		});
	}

	if ($('.bf-item-anime-inner').length > 0) {
		mm.add("(min-width: 1200px)", () => {
			gsap.set('.bf-item-anime-inner.marque', {
				x: '-8%'
			});

			gsap.timeline({
				scrollTrigger: {
					trigger: '.bf-hero-anime-area',
					start: '0 10%',
					end: 'bottom 20%',
					scrub: true,
					invalidateOnRefresh: true
				}
			})
			.to('.bf-item-anime-inner.marque', {
				x: '50%'
			});
		});
	}

	// button hover animation
	$('.bf-btn-rounded').on('mouseenter', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;

		$(this).find('.bf-btn-circle-dot').css({
			top: y,
			left: x
		});
	});

  	// Button Move Animation
	const all_btn = gsap.utils.toArray(".btn_wrapper, #btn_wrapper");
	const all_btn_circle = gsap.utils.toArray(".btn-item");

	if (all_btn.length && all_btn_circle.length) {
		all_btn.forEach((btn, i) => {
			const circle = all_btn_circle[i];

			// Mouse move = parallax effect
			$(btn).on("mousemove", function (e) {
			const $this = $(this);
			const relX = e.pageX - $this.offset().left;
			const relY = e.pageY - $this.offset().top;
				gsap.to(circle, {
					duration: 0.5,
					x: ((relX - $this.width() / 2) / $this.width()) * 80,
					y: ((relY - $this.height() / 2) / $this.height()) * 80,
					ease: "power2.out",
				});
			});

			// Mouse leave = reset effect
			$(btn).on("mouseleave", function () {
				gsap.to(circle, {
					duration: 0.5,
					x: 0,
					y: 0,
					ease: "power2.out",
				});
			});
		});
	}

  	// tp-text-right-scroll
	gsap.matchMedia().add("(min-width: 991px)", () => {
		document.querySelectorAll(".title-box").forEach((box) => {
			const rightElements = box.querySelectorAll('.tp-text-right-scroll');
			const tl = gsap.timeline({
				scrollTrigger: {
				trigger: box,
				start: "top 100%",
				end: "bottom top",
				scrub: true,
				markers: false,
				}
			});
			if (rightElements.length) {
				tl.fromTo(rightElements, { xPercent: 50 }, { xPercent: -20, ease: "power1.out" }, 0);
			}
		});
	});
	  

  	// tp-text-right-scroll

	if (document.querySelector('.bf-portfolio-3-item')) {
		const pw = gsap.matchMedia();
		pw.add("(min-width: 991px)", () => {
			gsap.set('.bf-portfolio-3-thumb.item-1', { x: 400, rotate: 10,});
			gsap.set('.bf-portfolio-3-thumb.item-2', { x: -400, rotate: -10, });
			document.querySelectorAll('.bf-portfolio-3-item').forEach(item => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: 'top 100%',
						end: 'bottom center',
						scrub: 1,
					}
				});
				tl.to(item.querySelector('.bf-portfolio-3-thumb.item-1'), { x: 0, rotate: 0 })
				.to(item.querySelector('.bf-portfolio-3-thumb.item-2'), { x: 0, rotate: 0 }, 0);
			});
		});
	}


  	// tp-instagram-area

	if ($('.bf-instagram-area').length > 0) {
		mm.add("(min-width: 1200px)", () => {
			let tp_instagram_3 = gsap.timeline({
				scrollTrigger: {
					trigger: ".bf-instagram-area",
					start: "top 30%",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 100%",
					duration: 3,
					
				}
			});
			tp_instagram_3.to(".bf-instagram-thumb img", {
				width: "580px",
				height: "580px",
				borderRadius: "10px",
			});
	
		});
	}

	// tp-port-slider-title

	$('.tp-port-slider-title').on("mouseenter", function () {
		$('#tp-port-slider-wrap').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});

	// tp-porfolio-10-title-wrap
	$('.tp-porfolio-10-title-wrap > ul > li').on('mouseenter', function(){
		$(this).siblings().removeClass('active');
		const rel = $(this).attr('rel');
		$(this).addClass('active');
		$('#tp-porfolio-10-bg-box').removeClass().addClass(rel);
	})

	// ttp-port-slider-title
	$('.tp-port-slider-title').on("mouseenter", function () {
		$('#tp-port-slider-wrap').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});


	// addClass removeClass
	$('.design-award-wrap .design-award-item').on('mouseenter', function(){
		$(this).addClass('active').parent().siblings().find('.design-award-item').removeClass('active')
	}).on('mouseleave', function(){
		$(this).addClass('active').parent().siblings().find('.design-award-item').addClass('active')
	});

	// award anim
	const aw = gsap.matchMedia();
	aw.add("(min-width: 991px)", () => {
		const awardItems = document.querySelectorAll('.design-award-item');
		awardItems.forEach(function(div){
			div.addEventListener('mouseenter', function() {
				gsap.to(div, {
					width: '100%',
					duration: 2,
					ease: 'expo.out'
				});
			});
			div.addEventListener('mouseleave', function() {
				gsap.to(div, {
					width: '70%',
					duration: 2,
					ease: 'expo.out'
				});
			});
		})
	});


	// reveal-text
	const splitTypes = document.querySelectorAll(".reveal-text");

	splitTypes.forEach((char) => {
		const text = new SplitType(char, { types: 'words, chars' });

		gsap.fromTo(text.chars,
			{ className: "char" },
			{
				className: "char revealed",
				scrollTrigger: {
					trigger: char,
					start: 'top 80%',
					end: 'top 20%',
					scrub: true,
					markers: false
				},
				stagger: 0.1
			}
		);
	});

})(jQuery);
