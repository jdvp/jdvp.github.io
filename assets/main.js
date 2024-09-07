var bgArray = ["bg.webp", "bg2.webp", "bg3.webp", "bg4.webp"];
var bg = bgArray[Math.floor(Math.random() * bgArray.length)];

var imagePreload = document.createElement("link");
imagePreload.rel = "preload";
imagePreload.href = "images/" + bg;
imagePreload.as = "image"
document.head.appendChild(imagePreload);

const BP_MD_OR_LESS = 'xxs xs sm md';
const BP_LG_OR_MORE = 'lg xl xxl';
const BP_ENTER = 'enter';
const PARALLAX_FACTOR = 20; /* higher is more intense parallax */

function windowScrollToTop() {
	return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
};

function footerImageIsWebp() {
	var headerElement = document.querySelector('#footer');
	var view = headerElement.ownerDocument.defaultView;
	return view.getComputedStyle(headerElement, null).backgroundImage.includes("webp");
};

/* Header with Parallax Background */
function updateParallaxPosition() {
	header.style.backgroundPosition = 'left ' + (-1 * (parseInt(windowScrollToTop()) / PARALLAX_FACTOR)) + 'px';
};

/**
* breakpoints-js v1.0.6
* https://github.com/amazingSurge/breakpoints-js
*
* Copyright (c) amazingSurge
* Released under the LGPL-3.0 license
*/
!function(t,n){if("function"==typeof define&&define.amd)define(["exports"],n);else if("undefined"!=typeof exports)n(exports);else{var e={};n(e),t.breakpointsEs=e}}(this,function(t){"use strict";function u(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function e(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}function l(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i={xs:{min:0,max:767},sm:{min:768,max:991},md:{min:992,max:1199},lg:{min:1200,max:1/0}},s=function(t,n){for(var e in t)if(("object"!==(void 0===t?"undefined":o(t))||t.hasOwnProperty(e))&&!1===n(e,t[e]))break},a=function(t){return"function"==typeof t||!1},r=function(t,n){for(var e in n)t[e]=n[e];return t},c=function(){function t(){l(this,t),this.length=0,this.list=[]}return n(t,[{key:"add",value:function(t,n){var e=2<arguments.length&&void 0!==arguments[2]&&arguments[2];this.list.push({fn:t,data:n,one:e}),this.length++}},{key:"remove",value:function(t){for(var n=0;n<this.list.length;n++)this.list[n].fn===t&&(this.list.splice(n,1),this.length--,n--)}},{key:"empty",value:function(){this.list=[],this.length=0}},{key:"call",value:function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;n||(n=this.length-1);var i=this.list[n];a(e)?e.call(this,t,i,n):a(i.fn)&&i.fn.call(t||window,i.data),i.one&&(delete this.list[n],this.length--)}},{key:"fire",value:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;for(var e in this.list)this.list.hasOwnProperty(e)&&this.call(t,e,n)}}]),t}(),f={current:null,callbacks:new c,trigger:function(e){var i=this.current;this.current=e,this.callbacks.fire(e,function(t,n){a(n.fn)&&n.fn.call({current:e,previous:i},n.data)})},one:function(t,n){return this.on(t,n,!0)},on:function(t,n){var e=2<arguments.length&&void 0!==arguments[2]&&arguments[2];void 0===n&&a(t)&&(n=t,t=void 0),a(n)&&this.callbacks.add(n,t,e)},off:function(t){void 0===t&&this.callbacks.empty()}},h=function(){function e(t,n){l(this,e),this.name=t,this.media=n,this.initialize()}return n(e,[{key:"initialize",value:function(){this.callbacks={enter:new c,leave:new c},this.mql=window.matchMedia&&window.matchMedia(this.media)||{matches:!1,media:this.media,addListener:function(){},removeListener:function(){}};var e=this;this.mqlListener=function(t){var n=t.matches?"enter":"leave";e.callbacks[n].fire(e)},this.mql.addListener(this.mqlListener)}},{key:"on",value:function(t,n,e){var i=3<arguments.length&&void 0!==arguments[3]&&arguments[3];if("object"!==(void 0===t?"undefined":o(t)))return void 0===e&&a(n)&&(e=n,n=void 0),a(e)&&void 0!==this.callbacks[t]&&(this.callbacks[t].add(e,n,i),"enter"===t&&this.isMatched()&&this.callbacks[t].call(this)),this;for(var r in t)t.hasOwnProperty(r)&&this.on(r,n,t[r],i);return this}},{key:"one",value:function(t,n,e){return this.on(t,n,e,!0)}},{key:"off",value:function(t,n){var e=void 0;if("object"!==(void 0===t?"undefined":o(t)))return void 0===t?(this.callbacks.enter.empty(),this.callbacks.leave.empty()):t in this.callbacks&&(n?this.callbacks[t].remove(n):this.callbacks[t].empty()),this;for(e in t)t.hasOwnProperty(e)&&this.off(e,t[e]);return this}},{key:"isMatched",value:function(){return this.mql.matches}},{key:"destroy",value:function(){this.off()}}]),e}(),d={min:function(t){return"(min-width: "+t+(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"px")+")"},max:function(t){return"(max-width: "+t+(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"px")+")"},between:function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"px";return"(min-width: "+t+e+") and (max-width: "+n+e+")"},get:function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"px";return 0===t?this.max(n,e):n===1/0?this.min(t,e):this.between(t,n,e)}},v=function(t){function a(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1/0,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"px";l(this,a);var r=d.get(n,e,i),o=u(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t,r));o.min=n,o.max=e,o.unit=i;var s=o;return o.changeListener=function(){s.isMatched()&&f.trigger(s)},o.isMatched()&&(f.current=o),o.mql.addListener(o.changeListener),o}return e(a,h),n(a,[{key:"destroy",value:function(){this.off(),this.mql.removeListener(this.changeListener)}}]),a}(),p=function(t){function n(t){l(this,n);var i=[],r=[];return s(t.split(" "),function(t,n){var e=b.get(n);e&&(i.push(e),r.push(e.media))}),u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t,r.join(",")))}return e(n,h),n}(),m={},y={},g=window.Breakpoints=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];g.define.apply(g,n)};g.defaults=i;var b=g=r(g,{version:"1.0.6",defined:!1,define:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};for(var e in this.defined&&this.destroy(),t||(t=g.defaults),this.options=r(n,{unit:"px"}),t)t.hasOwnProperty(e)&&this.set(e,t[e].min,t[e].max,this.options.unit);this.defined=!0},destroy:function(){s(m,function(t,n){n.destroy()}),m={},f.current=null},is:function(t){var n=this.get(t);return n?n.isMatched():null},all:function(){var n=[];return s(m,function(t){n.push(t)}),n},set:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1/0,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"px",r=this.get(t);return r&&r.destroy(),m[t]=new v(t,n,e,i),m[t]},get:function(t){return m.hasOwnProperty(t)?m[t]:null},getUnion:function(t){return y.hasOwnProperty(t)||(y[t]=new p(t)),y[t]},getMin:function(t){var n=this.get(t);return n?n.min:null},getMax:function(t){var n=this.get(t);return n?n.max:null},current:function(){return f.current},getMedia:function(t){var n=this.get(t);return n?n.media:null},on:function(t,n,e,i){var r=4<arguments.length&&void 0!==arguments[4]&&arguments[4];if("change"===(t=t.trim()))return i=e,e=n,f.on(e,i,r);if(t.includes(" ")){var o=this.getUnion(t);o&&o.on(n,e,i,r)}else{var s=this.get(t);s&&s.on(n,e,i,r)}return this},one:function(t,n,e,i){return this.on(t,n,e,i,!0)},off:function(t,n,e){if("change"===(t=t.trim()))return f.off(n);if(t.includes(" ")){var i=this.getUnion(t);i&&i.off(n,e)}else{var r=this.get(t);r&&r.off(n,e)}return this}});t.default=b});

window.onload = function() {
	var header = document.querySelector('#header');
	var footer = document.querySelector('#footer');
	var main = document.querySelector('#main');
	header.style.backgroundImage = "url('images/overlay.webp'), url('images/" + bg + "')";

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

	Breakpoints.on(BP_MD_OR_LESS, BP_ENTER, function() {
		if (main.parentNode) {
			main.parentNode.insertBefore(footer, main.nextSibling);
		};
		if (!footerImageIsWebp()) {
			footer.style.backgroundImage = "url('images/overlay.webp'), url('images/" + bg + "')";
		};
	});

	Breakpoints.on(BP_LG_OR_MORE, BP_ENTER, function() {
		header.appendChild(footer);
		footer.style.backgroundImage = "none";
	});

	Breakpoints.on(BP_MD_OR_LESS, BP_ENTER, function() {
		window.removeEventListener('scroll', updateParallaxPosition);
		header.style.backgroundPosition = '';

	});

	Breakpoints.on(BP_LG_OR_MORE, BP_ENTER, function() {
		header.style.backgroundPosition = 'left 0px';
		window.addEventListener('scroll', updateParallaxPosition);
	});
}

