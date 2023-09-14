(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["zhzl"] = factory();
	else
		root["zhzl"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   deepCopy: () => (/* binding */ deepCopy),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
// import _ from 'lodash'
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
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87O1VDVkE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBTUM7O0FBRUQsaUVBQWUsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3poemwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3poemwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vemh6bC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vemh6bC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3poemwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly96aHpsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInpoemxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiemh6bFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCBkZWxheSkge1xuICB2YXIgdGltZXIgPSBudWxsO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgdGhyZXNoaG9sZCwgc2NvcGUpIHtcbiAgdGhyZXNoaG9sZCB8fCAodGhyZXNoaG9sZCA9IDI1MCk7XG4gIHZhciBsYXN0LCBkZWZlclRpbWVyO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb250ZXh0ID0gc2NvcGUgfHwgdGhpcztcbiAgICB2YXIgbm93ID0gK25ldyBEYXRlLFxuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaGhvbGQpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICAgIGRlZmVyVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9LCB0aHJlc2hob2xkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IG5vdztcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVlcENvcHkob2JqKSB7XG4gIHZhciBuZXdPYmogPSBpc0FycmF5KG9iaikgPyBbXSA6IHt9O1xuICBmb3IgKHZhciBpdGVtIGluIG9iaikge1xuICAgIGlmICh0eXBlb2Ygb2JqW2l0ZW1dID09PSAnb2JqZWN0JyAmJiBvYmpbaXRlbV0gIT09IG51bGwgJiYgIShvYmpbaXRlbV0gaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgbmV3T2JqW2l0ZW1dID0gdGhpcy5kZWVwQ29weShvYmpbaXRlbV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdPYmpbaXRlbV0gPSBvYmpbaXRlbV07XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdPYmo7XG59XG5cblxuZnVuY3Rpb24gV3poVXRpbHMoKSB7XG4gIC8vIGNvbnN0IG9iaiA9IHtcbiAgLy8gICBkZWVwQ29weSxcbiAgLy8gICBkZWJvdW5jZSxcbiAgLy8gICB0aHJvdHRsZSxcbiAgLy8gfVxuICAvLyBsZXQgc2VsZlxuICAvLyByZXR1cm4gZnVuY3Rpb24gKCkge1xuXG4gIC8vIH1cblxuXHQvLyBsZXQgc2VsZjtcblx0Ly8gaWYgKCEoc2VsZiBpbnN0YW5jZW9mIFd6aFV0aWxzKSkge1xuXHQvLyBcdHNlbGYgPSBuZXcgV3poVXRpbHMoKVxuXHQvLyB9XG5cdC8vIFd6aFV0aWxzLnByb3RvdHlwZSA9IHtcblx0Ly8gXHRjb25zdHJ1Y3RvcjogV3poVXRpbHMsXG5cdC8vIFx0ZGVlcENvcHksXG5cdC8vIFx0ZGVib3VuY2UsXG5cdC8vIFx0dGhyb3R0bGUsXG5cdC8vIH1cbiAgLy8gcmV0dXJuIHNlbGZcbn1cblxuV3poVXRpbHMucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogV3poVXRpbHMsXG4gIGRlZXBDb3B5LFxuICBkZWJvdW5jZSxcbiAgdGhyb3R0bGUsXG59XG5cbmxldCB3emhVdGlscyA9IG5ldyBXemhVdGlscygpO1xuXG5leHBvcnQge1xuICBkZWVwQ29weSxcbiAgZGVib3VuY2UsXG4gIHRocm90dGxlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHd6aFV0aWxzIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9