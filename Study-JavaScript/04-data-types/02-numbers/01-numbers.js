// 5.2 数字类型（Numbers）
// 教程：https://zh.javascript.info/number
// Node 运行：node Study-JavaScript/04-data-types/02-numbers/01-numbers.js

// 1. 写法：普通、e 记法、十六进制/二进制/八进制
console.log(1000000 === 1e6); // true
console.log(0.001 === 1e-3); // true
console.log(0xff); // 255
console.log(0b1111); // 15
console.log(0o17); // 15

console.log("-".repeat(20));

// 2. 进制转换：num.toString(base)
const n = 255;
console.log(n.toString(16)); // ff
console.log(n.toString(2)); // 11111111
console.log((123).toString(8)); // 173

console.log("-".repeat(20));

// 3. 舍入
console.log(Math.floor(3.9)); // 3
console.log(Math.ceil(3.1)); // 4
console.log(Math.round(3.5)); // 4
console.log(Math.trunc(-1.9)); // -1
console.log((1.2345).toFixed(2)); // "1.23"

// 4. 精度陷阱：0.1 + 0.2 !== 0.3
console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2)); // "0.30"
console.log(Number((0.1 + 0.2).toFixed(2))); // 0.3

console.log("-".repeat(20));

// 5. 判断与解析
console.log(isNaN("abc")); // true：先转数字再判断
console.log(Number.isNaN("abc")); // false：更严格
console.log(isFinite("10")); // true
console.log(Number.isFinite("10")); // false
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5
console.log(parseInt("0xff", 16)); // 255

console.log("-".repeat(20));

// 6. Math 常用
console.log(Math.random()); // [0, 1)
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.pow(2, 10)); // 1024

console.log("-".repeat(20));

// 7. 练习（教程课后题改写：不用 prompt，用固定输入 + console.log）
// 7.1 用户输入求和：把 ["1", "2", "a"] 当作输入序列，遇到非数字停止
function sumInputs(inputs) {
  let sum = 0;
  for (const value of inputs) {
    const numValue = Number(value);
    if (!Number.isFinite(numValue)) break;
    sum += numValue;
  }
  return sum;
}
console.log(sumInputs(["1", "2", "a", "100"])); // 3

// 7.2 readNumber：把输入转成有限数字，转不成返回 null
function readNumber(value) {
  if (value === null || value === "") return null;
  const numValue = Number(value);
  return Number.isFinite(numValue) ? numValue : null;
}
console.log(readNumber("123")); // 123
console.log(readNumber("abc")); // null
console.log(readNumber("")); // null

// 7.3 随机整数 randomInteger(min, max)：含 min 和 max
function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
const r = randomInteger(1, 5);
console.log(r >= 1 && r <= 5); // true
