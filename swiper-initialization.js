// In your swiper-initialization.js file
var swiper = new Swiper('.swiper', {
	// loop: true,
	slidesPerView: 1,
	autoplay: {
		delay: 3000,
	},
	grid: {
		rows: 3,
		fill: 'row',
	},
	spaceBetween: 25, // Add space between slides
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// Include additional options and breakpoints as needed
	breakpoints: {
		280: {
			slidesPerView: 2,
			spaceBetween: 20,
			grid: {
				rows: 3,
				fill: 'row',
			},
		},
		350: {
			slidesPerView: 3,
			spaceBetween: 20,
			grid: {
				rows: 3,
				fill: 'row',
			},
		},
		650: {
			slidesPerView: 4,
			spaceBetween: 40,
			grid: {
				rows: 3,
				fill: 'row',
			},
		},
		1200: {
			slidesPerView: 5,
			spaceBetween: 50,
			grid: {
				rows: 3,
				fill: 'row',
			},
		},
	},
})
