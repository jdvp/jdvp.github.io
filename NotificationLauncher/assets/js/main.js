/*
	Fractal by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500
			});


	// Banner.
		(function() {

			// Settings.
				var settings = {

					// Delay.
						delay: 4000

				};

			// Vars.
				var $banner = document.querySelector('#banner'),
					$images = document.querySelectorAll('#banner li'),
					pos = 0, lastPos = 0;

			// Main loop.
				$images[pos].classList.add('visible');
				$images[pos].classList.add('top');

				// Bail if we only have a single BG.
					if ($images.length == 1)
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $images.length)
							pos = 0;

					// Swap top images.
						$images[lastPos].classList.remove('top');
						$images[pos].classList.add('visible');
						$images[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$images[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

})(jQuery);