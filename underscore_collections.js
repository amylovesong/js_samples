// map/filter
'use strict'

var obj = {
	name: 's',
	school: 'No.1 middle school',
	address: 'xueyuan road'
}
//map() 返回 array，mapObject() 返回 Object
var upper = _.map(obj, function (value, key) {
	return key.toUpperCase() + ':' + value.toUpperCase();
});
console.log(JSON.stringify(upper));

// every/some
_.every([1, 4, 7, -3, -9], (x) => x > 0); // 所有元素都满足条件，则 return true
_.some([1, 4, 7, -3, -9], (x) => x > 0);  // 至少有一个元素满足条件，则 return true

// max/min
var arr = [3, 5, 7, 9];
_.max(arr);
_.min(arr);

_.max([]) // -Infinity
_.min([]) // Infinity

_.max({a: 1, b: 2, c: 3});

// groupBy
var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = _.groupBy(scores, function (x) {
	if (x < 60) {
		return 'C';
	} else if (x < 80) {
		return 'B';
	} else {
		return 'A';
	}
})

// shuffle/sample
_.shuffle([1, 2, 3, 4, 5, 6]); // 用洗牌算法随机打乱一个集合
_.sample([1, 2, 3, 4, 5, 6]); // 随机选择1个元素
_.sample([1, 2, 3, 4, 5, 6], 3); // 随机选择3个




