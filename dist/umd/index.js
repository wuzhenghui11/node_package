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
/* harmony export */   isArray: () => (/* binding */ isArray),
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


function Zhzl() {
  // const obj = {
  //   deepCopy,
  //   debounce,
  //   throttle,
  // }
  // let self
  // return function () {

  // }

	// let self;
	// if (!(self instanceof Zhzl)) {
	// 	self = new Zhzl()
	// }
	// Zhzl.prototype = {
	// 	constructor: Zhzl,
	// 	deepCopy,
	// 	debounce,
	// 	throttle,
	// }
  // return self
}

Zhzl.prototype = {
  constructor: Zhzl,
  deepCopy,
  debounce,
  throttle,
}

let zhzl = new Zhzl()



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zhzl);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87O1VDVkE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQU9DOztBQUVELGlFQUFlLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aHpsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly96aHpsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3poemwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3poemwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96aHpsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemh6bC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ6aHpsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInpoemxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgZGVsYXkpIHtcbiAgdmFyIHRpbWVyID0gbnVsbDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHRocmVzaGhvbGQsIHNjb3BlKSB7XG4gIHRocmVzaGhvbGQgfHwgKHRocmVzaGhvbGQgPSAyNTApO1xuICB2YXIgbGFzdCwgZGVmZXJUaW1lcjtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29udGV4dCA9IHNjb3BlIHx8IHRoaXM7XG4gICAgdmFyIG5vdyA9ICtuZXcgRGF0ZSxcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hob2xkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZGVmZXJUaW1lcik7XG4gICAgICBkZWZlclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxhc3QgPSBub3c7XG4gICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfSwgdGhyZXNoaG9sZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBub3c7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlZXBDb3B5KG9iaikge1xuICB2YXIgbmV3T2JqID0gaXNBcnJheShvYmopID8gW10gOiB7fTtcbiAgZm9yICh2YXIgaXRlbSBpbiBvYmopIHtcbiAgICBpZiAodHlwZW9mIG9ialtpdGVtXSA9PT0gJ29iamVjdCcgJiYgb2JqW2l0ZW1dICE9PSBudWxsICYmICEob2JqW2l0ZW1dIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgIG5ld09ialtpdGVtXSA9IHRoaXMuZGVlcENvcHkob2JqW2l0ZW1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3T2JqW2l0ZW1dID0gb2JqW2l0ZW1dO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5cbmZ1bmN0aW9uIFpoemwoKSB7XG4gIC8vIGNvbnN0IG9iaiA9IHtcbiAgLy8gICBkZWVwQ29weSxcbiAgLy8gICBkZWJvdW5jZSxcbiAgLy8gICB0aHJvdHRsZSxcbiAgLy8gfVxuICAvLyBsZXQgc2VsZlxuICAvLyByZXR1cm4gZnVuY3Rpb24gKCkge1xuXG4gIC8vIH1cblxuXHQvLyBsZXQgc2VsZjtcblx0Ly8gaWYgKCEoc2VsZiBpbnN0YW5jZW9mIFpoemwpKSB7XG5cdC8vIFx0c2VsZiA9IG5ldyBaaHpsKClcblx0Ly8gfVxuXHQvLyBaaHpsLnByb3RvdHlwZSA9IHtcblx0Ly8gXHRjb25zdHJ1Y3RvcjogWmh6bCxcblx0Ly8gXHRkZWVwQ29weSxcblx0Ly8gXHRkZWJvdW5jZSxcblx0Ly8gXHR0aHJvdHRsZSxcblx0Ly8gfVxuICAvLyByZXR1cm4gc2VsZlxufVxuXG5aaHpsLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFpoemwsXG4gIGRlZXBDb3B5LFxuICBkZWJvdW5jZSxcbiAgdGhyb3R0bGUsXG59XG5cbmxldCB6aHpsID0gbmV3IFpoemwoKVxuXG5leHBvcnQge1xuICBpc0FycmF5LFxuICBkZWVwQ29weSxcbiAgZGVib3VuY2UsXG4gIHRocm90dGxlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB6aHpsIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9