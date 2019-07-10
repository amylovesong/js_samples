'use strict'

// first/last
var arr = [2, 4, 6, 8];
_.first(arr);
_.last(arr);


// flatten
_.flatten([1, [2], [3, [[4], [5]]]]); // 合并数组变成一个一维数组

// zip/unzip
// zip: 按索引对齐数组，合并为一个新数组
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
_.zip(names, scores); // 对应名字和分数：[['Adam', 85], ['Lisa', 92], ['Bart', 59]]
// unzip: 与 zip 相反
var namesAndScores = [['Adam', 85], ['Lisa', 92], ['Bart', 59]];
_.unzip(namesAndScores);

// object(): 类似 zip()，但结果是 Object 而不是 Array
_.object(names, scores);

// range
_.range(10); // [0, 1, ... 8, 9]，即[0, 10)
_.range(1, 11); // [1, 2, ... 9, 10]，即[1, 11)
_.range(0, 30, 5); // [0, 5, 10, ... 20, 25]
_.range(0, -10, -1); // [0, -1, -2, ... -8, -9]

// uniq: 去重
_.uniq([1, 2, 1, 4, 1, 3]); // =>[1, 2, 4, 3]

