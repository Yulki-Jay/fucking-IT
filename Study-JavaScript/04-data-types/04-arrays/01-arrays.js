// 5.4 数组（Arrays）
// 教程：https://zh.javascript.info/array
// Node 运行：node Study-JavaScript/04-data-types/04-arrays/01-arrays.js

// 1. 创建与取值
const fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]); // Apple
console.log(fruits.at(-1)); // Plum：at 支持负索引
fruits[2] = "Pear";
console.log(fruits);
fruits[3] = "Lemon";
console.log(fruits.length); // 4

console.log("-".repeat(20));

// 2. 栈 / 队列操作
const stack = [1, 2];
stack.push(3);
console.log(stack.pop()); // 3：后进先出
console.log(stack);

const queue = [1, 2, 3];
console.log(queue.shift()); // 1：取出队首
queue.unshift(0);
console.log(queue); // [0, 2, 3]

console.log("-".repeat(20));

// 3. 遍历：for / for..of / forEach（for..in 会遍历出奇怪的东西，别用）
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
for (const item of arr) {
  console.log(item);
}
arr.forEach((item, index) => console.log(index, item));

console.log("-".repeat(20));

// 4. 多维数组 + toString
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]); // 5
console.log(String([1, 2, 3])); // "1,2,3"

// 5. 数组 vs 对象：数组是有序集合，对象是键值集合
console.log(typeof []); // object
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

console.log("-".repeat(20));

// 6. 课后练习
// 6.1 数组复制后 push 不影响原数组
const source = ["a", "b"];
const copy = [...source];
copy.push("c");
console.log(source); // ['a', 'b']
console.log(copy); // ['a', 'b', 'c']

// 6.2 数组操作：创建、中间替换、删首、加首尾
const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift()); // Jazz
styles.unshift("Rap", "Reggae");
console.log(styles); // ['Rap', 'Reggae', 'Classics', 'Rock-n-Roll']

// 6.3 求和（替代教程里 prompt 输入的版本）
function sumInput(numbers) {
  return numbers.reduce((sum, value) => sum + Number(value), 0);
}
console.log(sumInput(["1", "2", "3.5"])); // 6.5

// 6.4 最大子数组和
function getMaxSubSum(values) {
  let maxSum = 0;
  let partialSum = 0;
  for (const value of values) {
    partialSum = Math.max(0, partialSum + value);
    maxSum = Math.max(maxSum, partialSum);
  }
  return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
