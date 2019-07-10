'use strict';

// bind
var s = ' Hello  ';
s.trim(); // => 'Hello'
// 定义 fn() 取代 s.trim()
var fn = _.bind(s.trim, s); // 将 s 对象绑定到 fn() 的 this 指针上，才能正常调用
fn(); // => 'Hello'

// partial: 创建偏函数，将原函数的某些参数固定，降低新函数调用的难度
// 计算2的 y 次方
var pow2N = _.partial(Math.pow, 2); // pow2N(y) => Math.pow(2, y)
pow2N(3); // => 8
pow2N(5); // => 32
pow2N(10); // => 1024
// 计算 x 的立方
var cube = _.partial(Math.pow, _, 3); // cube(x) => Math.pow(x, 3)
cube(3); // => 27
cube(5); // => 125
cube(10); // => 1000

// memoize: 缓存函数调用结果，降低调用开销
// 例如：计算阶乘
function factorial(n) {
	console.log('start calculate ' + n + '!...');
	var s = 1, i = n;
	while(i > 1) {
		s = s * i;
		i--;
	}
	console.log(n + '! = ' + s);
	return s;
};
factorial(10);
// 用 memoize 缓存结果
var factorial_memoize = _.memoize(function(n) {
	console.log('start calculate ' + n + '!...');
	var s = 1, i = n;
	while(i > 1) {
		s = s * i;
		i--;
	}
	console.log(n + '! = ' + s);
	return s;
});
// 首次调用：输出计算过程
factorial(10);
// 第二次调用：不输出计算过程，直接输出结果
factorial(10);
// 但计算 factorial(9) 时仍会重新计算
factorial(9);
// 改造计算方式
var factorial_memoize_new = _.memoize(function(n) {
	console.log('start calculate ' + n + "!...");
	if (n < 2) {
		return 1;
	}
	return n * factorial_memoize_new(n - 1);
});
// 此次调用会缓存 factorial_memoize_new(1) ~ factorial_memoize_new(10) 的所有结果
factorial_memoize_new(10);
// 再次调用 factorial_memoize_new(9) 时，直接输出结果
factorial_memoize_new(9);

// once: 保证函数执行且仅执行一次
var register = _.once(function() {
	alert('Register ok!');
});
// 三次调用，仅执行一次
register();
register();
register();

// delay: 延迟执行，类似 setTimeout()
_.delay(alert, 2000);
var log = _.bind(console.log, console);
_.delay(log, 2000, 'Hello,', 'world!'); // => 2秒后打印'Hello, world!'

