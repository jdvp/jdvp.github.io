/*
	Strata by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var BP_MD_OR_LESS = 'xxs xs sm md';
	var BP_LG_OR_MORE = 'lg xl xxl';
	var BP_ENTER = 'enter';

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

		Breakpoints({
		    xs: {
		        min: 0,
		        max: 480
		    },
		    sm: {
		        min: 481,
		        max: 736
		    },
		    md: {
		        min: 737,
		        max: 980,
		    },
		    lg: {
		        min: 981,
		        max: 1280
		    },
		    xl: {
		    	min: 1281,
		    	max: Infinity
		    }
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		Breakpoints.on(BP_MD_OR_LESS, BP_ENTER, function() {
			$footer.insertAfter($main);
            if (!$('#header').css("background-image").includes("webp")) {
                var bgArray = ["bg.webp", "bg2.webp", "bg3.webp", "bg4.webp"];
                var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
                $('#header, #footer').css("background-image", "url('images/overlay.webp'), url('images/" + bg + "')")
            }
		});

		Breakpoints.on(BP_LG_OR_MORE, BP_ENTER, function() {
			$footer.appendTo($header);

            if (!$('#header').css("background-image").includes("webp")) {
                var bgArray = ["bg.webp", "bg2.webp", "bg3.webp", "bg4.webp"];
                var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
                $('#header').css("background-image", "url('images/overlay.webp'), url('images/" + bg + "')")
            }
            $("#footer").css("background-image", "none");
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				Breakpoints.on(BP_MD_OR_LESS, BP_ENTER, function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				Breakpoints.on(BP_LG_OR_MORE, BP_ENTER, function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}
})(jQuery);