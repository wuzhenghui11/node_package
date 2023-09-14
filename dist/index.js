(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["wzhnodeappwzh"] = factory(require("lodash"));
	else
		root["wzhnodeappwzh"] = factory(root["_"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_lodash__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   deepCopy: () => (/* binding */ deepCopy),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");



function isArray(obj) {
  return Array.isArray(obj);
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


function WzhUtils() {
  // const obj = {
  //   deepCopy,
  //   debounce,
  //   throttle,
  // }
  // let self
  // return function () {

  // }

	// let self;
	// if (!(self instanceof WzhUtils)) {
	// 	self = new WzhUtils()
	// }
	// WzhUtils.prototype = {
	// 	constructor: WzhUtils,
	// 	deepCopy,
	// 	debounce,
	// 	throttle,
	// }
  // return self
}

WzhUtils.prototype = {
  constructor: WzhUtils,
  deepCopy,
  debounce,
  throttle,
}

let wzhUtils = new WzhUtils();



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wzhUtils);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjs7O0FBR3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFNQzs7QUFFRCxpRUFBZSxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3pobm9kZWFwcHd6aC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd3pobm9kZWFwcHd6aC9leHRlcm5hbCB1bWQge1wiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCIsXCJyb290XCI6XCJfXCJ9Iiwid2VicGFjazovL3d6aG5vZGVhcHB3emgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd3pobm9kZWFwcHd6aC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd3pobm9kZWFwcHd6aC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3d6aG5vZGVhcHB3emgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93emhub2RlYXBwd3poLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3emhub2RlYXBwd3poXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3emhub2RlYXBwd3poXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sb2Rhc2hfXykgPT4ge1xucmV0dXJuICIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sb2Rhc2hfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgZGVsYXkpIHtcbiAgdmFyIHRpbWVyID0gbnVsbDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHRocmVzaGhvbGQsIHNjb3BlKSB7XG4gIHRocmVzaGhvbGQgfHwgKHRocmVzaGhvbGQgPSAyNTApO1xuICB2YXIgbGFzdCwgZGVmZXJUaW1lcjtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29udGV4dCA9IHNjb3BlIHx8IHRoaXM7XG4gICAgdmFyIG5vdyA9ICtuZXcgRGF0ZSxcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hob2xkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZGVmZXJUaW1lcik7XG4gICAgICBkZWZlclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxhc3QgPSBub3c7XG4gICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfSwgdGhyZXNoaG9sZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBub3c7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlZXBDb3B5KG9iaikge1xuICB2YXIgbmV3T2JqID0gaXNBcnJheShvYmopID8gW10gOiB7fTtcbiAgZm9yICh2YXIgaXRlbSBpbiBvYmopIHtcbiAgICBpZiAodHlwZW9mIG9ialtpdGVtXSA9PT0gJ29iamVjdCcgJiYgb2JqW2l0ZW1dICE9PSBudWxsICYmICEob2JqW2l0ZW1dIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgIG5ld09ialtpdGVtXSA9IHRoaXMuZGVlcENvcHkob2JqW2l0ZW1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3T2JqW2l0ZW1dID0gb2JqW2l0ZW1dO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5cbmZ1bmN0aW9uIFd6aFV0aWxzKCkge1xuICAvLyBjb25zdCBvYmogPSB7XG4gIC8vICAgZGVlcENvcHksXG4gIC8vICAgZGVib3VuY2UsXG4gIC8vICAgdGhyb3R0bGUsXG4gIC8vIH1cbiAgLy8gbGV0IHNlbGZcbiAgLy8gcmV0dXJuIGZ1bmN0aW9uICgpIHtcblxuICAvLyB9XG5cblx0Ly8gbGV0IHNlbGY7XG5cdC8vIGlmICghKHNlbGYgaW5zdGFuY2VvZiBXemhVdGlscykpIHtcblx0Ly8gXHRzZWxmID0gbmV3IFd6aFV0aWxzKClcblx0Ly8gfVxuXHQvLyBXemhVdGlscy5wcm90b3R5cGUgPSB7XG5cdC8vIFx0Y29uc3RydWN0b3I6IFd6aFV0aWxzLFxuXHQvLyBcdGRlZXBDb3B5LFxuXHQvLyBcdGRlYm91bmNlLFxuXHQvLyBcdHRocm90dGxlLFxuXHQvLyB9XG4gIC8vIHJldHVybiBzZWxmXG59XG5cbld6aFV0aWxzLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFd6aFV0aWxzLFxuICBkZWVwQ29weSxcbiAgZGVib3VuY2UsXG4gIHRocm90dGxlLFxufVxuXG5sZXQgd3poVXRpbHMgPSBuZXcgV3poVXRpbHMoKTtcblxuZXhwb3J0IHtcbiAgZGVlcENvcHksXG4gIGRlYm91bmNlLFxuICB0aHJvdHRsZVxufVxuXG5leHBvcnQgZGVmYXVsdCB3emhVdGlscyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==