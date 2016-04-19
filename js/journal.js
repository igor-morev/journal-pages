;function Journal(param) {
	if (!arguments) console.log("set params!");

	var winHeight = document.documentElement.clientHeight,
		$wrapper = $(".journal-wrapper"),
		inner = document.querySelector(".journal-inner");

	var pages = document.querySelectorAll(param.class),
		shadow = param.shadow;

	if (shadow) {
		var overlay = document.createElement("div");
		overlay.classList.add("journal-overlay");
		inner.insertBefore(overlay, pages[0])
	}

	var setStructure = function() {
		var height = 0;

		for (var i = 0; i < pages.length; i++) {
			var page = pages[i];

			page.style.zIndex = (pages.length + 1) - i;
			height += page.scrollHeight;
		}

		if (shadow) overlay.style.zIndex = (pages.length + 1);

		$wrapper.height(height);
	}

	setStructure();

	var scrollPages = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop,
		pageHeight = 0,
		opacity;

		for (var i = 0; i < pages.length; i++) {
			var page = pages[i],
				scrolledHeight = pageHeight - scrolled;

			if (scrolled >= pageHeight) {
				page.style.transform = "translateY(" + scrolledHeight + "px)";

				if (shadow) overlay.style.zIndex = (pages.length + 1) - i;
			}

			pageHeight += page.scrollHeight;


			if (shadow) {
				if (scrolled >= pageHeight - winHeight && scrolled <= pageHeight) {
					opacity = 1 - (scrolled - pageHeight + winHeight ) / winHeight * param.sRange;
	    		} 

	    		overlay.style.opacity = opacity;
			}
		}
	}

	var init = function() {
		window.onresize = function() {
			setStructure();
			scrollPages();
		}
		window.onscroll = scrollPages;
	}

	init();
}
