const BP_MD_OR_LESS = 'xxs xs sm md';
const BP_LG_OR_MORE = 'lg xl xxl';
const BP_ENTER = 'enter';
const PARALLAX_FACTOR = 20; /* higher is more intense parallax */

function windowScrollToTop() {
	return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
};

function bgImageIsWebp() {
	var headerElement = document.querySelector('#header');
	var view = headerElement.ownerDocument.defaultView;
	return view.getComputedStyle(headerElement, null).backgroundImage.includes("webp");
};

var header = document.querySelector('#header');
var footer = document.querySelector('#footer');
var main = document.querySelector('#main');

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

/* Footer */
Breakpoints.on(BP_MD_OR_LESS, BP_ENTER, function() {
	if (main.parentNode) {
		main.parentNode.insertBefore(footer, main.nextSibling);
	};
	if (!bgImageIsWebp()) {
		var bgArray = ["bg.webp", "bg2.webp", "bg3.webp", "bg4.webp"];
		var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
		header.style.backgroundImage = "url('images/overlay.webp'), url('images/" + bg + "')";
		footer.style.backgroundImage = "url('images/overlay.webp'), url('images/" + bg + "')";
	};
});

Breakpoints.on(BP_LG_OR_MORE, BP_ENTER, function() {
	header.appendChild(footer);
	if (!bgImageIsWebp()) {
		var bgArray = ["bg.webp", "bg2.webp", "bg3.webp", "bg4.webp"];
		var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
		header.style.backgroundImage = "url('images/overlay.webp'), url('images/" + bg + "')";
	};
	footer.style.backgroundImage = "none";
});

/* Header with Parallax Background */
function updateParallaxPosition() {
	header.style.backgroundPosition = 'left ' + (-1 * (parseInt(windowScrollToTop()) / PARALLAX_FACTOR)) + 'px';
};

Breakpoints.on(BP_MD_OR_LESS, BP_ENTER, function() {
	window.removeEventListener('scroll', updateParallaxPosition);
	header.style.backgroundPosition = '';

});

Breakpoints.on(BP_LG_OR_MORE, BP_ENTER, function() {
	header.style.backgroundPosition = 'left 0px';
	window.addEventListener('scroll', updateParallaxPosition);
});
