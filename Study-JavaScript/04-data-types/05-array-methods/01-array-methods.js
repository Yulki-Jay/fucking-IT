// 5.5 数组方法（Array methods）
// 教程：https://zh.javascript.info/array-methods
// Node 运行：node Study-JavaScript/04-data-types/05-array-methods/01-array-methods.js

// 1. splice：增删改万能方法（会改原数组）
const arr1 = ["I", "study", "JavaScript"];
arr1.splice(1, 1); // 从 1 开始删 1 个
console.log(arr1); // ['I', 'JavaScript']
arr1.splice(1, 0, "love"); // 从 1 开始删 0 个，插入 love
console.log(arr1); // ['I', 'love', 'JavaScript']
console.log(arr1.splice(0, 1)); // ['I']：返回被删掉的元素

console.log("-".repeat(20));

// 2. slice / concat：不改原数组，返回新数组
console.log(["t", "e", "s", "t"].slice(1, 3)); // ['e', 's']
console.log([1, 2].concat([3, 4], 5)); // [1, 2, 3, 4, 5]

// 使用 for each 遍历数组
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// 3. 查找：indexOf / includes / find / findIndex / filter
const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Pete", age: 30 },
  { id: 3, name: "Mary", age: 28 },
];
console.log([1, 2, 3].includes(2)); // true
console.log(users.find((u) => u.id === 2)); // {id: 2, ...}
console.log(users.findIndex((u) => u.name === "Mary")); // 2
console.log(users.filter((u) => u.age >= 28)); // Pete, Mary

console.log("-".repeat(20));

// 4. 转换：map / sort / reverse / split / join
console.log([1, 2, 3].map((x) => x * 2)); // [2, 4, 6]
const nums = [1, 15, 2];
nums.sort(); // 默认按字符串排，坑！
console.log(nums); // [1, 15, 2]
nums.sort((a, b) => a - b); // 数字要传比较函数
console.log(nums); // [1, 2, 15]
console.log(nums.reverse()); // [15, 2, 1]
console.log("a,b,c".split(",")); // ['a', 'b', 'c']
console.log(["a", "b", "c"].join(";")); // a;b;c

console.log("-".repeat(20));

// 5. reduce：把数组聚合成一个值
console.log([1, 2, 3, 4].reduce((sum, x) => sum + x, 0)); // 10

console.log("-".repeat(20));

// 6. 课后练习精选
function camelize(value) {
  return value
    .split("-")
    .map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join("");
}
console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage

function filterRange(values, a, b) {
  return values.filter((x) => x >= a && x <= b);
}
console.log(filterRange([5, 3, 8, 1], 1, 4)); // [3, 1]

function filterRangeInPlace(values, a, b) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] < a || values[i] > b) {
      values.splice(i, 1);
      i--;
    }
  }
}
const inPlace = [5, 3, 8, 1];
filterRangeInPlace(inPlace, 1, 4);
console.log(inPlace); // [3, 1]

function copySorted(values) {
  return [...values].sort();
}
console.log(copySorted(["HTML", "JavaScript", "CSS"])); // CSS, HTML, JavaScript

function getAverageAge(list) {
  return list.reduce((sum, u) => sum + u.age, 0) / list.length;
}
console.log(getAverageAge(users)); // 27.666...

function unique(values) {
  return [...new Set(values)];
}
console.log(unique(["a", "b", "a", "c", "b"])); // ['a', 'b', 'c']

function groupById(list) {
  return list.reduce((acc, u) => {
    acc[u.id] = u;
    return acc;
  }, {});
}
console.log(groupById(users)); // {1: {...}, 2: {...}, 3: {...}}
