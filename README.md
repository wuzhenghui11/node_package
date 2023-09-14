## Installation
Using npm:
```shell
$ npm i zhzl
$ npm i --save zhzl
```

In Node.js:
```js
var zhzl = require('zhzl');
var newObj = zhzl.deepCopy({
	ob1: {
		ob2: 1
	}
});
```

```js
import zhzl from 'zhzl';
var newObj = zhzl.deepCopy({
	a: {
		b: 1
	}
});

window.onresize = zhzl.debounce((event) => {
	console.log(event)
}, 250)
```
