/**
 * 2017-9-21 Xu Jixin
 */
const _ = require('lodash');

console.log('---------1 : chunk--------------')//讲数组进行拆分
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));

console.log('---------2 : compact-------------')//输出一个新的数组，组内元素除去0、false、空、未定义
console.log(_.compact([0, 1, false, 2, '', 3]));

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log('---------3 : concat---------------')//将俩个数组链接到一起
console.log(other);
console.log(array);

console.log('---------4 : difference------------')//输出第一个数组中，第二个数组没有的值
console.log(_.difference([2,1], [2,3]));

console.log('---------5 : differenceBy----------')//输出俩个数组不相等的值
console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4],Math.floor));
console.log(_.differenceBy([{'x' : 2}, {'x' : 1}], [{'x' : 1}], 'x'));

var objects = [{'x' : 1, 'y' : 2},{'x' : 2, 'y' : 1}];
console.log('---------6 : differenceWith---------')//输出俩个数组不相等的部分
console.log(_.differenceWith(objects,[{'x' : 1, 'y' : 2}], _.isEqual));

console.log('----------7 : drop------------------')//从前往后删
console.log(_.drop([1, 2, 3]));
console.log(_.drop([1, 2, 3], 2));
console.log(_.drop([1, 2, 3],5));
console.log(_.drop([1, 2, 3], 0));

console.log('----------8 : dropRight-----------')//从后往前删
console.log(_.dropRight([1, 2, 3]))
console.log(_.dropRight([1, 2, 3],2))
console.log(_.dropRight([1, 2, 3],5))
console.log(_.dropRight([1, 2, 3,],0))

var users = [
    {'user' : 'barney', 'active' : true},
    {'user' : 'fred', 'active' : false},
    {'user' : 'pebbles', 'active' : false}
];
console.log('----------9 : dropRightWhile--------')//从下到上查找，true就删除,直到找到false
console.log(_.dropRightWhile(users,function(o) {return !o.active;}));
console.log(_.dropRightWhile(users,{'user' : 'pebbles', 'active' : false}));
console.log(_.dropRightWhile(users, ['active', false]));
console.log(_.dropRightWhile(users, 'active'));

var users1 = [
    {'user' : 'barney', 'active' : false},
    {'user' : 'fred', 'active' : false},
    {'user' : 'pebbles', 'active' : true}
];
console.log('----------10 : dropWhile--------')//从上到下查找
console.log(_.dropWhile(users1,function(o) {return !o.active;}));
console.log(_.dropWhile(users1,{'user' : 'pebbles', 'active' : false}));
console.log(_.dropWhile(users1, ['active', false]));
console.log(_.dropWhile(users1, 'active'));

var array = [1, 2, 3];
console.log('----------11 : fill-------------')
console.log(_.fill(array, 'a'))
console.log(_.fill(Array(3), 2))
console.log(_.fill([4, 6, 8, 10], '*', 1, 3))

var users2 = [
    {'user' : 'barney', 'active' : false},
    {'user' : 'fred', 'active' : false},
    {'user' : 'pebbles', 'active' : true}
];
console.log('----------12 : findIndex---------')//从上到下查找，返回数组的位置
console.log(_.findIndex(users2,function(o) {return o.user == 'barney';}));
console.log(_.findIndex(users2,{'user' : 'fred', 'active' : false}));
console.log(_.findIndex(users2, ['active', false]));
console.log(_.findIndex(users2, 'active'));

var users3 = [
    {'user' : 'barney', 'active' : true},
    {'user' : 'fred', 'active' : false},
    {'user' : 'pebbles', 'active' : false}
];
console.log('--------13 : findLastIndex--------')//从下到上查找，返回数组的位置
console.log(_.findLastIndex(users3, function(o){return o.user == 'pebbles'}))
console.log(_.findLastIndex(users3, {'user' : 'barney', 'active' : true}))
console.log(_.findLastIndex(users3, ['active', false]))
console.log(_.findLastIndex(users3, 'active'))

console.log('---------14 : flatten-------------')//降低数组的一个维度
console.log(_.flatten([1, [2, [3, [4]], 5]]))

console.log('---------15 :flattenDeep-------------')//降低至只有一个维度
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]))

var array = [1, [2, [3, [4]], 5]];
console.log('---------16 : flattenDepth------------')//降低至最大深度
console.log(_.flattenDepth(array, 1));
console.log(_.flattenDepth(array, 2))

console.log('---------17 : fromPairs---------------')//返回键值对
console.log(_.fromPairs([['a', 1],['b', 2],['c', 3]]))

console.log('---------18 : head--------')//获取数组的第一个元素
console.log(_.head([1, 2, 3]))
console.log(_.head([]))

console.log('---------19 : indexOf---------')//给出数组中的值，从特定的位置查找，返回数组中的位置
console.log(_.indexOf([1, 2, 1, 2], 2))
console.log(_.indexOf([1, 2, 1, 2], 2, 2))

console.log('--------20 : initial---------')//返回除了最后一个元素的数组
console.log(_.initial([1, 2, 3]))
console.log(_.initial([1, 2, 3, 4]))

console.log('--------21 : intersection-------')//返回俩个数组相等的部分
console.log(_.intersection([2, 1], [2, 3]))

console.log('--------22 : intersectionBy------')//返回俩数组相等的部分
console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor))
console.log(_.intersectionBy([{'x' : 1 }], [{'x' : 2}, {'x' : 1}], 'x'))

var objects = [{'x' : 1, 'y' : 2}, {'x' : 2, 'y' : 1}]
var others = [{'x' : 1, 'y' : 1}, {'x' : 1, 'y' : 2}]
console.log('--------23 : intersectionWith-------')//俩个数组相交
console.log(_.intersectionWith(objects, others, _.isEqual))

console.log('--------24 : join-----------')//将数组中的元素用分隔符分开
console.log(_.join(['a', 'b', 'c'], '~'))

console.log('-------25 : last--------')//返回数组的最后一个元素
console.log(_.last([1, 2, 3]))

console.log('-------26 : lastIndexOf--------')//从右向左，从特定的位置查找给定的值，返回数组中的位置
console.log(_.lastIndexOf([1, 2, 1, 2], 2))
console.log(_.lastIndexOf([1, 2, 1, 2], 1, 3))

var array = ['a', 'b', 'c', 'd'];
console.log('-------27 : nth-------------')//获取数组下标n的元素。如果n为负，则从尾部返回的第n个元素。
console.log(_.nth(array, 1))
console.log(_.nth(array, -2))

var array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log('-------28 : pull------------')//删除给定的数组元素
console.log(_.pull(array, 'a', 'c'))

var array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log('-------29 : pullAll----------')//删除给定的数组元素，给定的参数为一个数组
console.log(_.pullAll(array, ['a', 'c']))

var array = [{'x' : 1}, {'x' : 2}, {'x' : 3}, {'x' : 1}];
console.log('-------30 : pullAllBy---------')//迭代比较是否相等，返回不相等的数组
console.log(_.pullAllBy(array, [{'x' : 1}, {'x' : 3}], 'x'))