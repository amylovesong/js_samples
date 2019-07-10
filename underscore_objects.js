'use strict';

// keys/allKeys: 返回 object 的 key 组成数组
function Student(name, age) {
	this.name = name;
	this.age = age;
}

var xiaoming = new Student('小明', 15);
_.keys(xiaoming); // => ['name', 'age']

Student.prototype.school = 'No.1 Middle School';
var xiaoming1 = new Student('小明', 16);
_.allKeys(xiaoming1); // => ['name', 'age', 'school']

// values: 与 keys 对应，没有 allValues
var obj = {
	name: '小明',
	age: 18
};
_.values(obj); // => ['小明', 18]


// mapObject: object 的 map 版本
var obj = { a: 1, b: 2, c: 3 };
_.mapObject(obj, (v, k) => 100 + v); // => { a: 101, b: 102, c: 103 }

// invert: 交换 object 的 key/value
var obj = {
	Adam: 90,
	Lisa: 85,
	Bart: 59
};
_.invert(obj); // => { '59': 'Bart', '85': Lisa, '90': 'Adam'}

// extend/extendOwn: 合并多个 object
var a = {
	name: 'S',
	age: 18
};
_.exetnd(a, {age: 15}, {age: 12, city: 'Beijing'}); // => {name: 'S', age: 12, city: 'Beijing'}
// a 的内容也被更改
// extendOwn 获取属性时忽略从原型链继承的属性

//clone: 拷贝 object
var source = {
	name: 'S',
	age: 15,
	skills: ['Painting', 'Singing']
};
var copied = _.clone(source);
console.log(JSON.stringify(copied, null, '	'));
// clone 是“浅拷贝”
source.skills[0] = 'Piano';
console.log(copied.skills);

// isEqual: 比较两个 object 内容是否相同
var o1 = { name: 'S', skills: { major: 'Painting', minor: 'Singing']};
var o2 = { name: 'S', skills: { minor: 'Singing', major: 'Painting']};
console.log(o1 === o2);
_.isEqual(o1, o2);
// 比较 Array
var a1 = ['S', { skills: ['Painting', 'Singing']}];
var a2 = ['S', { skills: ['Painting', 'Singing']}];
console.log(a1 === a2);
_.isEqual(a1, a2);


