$(document).ready(function() { 
		jQuery(function ($) {
		$("#phone").mask("+7(999) 999 99-99");
	})

	$(document).ready(function () {
		$(".closeBtn").click(function () {
			$(".advertising").css("display", "none");
			$(".closeBtn").css("display", "none");
			$(".attention").css("display", "block");
		})
	})

	$(document).ready(function () {
		$("#toggle_attention").click(function () {
			$(".advertising").css("display", "none");
		})
	})
});