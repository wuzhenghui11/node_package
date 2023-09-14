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

export {
  deepCopy,
  debounce,
  throttle
}

export default wzhUtils