;(function(global, factory) {
	'use strick'
	if (typeof define === 'function' && define.amd) {
		define(factory());
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(global);
	} else {
		this.zhModule = factory(global);
	}
})(typeof window !== 'undefined' ? window : this, function(global) {
	'use strict';

	function isArray(obj) {
		return Array.isArray(obj);
	}

	function W() {
	}

	function debounce(fn, delay) {
		var timer = null;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timer);
			timer = setTimeout(function () {
				fn.apply(context, args);
			}, delay);
		}
	}

	function throttle(fn, threshhold, scope) {
		threshhold || (threshhold = 250);
		var last, deferTimer;
		return function () {
			var context = scope || this;
			var now = +new Date,
			args = arguments;
			if (last && now < last + threshhold) {
				clearTimeout(deferTimer);
				deferTimer = setTimeout(function () {
					last = now;
					fn.apply(context, args);
				}, threshhold);
			} else {
				last = now;
				fn.apply(context, args);
			}
		};
	}

	function deepCopy(obj) {
		var newObj = isArray(obj) ? [] : {};
		for (var item in obj) {
			if (typeof obj[item] === 'object' && obj[item] !== null && !(obj[item] instanceof Date)) {
				newObj[item] = this.deepCopy(obj[item]);
			} else {
				newObj[item] = obj[item];
			}
		}
		return newObj;
	}

	W.prototype = {
		constructor: W,
		deepCopy: deepCopy,
		debounce: debounce,
		throttle: throttle
	}

	var w = new W();

	return w;
});
