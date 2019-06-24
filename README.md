## Installation
Using npm:
```shell
$ npm i wzhnodeappwzh
$ npm i --save wzhnodeappwzh
```

In Node.js:
```js
var w = require('wzhnodeappwzh');
var newObj = w.deepCopy({
	a: {
		b: 1
	}
});
```

```js
import w from 'wzhnodeappwzh';
var newObj = w.deepCopy({
	a: {
		b: 1
	}
});

window.onresize = w.debounce((event) => {
	console.log(event)
}, 250)
```
