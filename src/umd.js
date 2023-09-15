// 使得其可以通过 CommonJS、AMD 模块以及 script 标签使用
(function(global, factory) {
	// typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	// typeof define === 'function' && define.amd ? define(factory) :
	// (global = global || self, global.w = factory());
  
	if (typeof define === 'function' && define.amd) {
		define('w', factory());
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory();
	} else {
		global.zhModule = factory();
	}
})(typeof window !== 'undefined' ? window : this, function() {
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
})
