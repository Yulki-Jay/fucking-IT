// 5.9 Object.keys / values / entries
// 教程：https://zh.javascript.info/keys-values-entries
// Node 运行：node Study-JavaScript/04-data-types/09-object-keys-values-entries/01-object-keys-values-entries.js

// 1. 基本用法
const user = { name: "John", age: 30, city: "Beijing" };
console.log(Object.keys(user)); // ['name', 'age', 'city']
console.log(Object.values(user)); // ['John', 30, 'Beijing']
console.log(Object.entries(user)); // [['name','John'], ...]
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}

console.log("-".repeat(20));

// 2. Symbol 键会被跳过（和 for..in 一样）
const id = Symbol("id");
const obj = { a: 1, [id]: 2 };
console.log(Object.keys(obj)); // ['a']

// 3. 转换对象：entries -> map -> 加工 -> fromEntries 回对象
const prices = { banana: 1, orange: 2, meat: 4 };
const doubled = Object.fromEntries(
  Object.entries(prices).map(([k, v]) => [k, v * 2])
);
console.log(doubled); // {banana: 2, orange: 4, meat: 8}

console.log("-".repeat(20));

// 4. 课后练习
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, v) => sum + v, 0);
}
console.log(sumSalaries({ John: 100, Pete: 300, Mary: 250 })); // 650
console.log(sumSalaries({})); // 0

function count(obj) {
  return Object.keys(obj).length;
}
console.log(count({ a: 1, b: 2 })); // 2
console.log(count({})); // 0
