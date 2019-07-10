'use strict';

// chain: 把对象包装成支持链式调用
_.filter(_.map([1, 4, 9, 16, 25], Math.sqrt), x => x % 2 === 1); // => [1, 3, 5]
// 将上面的代码改成链式调用
var r = _.chain([1, 4, 9, 16, 25])
		 .map(Math.sqrt)
		 .filter(x => x % 2 === 1)
		 .value();
console.log(r); // => [1, 3, 5]
