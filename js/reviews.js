jQuery(document).ready(function (e) {
	$(document).on("click", ".list_reviews .show_support, .store_reviews .show_support", function () {
			$(this).closest('.testimonial__item').toggleClass('active')
			.find('.support-item').slideToggle();
			return false;
		}); 
});