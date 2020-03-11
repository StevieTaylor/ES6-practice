import { isArray } from '../../../utils/type/type';
/**
 *  一、array.reduce(callback(acc, cur, index?, array?), initialValue?)
 *       callback -> reducer(accumulator, currentValue, currentIndex?, sourceArray?)，参数的含义：
 *       1. initialValue?：初始值
 *       2. accumulator：累积器，用于累积每次回调的返回值
 *       3. currentValue：当前值，数组正在处理的某个元素
 *       4. currentIndex?：当前索引
 *       5. sourceArray?：源数组
 */

/**
 *  二、有initialValue和没有initialValue的情况：
 *         1.有initialValue时，accumulator的初始取值为initialValue，currentValue为array[0]
 *         2.无initialValue时，accumulator的初始取值为array[0]，currentValue为array[1]
 */
const array = [1, 2, 3, 4];
const reducer = (accumulator, curValue, curIndex, array) => {
  return accumulator + curValue;
};
console.log(array.reduce(reducer)); // 10
console.log(array.reduce(reducer, 10)); // 20

/**
 *  三、reduce的使用场景
 */
// 1. 求数组里所有元素的和
const ArraySum = (array) => {};
console.log(isArray({}));

/**
 *  实现一个reduce
 */
Array.prototype._reduce = function(func, initialValue) {
  var array = Array.prototype.slice.call(this);
  var result;
  var startIndex;
  result = initialValue ? initialValue : array[0];
  startIndex = initialValue ? 0 : 1;
  for (var i = startIndex; i < array.length; i++) {
    result = func.call(null, result, array[i], i, this);
  }
  return result;
};
