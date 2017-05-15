function scrollDown() {
	$('html, body').animate({
		scrollTop: $("#cont").offset().top
	}, 750);
	setTimeout(
		function () {
			$('#mat').hide();
			$('html, body').animate({
				scrollTop: $("#cont").offset().top
			}, 0);
		}, 750
	);
}

$(function () {
	var hasBeenTriggered = false;
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 100 && !hasBeenTriggered) {
			scrollDown();
			hasBeenTriggered = true;
		}
	});
	$('#btn-down,#nobtn').click(function () {
		scrollDown();
		hasBeenTriggered = true;
	});
	$('#sub').click(function () {
		if ($("#email-text").val().length == 0) {
			alert("Please input your email id");
		} else {
			alert("Thank You For being a valuable customer");
			scrollDown();
			hasBeenTriggered = true;
		}
	});
});