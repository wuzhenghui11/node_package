## Installation
Using npm/pnpm:
```shell
npm i zhzl
// ---
pnpm i zhzl
```

commonjs
```js
var zhzl = require('zhzl');
var newObj = zhzl.deepCopy({
	ob1: {
		ob2: 1
	}
});
```
esm
```js
import zhzl, { isArray } from 'zhzl';
var newObj = zhzl.deepCopy({
	a: {
		b: 1
	}
})
```
浏览器
```js
window.onresize = zhzl.debounce((event) => {
	console.log(event)
}, 250)
```
