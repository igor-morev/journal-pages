	/*var parOver = $(".par-over");
	var parUnder = $(".par-under");
	var overlay = parUnder.find(".overlay");
	var opacityBg;
	$(window).on("scroll", function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= parOver.height() + parOver.offset().top) {
			parUnder.css({
				position: "relative"
			});
			console.log("!");
		} else {
			parUnder.css({
				position: "fixed",
				top: 0
			});
			parOver.css({
				position: "relative"
			});

		}

		if ( scroll >= parOver.offset().top && scroll >= parOver.height() + parOver.offset().top - $(window).height() && scroll <= parOver.height() + parOver.offset().top) {
			console.log("!!");
			parOver.css({
				position: "relative"
			});
			parUnder.css({
				position: "fixed",
				top: 0
			});
			parUnder.next().css({
				marginTop: parUnder.height()
			});

		} else {
			parUnder.css({
				position: "relative",
				top: 0
			});
			parUnder.next().css({
				marginTop: 0
			});
		}

		if (scroll >= parOver.height() - $(window).height()) {
			opacityBg = 1 - (scroll / 1000);
		} else {
			opacityBg = 1;
		}

		overlay.css("opacity", opacityBg);
	});*/



	   /*if (scrolled > 0) {
    		pages[0].style.top = -scrolled + "px";
    	}*/


    	/*if (scrolled > pages[0].scrollHeight) {
    		pages[1].style.top = -scrolled + pages[0].scrollHeight + "px";
    	}

    	if (scrolled > pages[1].scrollHeight + pages[0].scrollHeight) {
    		pages[2].style.top = -scrolled + pages[1].scrollHeight + pages[0].scrollHeight + "px";
    	}*/


    	/*if (scrolled > pages[i].scrollHeight + pages[i-1].scrollHeight) {
    		pages[i+1].style.top = -scrolled + pages[i].scrollHeight + "px";
    	}*/